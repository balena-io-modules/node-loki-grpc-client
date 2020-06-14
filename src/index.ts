import { Metadata } from 'grpc';
import { promisify } from 'util';

export * from 'google-protobuf/google/protobuf/timestamp_pb.js';
export * from './compiled/logproto_grpc_pb';
export * from './compiled/logproto_pb';

interface IGrpcClientAsync {
	[key: string]: IGrpcMethod;
}

type IGrpcMethod = (data: any, metadata?: Metadata) => Promise<any>;

export function promisifyClient(client: any): IGrpcClientAsync {
	return Object.values<string>(client.$method_names).reduce((acc, name) => {
		acc[name] = promisify(client[name].bind(client));
		return acc;
	}, {} as IGrpcClientAsync);
}
