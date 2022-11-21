import { promisify } from 'util';
import {
	PusherClient,
	PushRequest,
	PushResponse,
	createInsecureCredentials,
	createOrgIdMetadata,
} from '../../src';
import createStreamAdapter from './create-stream-adapter';
import * as grpc from '@grpc/grpc-js';

export default function pushStreams({
	address = `${process.env.LOKI_HOST ? process.env.LOKI_HOST : ''}:9095`,
	orgId = '1',
	date = new Date(),
	line = 'Hello World!',
	labels = '{loki="cool"}',
}): Promise<PushResponse> {
	const pusher = new PusherClient(address, createInsecureCredentials());
	const pushRequest = new PushRequest();
	pushRequest.addStreams(createStreamAdapter({ date, line, labels }));
	const push = promisify<PushRequest, grpc.Metadata, PushResponse>(
		pusher.push,
	).bind(pusher);
	return push(pushRequest, createOrgIdMetadata(orgId));
}
