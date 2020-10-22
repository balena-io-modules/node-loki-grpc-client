// package: logproto
// file: logproto.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as logproto_pb from "./logproto_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as gogo_pb from "./gogo_pb";

interface IPusherService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    push: IPusherService_IPush;
}

interface IPusherService_IPush extends grpc.MethodDefinition<logproto_pb.PushRequest, logproto_pb.PushResponse> {
    path: string; // "/logproto.Pusher/Push"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<logproto_pb.PushRequest>;
    requestDeserialize: grpc.deserialize<logproto_pb.PushRequest>;
    responseSerialize: grpc.serialize<logproto_pb.PushResponse>;
    responseDeserialize: grpc.deserialize<logproto_pb.PushResponse>;
}

export const PusherService: IPusherService;

export interface IPusherServer {
    push: grpc.handleUnaryCall<logproto_pb.PushRequest, logproto_pb.PushResponse>;
}

export interface IPusherClient {
    push(request: logproto_pb.PushRequest, callback: (error: grpc.ServiceError | null, response: logproto_pb.PushResponse) => void): grpc.ClientUnaryCall;
    push(request: logproto_pb.PushRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: logproto_pb.PushResponse) => void): grpc.ClientUnaryCall;
    push(request: logproto_pb.PushRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: logproto_pb.PushResponse) => void): grpc.ClientUnaryCall;
}

export class PusherClient extends grpc.Client implements IPusherClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public push(request: logproto_pb.PushRequest, callback: (error: grpc.ServiceError | null, response: logproto_pb.PushResponse) => void): grpc.ClientUnaryCall;
    public push(request: logproto_pb.PushRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: logproto_pb.PushResponse) => void): grpc.ClientUnaryCall;
    public push(request: logproto_pb.PushRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: logproto_pb.PushResponse) => void): grpc.ClientUnaryCall;
}

interface IQuerierService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    query: IQuerierService_IQuery;
    label: IQuerierService_ILabel;
    tail: IQuerierService_ITail;
    series: IQuerierService_ISeries;
    tailersCount: IQuerierService_ITailersCount;
}

interface IQuerierService_IQuery extends grpc.MethodDefinition<logproto_pb.QueryRequest, logproto_pb.QueryResponse> {
    path: string; // "/logproto.Querier/Query"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<logproto_pb.QueryRequest>;
    requestDeserialize: grpc.deserialize<logproto_pb.QueryRequest>;
    responseSerialize: grpc.serialize<logproto_pb.QueryResponse>;
    responseDeserialize: grpc.deserialize<logproto_pb.QueryResponse>;
}
interface IQuerierService_ILabel extends grpc.MethodDefinition<logproto_pb.LabelRequest, logproto_pb.LabelResponse> {
    path: string; // "/logproto.Querier/Label"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<logproto_pb.LabelRequest>;
    requestDeserialize: grpc.deserialize<logproto_pb.LabelRequest>;
    responseSerialize: grpc.serialize<logproto_pb.LabelResponse>;
    responseDeserialize: grpc.deserialize<logproto_pb.LabelResponse>;
}
interface IQuerierService_ITail extends grpc.MethodDefinition<logproto_pb.TailRequest, logproto_pb.TailResponse> {
    path: string; // "/logproto.Querier/Tail"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<logproto_pb.TailRequest>;
    requestDeserialize: grpc.deserialize<logproto_pb.TailRequest>;
    responseSerialize: grpc.serialize<logproto_pb.TailResponse>;
    responseDeserialize: grpc.deserialize<logproto_pb.TailResponse>;
}
interface IQuerierService_ISeries extends grpc.MethodDefinition<logproto_pb.SeriesRequest, logproto_pb.SeriesResponse> {
    path: string; // "/logproto.Querier/Series"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<logproto_pb.SeriesRequest>;
    requestDeserialize: grpc.deserialize<logproto_pb.SeriesRequest>;
    responseSerialize: grpc.serialize<logproto_pb.SeriesResponse>;
    responseDeserialize: grpc.deserialize<logproto_pb.SeriesResponse>;
}
interface IQuerierService_ITailersCount extends grpc.MethodDefinition<logproto_pb.TailersCountRequest, logproto_pb.TailersCountResponse> {
    path: string; // "/logproto.Querier/TailersCount"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<logproto_pb.TailersCountRequest>;
    requestDeserialize: grpc.deserialize<logproto_pb.TailersCountRequest>;
    responseSerialize: grpc.serialize<logproto_pb.TailersCountResponse>;
    responseDeserialize: grpc.deserialize<logproto_pb.TailersCountResponse>;
}

export const QuerierService: IQuerierService;

export interface IQuerierServer {
    query: grpc.handleServerStreamingCall<logproto_pb.QueryRequest, logproto_pb.QueryResponse>;
    label: grpc.handleUnaryCall<logproto_pb.LabelRequest, logproto_pb.LabelResponse>;
    tail: grpc.handleServerStreamingCall<logproto_pb.TailRequest, logproto_pb.TailResponse>;
    series: grpc.handleUnaryCall<logproto_pb.SeriesRequest, logproto_pb.SeriesResponse>;
    tailersCount: grpc.handleUnaryCall<logproto_pb.TailersCountRequest, logproto_pb.TailersCountResponse>;
}

