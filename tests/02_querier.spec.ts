import { promisify } from 'util';
import { expect } from './test-lib/chai';
import * as grpc from '@grpc/grpc-js';
import type { QueryResponse, LabelResponse, SeriesResponse } from '../src';
import {
	Timestamp,
	QuerierClient,
	QueryRequest,
	LabelRequest,
	TailRequest,
	SeriesRequest,
	TailersCountRequest,
	createInsecureCredentials,
	createOrgIdMetadata,
} from '../src';
import pushStreams from './test-lib/push-streams';
import sleep from './test-lib/sleep';

const lokiGrpcAddress = `${
	process.env.LOKI_HOST ? process.env.LOKI_HOST : ''
}:9095`;

describe('QuerierClient', function () {
	describe('QuerierClient.query', function () {
		it('should query in range between start and end timestamp', async function () {
			const date = new Date();
			const labels = '{query="me"}';
			const line = 'Hey you found me!';

			const pushResponse = await pushStreams({ date, labels, line });
			expect(pushResponse).to.be.not.null;

			const querier = new QuerierClient(
				lokiGrpcAddress,
				createInsecureCredentials(),
			);

			const startTimestamp = new Timestamp();
			startTimestamp.fromDate(new Date(Date.now() - 10000 * 60));

			const endTimestamp = new Timestamp();
			endTimestamp.fromDate(new Date());

			const queryRequest = new QueryRequest();
			queryRequest.setSelector(labels);
			queryRequest.setLimit(1000);
			queryRequest.setStart(startTimestamp);
			queryRequest.setEnd(endTimestamp);
			queryRequest.setDirection(0);

			return new Promise((resolve, reject) => {
				const call = querier.query(queryRequest, createOrgIdMetadata());
				call.on('data', (queryResponse: QueryResponse) => {
					for (const stream of queryResponse.getStreamsList()) {
						expect(stream.getLabels()).to.be.equal(labels);
					}
				});
				call.on('error', (err: any) => {
					reject(err);
				});
				call.on('end', () => {
					resolve();
				});
			});
		});

		it('should error if label query is malformed', async function () {
			const querier = new QuerierClient(
				lokiGrpcAddress,
				createInsecureCredentials(),
			);

			const startTimestamp = new Timestamp();
			startTimestamp.fromDate(new Date(Date.now() - 10000 * 60));

			const endTimestamp = new Timestamp();
			endTimestamp.fromDate(new Date());

			const queryRequest = new QueryRequest();
			queryRequest.setSelector('__INVALID_LABELS__');
			queryRequest.setLimit(1000);
			queryRequest.setStart(startTimestamp);
			queryRequest.setEnd(endTimestamp);
			queryRequest.setDirection(0);

			await new Promise<void>((resolve, reject) => {
				const call = querier.query(queryRequest, createOrgIdMetadata());

				call.on('data', () => {
					reject(Error('Expected error response to query with invalid labels'));
				});
				call.on('error', (err: Error & { code: number; details: string }) => {
					if (err.code === grpc.status.UNKNOWN) {
						resolve();
					} else {
						reject(Error(`Unexpected error: ${err.details}`));
					}
					call.destroy();
				});
				call.on('end', () => {
					reject(Error('Expected error response to query with invalid labels'));
				});
			});
		});
	});

	describe('QuerierClient.label', function () {
		it('should return labels matching query', async function () {
			const date = new Date();
			const labels = '{hello="world"}';
			const line = 'Hey you found me!';

			const pushResponse = await pushStreams({ date, labels, line });
			expect(pushResponse).to.be.not.null;

			const querier = new QuerierClient(
				lokiGrpcAddress,
				createInsecureCredentials(),
			);

			const labelRequest = new LabelRequest();
			labelRequest.setName(labels);

			const labelQuery = promisify<LabelRequest, grpc.Metadata, LabelResponse>(
				querier.label,
			).bind(querier);
			const labelResponse: LabelResponse = await labelQuery(
				labelRequest,
				createOrgIdMetadata(),
			);
			expect(labelResponse.getValuesList().length).to.be.greaterThan(0);
			expect(labelResponse.getValuesList()).to.includes('hello');
		});
	});

	describe('QuerierClient.tail', function () {
		it('should tail all pushed streams', async function () {
			this.timeout(3000);

			// eslint-disable-next-line no-async-promise-executor
			await new Promise<void>(async (resolve, reject) => {
				const querier = new QuerierClient(
					lokiGrpcAddress,
					createInsecureCredentials(),
				);

				const labels = '{hello="world"}';

				const tailRequest = new TailRequest();
				tailRequest.setQuery(labels);

				let receivedCount = 0;

				const call = querier.tail(tailRequest, createOrgIdMetadata());
				call.on('data', () => {
					receivedCount += 1;
					if (receivedCount === 3) {
						call.cancel();
						resolve();
					}
				});
				call.on('error', (err: Error & { details: string }) => {
					reject(err);
				});

				await sleep(500);

				let date = new Date();
				let line = '1';
				let pushResponse = await pushStreams({ date, labels, line });
				expect(pushResponse).to.be.not.null;

				await sleep(500);

				date = new Date();
				line = '2';
				pushResponse = await pushStreams({ date, labels, line });
				expect(pushResponse).to.be.not.null;

				await sleep(500);

				date = new Date();
				line = '3';
				pushResponse = await pushStreams({ date, labels, line });
				expect(pushResponse).to.be.not.null;

				await sleep(500);
			});
		});
	});

	describe('QuerierClient.series', function () {
		it('should return series', async function () {
			const date = new Date();
			const labels = '{hello="world"}';
			const line = 'Hey you found me!';

			const pushResponse = await pushStreams({ date, labels, line });
			expect(pushResponse).to.be.not.null;

			const querier = new QuerierClient(
				lokiGrpcAddress,
				createInsecureCredentials(),
			);

			const seriesRequest = new SeriesRequest();
			seriesRequest.setStart();
			seriesRequest.setEnd();
			seriesRequest.setGroupsList([labels]);

			const seriesQuery = promisify<
				SeriesRequest,
				grpc.Metadata,
				SeriesResponse
			>(querier.series).bind(querier);

			const seriesResponse: SeriesResponse = await seriesQuery(
				seriesRequest,
				createOrgIdMetadata(),
			);
			expect(seriesResponse.getSeriesList().length).to.be.greaterThan(0);
			expect(
				seriesResponse.getSeriesList()[0].getLabelsMap().get('hello'),
			).to.includes('world');
		});
	});

	describe('QuerierClient.tailersCount', function () {
		it('should return count of tail calls', async function () {
			// eslint-disable-next-line no-async-promise-executor
			await new Promise<void>(async (resolve, reject) => {
				const querier = new QuerierClient(
					lokiGrpcAddress,
					createInsecureCredentials(),
				);

				const tailOne = querier.tail(
					new TailRequest().setQuery('{hello="world"}'),
					createOrgIdMetadata(),
				);
				tailOne.on('error', reject);

				const tailTwo = querier.tail(
					new TailRequest().setQuery('{loki="cool"}'),
					createOrgIdMetadata(),
				);
				tailTwo.on('error', reject);

				await sleep(500);

				const tailersCountRequest = new TailersCountRequest();

				querier.tailersCount(
					tailersCountRequest,
					createOrgIdMetadata(),
					(err, tailersCountResponse) => {
						tailOne.cancel();
						tailTwo.cancel();
						if (err) {
							reject(err);
						} else {
							try {
								expect(tailersCountResponse.getCount()).to.be.greaterThan(1);
								resolve();
							} catch (expectError) {
								reject(expectError);
							}
						}
					},
				);
			});
		});
	});
});
