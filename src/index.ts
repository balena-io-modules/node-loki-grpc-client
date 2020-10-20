import * as grpc from 'grpc';
import { Metadata } from 'grpc';
import { promisify } from 'util';

export { status, ClientReadableStream } from 'grpc';
export * from 'google-protobuf/google/protobuf/timestamp_pb.js';
export * from '../proto/compiled/logproto_grpc_pb';
export * from '../proto/compiled/logproto_pb';

export interface IGrpcClientAsync {
	[key: string]: IGrpcMethod;
}

export type IGrpcMethod = (data: any, metadata?: Metadata) => Promise<any>;

export function promisifyClient(client: any): IGrpcClientAsync {
	const promisifiedClient = {} as IGrpcClientAsync;
	for (const name of Object.values<string>(client.$method_names)) {
		promisifiedClient[name] = promisify(client[name].bind(client));
	}
	return promisifiedClient;
}

export function createInsecureCredentials() {
	return grpc.credentials.createInsecure();
}

export function createOrgIdMetadata(orgId = '1') {
	const metadata = new grpc.Metadata();
	metadata.add('x-scope-orgid', orgId);
	return metadata;
}
