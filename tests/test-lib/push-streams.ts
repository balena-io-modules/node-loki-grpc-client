import {
	promisifyClient,
	PusherClient,
	PushRequest,
	PushResponse,
	createInsecureCredentials,
	createOrgIdMetadata,
} from '../../src';
import createStreamAdapter from './create-stream-adapter';

export default function pushStreams({
	address = `${process.env.LOKI_HOST ? process.env.LOKI_HOST : ''}:9095`,
	orgId = '1',
	date = new Date(),
	line = 'Hello World!',
	labels = '{loki="cool"}',
}): Promise<PushResponse> {
	const pusher = promisifyClient(
		new PusherClient(address, createInsecureCredentials()),
	);
	const pushRequest = new PushRequest();
	pushRequest.addStreams(createStreamAdapter({ date, line, labels }));
	return pusher.push(pushRequest, createOrgIdMetadata(orgId));
}