export interface IQuerierClient {
    query(request: logproto_pb.QueryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<logproto_pb.QueryResponse>;
    query(request: logproto_pb.QueryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<logproto_pb.QueryResponse>;
    label(request: logproto_pb.LabelRequest, callback: (error: grpc.ServiceError | null, response: logproto_pb.LabelResponse) => void): grpc.ClientUnaryCall;
    label(request: logproto_pb.LabelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: logproto_pb.LabelResponse) => void): grpc.ClientUnaryCall;
    label(request: logproto_pb.LabelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: logproto_pb.LabelResponse) => void): grpc.ClientUnaryCall;
    tail(request: logproto_pb.TailRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<logproto_pb.TailResponse>;
    tail(request: logproto_pb.TailRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<logproto_pb.TailResponse>;
    series(request: logproto_pb.SeriesRequest, callback: (error: grpc.ServiceError | null, response: logproto_pb.SeriesResponse) => void): grpc.ClientUnaryCall;
    series(request: logproto_pb.SeriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: logproto_pb.SeriesResponse) => void): grpc.ClientUnaryCall;
    series(request: logproto_pb.SeriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: logproto_pb.SeriesResponse) => void): grpc.ClientUnaryCall;
    tailersCount(request: logproto_pb.TailersCountRequest, callback: (error: grpc.ServiceError | null, response: logproto_pb.TailersCountResponse) => void): grpc.ClientUnaryCall;
    tailersCount(request: logproto_pb.TailersCountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: logproto_pb.TailersCountResponse) => void): grpc.ClientUnaryCall;
    tailersCount(request: logproto_pb.TailersCountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: logproto_pb.TailersCountResponse) => void): grpc.ClientUnaryCall;
}

export class QuerierClient extends grpc.Client implements IQuerierClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public query(request: logproto_pb.QueryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<logproto_pb.QueryResponse>;
    public query(request: logproto_pb.QueryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<logproto_pb.QueryResponse>;
    public label(request: logproto_pb.LabelRequest, callback: (error: grpc.ServiceError | null, response: logproto_pb.LabelResponse) => void): grpc.ClientUnaryCall;
    public label(request: logproto_pb.LabelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: logproto_pb.LabelResponse) => void): grpc.ClientUnaryCall;
    public label(request: logproto_pb.LabelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: logproto_pb.LabelResponse) => void): grpc.ClientUnaryCall;
    public tail(request: logproto_pb.TailRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<logproto_pb.TailResponse>;
    public tail(request: logproto_pb.TailRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<logproto_pb.TailResponse>;
    public series(request: logproto_pb.SeriesRequest, callback: (error: grpc.ServiceError | null, response: logproto_pb.SeriesResponse) => void): grpc.ClientUnaryCall;
    public series(request: logproto_pb.SeriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: logproto_pb.SeriesResponse) => void): grpc.ClientUnaryCall;
    public series(request: logproto_pb.SeriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: logproto_pb.SeriesResponse) => void): grpc.ClientUnaryCall;
    public tailersCount(request: logproto_pb.TailersCountRequest, callback: (error: grpc.ServiceError | null, response: logproto_pb.TailersCountResponse) => void): grpc.ClientUnaryCall;
    public tailersCount(request: logproto_pb.TailersCountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: logproto_pb.TailersCountResponse) => void): grpc.ClientUnaryCall;
    public tailersCount(request: logproto_pb.TailersCountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: logproto_pb.TailersCountResponse) => void): grpc.ClientUnaryCall;
}

interface IIngesterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    transferChunks: IIngesterService_ITransferChunks;
}

interface IIngesterService_ITransferChunks extends grpc.MethodDefinition<logproto_pb.TimeSeriesChunk, logproto_pb.TransferChunksResponse> {
    path: string; // "/logproto.Ingester/TransferChunks"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<logproto_pb.TimeSeriesChunk>;
    requestDeserialize: grpc.deserialize<logproto_pb.TimeSeriesChunk>;
    responseSerialize: grpc.serialize<logproto_pb.TransferChunksResponse>;
    responseDeserialize: grpc.deserialize<logproto_pb.TransferChunksResponse>;
}

export const IngesterService: IIngesterService;

export interface IIngesterServer {
    transferChunks: grpc.handleClientStreamingCall<logproto_pb.TimeSeriesChunk, logproto_pb.TransferChunksResponse>;
}

export interface IIngesterClient {
    transferChunks(callback: (error: grpc.ServiceError | null, response: logproto_pb.TransferChunksResponse) => void): grpc.ClientWritableStream<logproto_pb.TimeSeriesChunk>;
    transferChunks(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: logproto_pb.TransferChunksResponse) => void): grpc.ClientWritableStream<logproto_pb.TimeSeriesChunk>;
    transferChunks(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: logproto_pb.TransferChunksResponse) => void): grpc.ClientWritableStream<logproto_pb.TimeSeriesChunk>;
    transferChunks(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: logproto_pb.TransferChunksResponse) => void): grpc.ClientWritableStream<logproto_pb.TimeSeriesChunk>;
}

export class IngesterClient extends grpc.Client implements IIngesterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public transferChunks(callback: (error: grpc.ServiceError | null, response: logproto_pb.TransferChunksResponse) => void): grpc.ClientWritableStream<logproto_pb.TimeSeriesChunk>;
    public transferChunks(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: logproto_pb.TransferChunksResponse) => void): grpc.ClientWritableStream<logproto_pb.TimeSeriesChunk>;
    public transferChunks(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: logproto_pb.TransferChunksResponse) => void): grpc.ClientWritableStream<logproto_pb.TimeSeriesChunk>;
    public transferChunks(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: logproto_pb.TransferChunksResponse) => void): grpc.ClientWritableStream<logproto_pb.TimeSeriesChunk>;
}
