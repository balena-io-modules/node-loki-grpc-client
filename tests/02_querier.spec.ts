import { expect } from './test-lib/chai';
import * as grpc from 'grpc';
import {
	Timestamp,
	QuerierClient,
	QueryRequest,
	QueryResponse,
	LabelRequest,
	LabelResponse,
	promisifyClient,
	TailRequest,
	SeriesResponse,
	SeriesRequest,
	TailersCountRequest,
} from '../src';
import pushStreams from './test-lib/push-streams';
import getOrdIdMetadata from './test-lib/get-org-id-metadata';
import sleep from './test-lib/sleep';

describe('QuerierClient', function () {
	describe('QuerierClient.query', function () {
		it('should query streams in range between start and end time', async function () {
			return new Promise(async (resolve, reject) => {
				const date = new Date();
				const labels = '{query="me"}';
				const line = 'Hey you found me!';

				const pushResponse = await pushStreams({ date, labels, line });
				expect(pushResponse).to.be.not.null;

				const querier = new QuerierClient(
					'localhost:9095',
					grpc.credentials.createInsecure(),
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

				let isDone = false;
				const call = querier.query(queryRequest, getOrdIdMetadata());

				call.on('data', (queryResponse: QueryResponse) => {
					for (const stream of queryResponse.getStreamsList()) {
						expect(stream.getLabels()).to.be.equal(labels);
					}
					isDone = true;
					resolve();
				});
				call.on('error', (error) => {
					isDone = true;
					reject(error);
				});
				call.on('end', () => {
					if (!isDone) {
						reject(Error('Did not receive response to query'));
					}
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

			const querier = promisifyClient(
				new QuerierClient('localhost:9095', grpc.credentials.createInsecure()),
			);

			const labelRequest = new LabelRequest();
			labelRequest.setName(labels);

			const labelResponse: LabelResponse = await querier.label(
				labelRequest,
				getOrdIdMetadata(),
			);
			expect(labelResponse.getValuesList().length).to.be.greaterThan(0);
			expect(labelResponse.getValuesList()).to.includes('hello');
		});
	});

	describe('QuerierClient.tail', function () {
		it('should tail all pushed streams', async function () {
			this.timeout(3000);

			return new Promise(async (resolve, reject) => {
				const querier = new QuerierClient(
					'localhost:9095',
					grpc.credentials.createInsecure(),
				);

				const labels = '{hello="world"}';

				const tailRequest = new TailRequest();
				tailRequest.setQuery(labels);

				let receivedCount: number = 0;

				const call = querier.tail(tailRequest, getOrdIdMetadata());
				call.on('data', () => {
					receivedCount += 1;
					if (receivedCount === 3) {
						call.destroy();
						resolve();
					}
				});

				call.on('error', reject);

				call.on('end', () => {
					if (receivedCount < 3) {
						reject(Error('Tail ended before all streams received'));
					}
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

			const querier = promisifyClient(
				new QuerierClient('localhost:9095', grpc.credentials.createInsecure()),
			);

			const seriesRequest = new SeriesRequest();
			seriesRequest.setStart();
			seriesRequest.setEnd();
			seriesRequest.setGroupsList([labels]);

			const seriesResponse: SeriesResponse = await querier.series(
				seriesRequest,
				getOrdIdMetadata(),
			);
			expect(seriesResponse.getSeriesList().length).to.be.greaterThan(0);
			expect(
				seriesResponse.getSeriesList()[0].getLabelsMap().get('hello'),
			).to.includes('world');
		});
	});

	describe('QuerierClient.tailersCount', function () {
		it('should tail all pushed streams', async function () {
			return new Promise(async (resolve, reject) => {
				const querier = new QuerierClient(
					'localhost:9095',
					grpc.credentials.createInsecure(),
				);

				const tailOne = querier.tail(
					new TailRequest().setQuery('{hello="world"}'),
					getOrdIdMetadata(),
				);
				tailOne.on('error', reject);

				const tailTwo = querier.tail(
					new TailRequest().setQuery('{loki="cool"}'),
					getOrdIdMetadata(),
				);
				tailTwo.on('error', reject);

				await sleep(500);

				const tailersCountRequest = new TailersCountRequest();

				querier.tailersCount(
					tailersCountRequest,
					getOrdIdMetadata(),
					(error, tailersCountResponse) => {
						if (error) {
							reject(error);
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
