import * as grpc from '@grpc/grpc-js';

export { status, ClientReadableStream, ServiceError } from '@grpc/grpc-js';
export * from 'google-protobuf/google/protobuf/timestamp_pb.js';
export * from '../proto/compiled/logproto_grpc_pb';
export * from '../proto/compiled/logproto_pb';

export function createInsecureCredentials() {
	return grpc.credentials.createInsecure();
}

export function createOrgIdMetadata(orgId = '1') {
	const metadata = new grpc.Metadata();
	metadata.add('x-scope-orgid', orgId);
	return metadata;
}
