import * as grpc from 'grpc';

export default function getOrdIdMetadata(orgId = '1') {
	const metadata = new grpc.Metadata();
	metadata.add('x-scope-orgid', orgId);
	return metadata;
}
