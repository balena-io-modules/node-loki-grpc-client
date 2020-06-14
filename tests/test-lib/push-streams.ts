import * as grpc from 'grpc';
import {
	promisifyClient,
	PusherClient,
	PushRequest,
	PushResponse,
} from '../../src';
import createStreamAdapter from './create-stream-adapter';
import getOrdIdMetadata from './get-org-id-metadata';

export default function pushStreams({
	address = `localhost:9095`,
	orgId = '1',
	date = new Date(),
	line = 'Hello World!',
	labels = '{loki="cool"}',
}): Promise<PushResponse> {
	const pusher = promisifyClient(
		new PusherClient(address, grpc.credentials.createInsecure()),
	);
	const pushRequest = new PushRequest();
	pushRequest.addStreams(createStreamAdapter({ date, line, labels }));
	return pusher.push(pushRequest, getOrdIdMetadata(orgId));
}
