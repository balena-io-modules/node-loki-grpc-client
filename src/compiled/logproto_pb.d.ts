// package: logproto
// file: logproto.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gogo_pb from './gogo_pb';

export class PushRequest extends jspb.Message {
	clearStreamsList(): void;
	getStreamsList(): Array<StreamAdapter>;
	setStreamsList(value: Array<StreamAdapter>): PushRequest;
	addStreams(value?: StreamAdapter, index?: number): StreamAdapter;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): PushRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: PushRequest,
	): PushRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: PushRequest,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): PushRequest;
	static deserializeBinaryFromReader(
		message: PushRequest,
		reader: jspb.BinaryReader,
	): PushRequest;
}

export namespace PushRequest {
	export type AsObject = {
		streamsList: Array<StreamAdapter.AsObject>;
	};
}

export class PushResponse extends jspb.Message {
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): PushResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: PushResponse,
	): PushResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: PushResponse,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): PushResponse;
	static deserializeBinaryFromReader(
		message: PushResponse,
		reader: jspb.BinaryReader,
	): PushResponse;
}

export namespace PushResponse {
	export type AsObject = {};
}

export class QueryRequest extends jspb.Message {
	getSelector(): string;
	setSelector(value: string): QueryRequest;

	getLimit(): number;
	setLimit(value: number): QueryRequest;

	hasStart(): boolean;
	clearStart(): void;
	getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setStart(value?: google_protobuf_timestamp_pb.Timestamp): QueryRequest;

	hasEnd(): boolean;
	clearEnd(): void;
	getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setEnd(value?: google_protobuf_timestamp_pb.Timestamp): QueryRequest;

	getDirection(): Direction;
	setDirection(value: Direction): QueryRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): QueryRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: QueryRequest,
	): QueryRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: QueryRequest,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): QueryRequest;
	static deserializeBinaryFromReader(
		message: QueryRequest,
		reader: jspb.BinaryReader,
	): QueryRequest;
}

export namespace QueryRequest {
	export type AsObject = {
		selector: string;
		limit: number;
		start?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		end?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		direction: Direction;
	};
}

export class QueryResponse extends jspb.Message {
	clearStreamsList(): void;
	getStreamsList(): Array<StreamAdapter>;
	setStreamsList(value: Array<StreamAdapter>): QueryResponse;
	addStreams(value?: StreamAdapter, index?: number): StreamAdapter;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): QueryResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: QueryResponse,
	): QueryResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: QueryResponse,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): QueryResponse;
	static deserializeBinaryFromReader(
		message: QueryResponse,
		reader: jspb.BinaryReader,
	): QueryResponse;
}

export namespace QueryResponse {
	export type AsObject = {
		streamsList: Array<StreamAdapter.AsObject>;
	};
}

export class LabelRequest extends jspb.Message {
	getName(): string;
	setName(value: string): LabelRequest;

	getValues(): boolean;
	setValues(value: boolean): LabelRequest;

	hasStart(): boolean;
	clearStart(): void;
	getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setStart(value?: google_protobuf_timestamp_pb.Timestamp): LabelRequest;

	hasEnd(): boolean;
	clearEnd(): void;
	getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setEnd(value?: google_protobuf_timestamp_pb.Timestamp): LabelRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): LabelRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: LabelRequest,
	): LabelRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: LabelRequest,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): LabelRequest;
	static deserializeBinaryFromReader(
		message: LabelRequest,
		reader: jspb.BinaryReader,
	): LabelRequest;
}

export namespace LabelRequest {
	export type AsObject = {
		name: string;
		values: boolean;
		start?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		end?: google_protobuf_timestamp_pb.Timestamp.AsObject;
	};
}

export class LabelResponse extends jspb.Message {
	clearValuesList(): void;
	getValuesList(): Array<string>;
	setValuesList(value: Array<string>): LabelResponse;
	addValues(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): LabelResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: LabelResponse,
	): LabelResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: LabelResponse,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): LabelResponse;
	static deserializeBinaryFromReader(
		message: LabelResponse,
		reader: jspb.BinaryReader,
	): LabelResponse;
}

export namespace LabelResponse {
	export type AsObject = {
		valuesList: Array<string>;
	};
}

export class StreamAdapter extends jspb.Message {
	getLabels(): string;
	setLabels(value: string): StreamAdapter;

	clearEntriesList(): void;
	getEntriesList(): Array<EntryAdapter>;
	setEntriesList(value: Array<EntryAdapter>): StreamAdapter;
	addEntries(value?: EntryAdapter, index?: number): EntryAdapter;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StreamAdapter.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: StreamAdapter,
	): StreamAdapter.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: StreamAdapter,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): StreamAdapter;
	static deserializeBinaryFromReader(
		message: StreamAdapter,
		reader: jspb.BinaryReader,
	): StreamAdapter;
}

export namespace StreamAdapter {
	export type AsObject = {
		labels: string;
		entriesList: Array<EntryAdapter.AsObject>;
	};
}

export class EntryAdapter extends jspb.Message {
	hasTimestamp(): boolean;
	clearTimestamp(): void;
	getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): EntryAdapter;

	getLine(): string;
	setLine(value: string): EntryAdapter;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): EntryAdapter.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: EntryAdapter,
	): EntryAdapter.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: EntryAdapter,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): EntryAdapter;
	static deserializeBinaryFromReader(
		message: EntryAdapter,
		reader: jspb.BinaryReader,
	): EntryAdapter;
}

export namespace EntryAdapter {
	export type AsObject = {
		timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		line: string;
	};
}

export class TailRequest extends jspb.Message {
	getQuery(): string;
	setQuery(value: string): TailRequest;

	getDelayfor(): number;
	setDelayfor(value: number): TailRequest;

	getLimit(): number;
	setLimit(value: number): TailRequest;

	hasStart(): boolean;
	clearStart(): void;
	getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setStart(value?: google_protobuf_timestamp_pb.Timestamp): TailRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TailRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: TailRequest,
	): TailRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: TailRequest,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): TailRequest;
	static deserializeBinaryFromReader(
		message: TailRequest,
		reader: jspb.BinaryReader,
	): TailRequest;
}

export namespace TailRequest {
	export type AsObject = {
		query: string;
		delayfor: number;
		limit: number;
		start?: google_protobuf_timestamp_pb.Timestamp.AsObject;
	};
}

export class TailResponse extends jspb.Message {
	hasStream(): boolean;
	clearStream(): void;
	getStream(): StreamAdapter | undefined;
	setStream(value?: StreamAdapter): TailResponse;

	clearDroppedstreamsList(): void;
	getDroppedstreamsList(): Array<DroppedStream>;
	setDroppedstreamsList(value: Array<DroppedStream>): TailResponse;
	addDroppedstreams(value?: DroppedStream, index?: number): DroppedStream;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TailResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: TailResponse,
	): TailResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: TailResponse,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): TailResponse;
	static deserializeBinaryFromReader(
		message: TailResponse,
		reader: jspb.BinaryReader,
	): TailResponse;
}

export namespace TailResponse {
	export type AsObject = {
		stream?: StreamAdapter.AsObject;
		droppedstreamsList: Array<DroppedStream.AsObject>;
	};
}

export class SeriesRequest extends jspb.Message {
	hasStart(): boolean;
	clearStart(): void;
	getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setStart(value?: google_protobuf_timestamp_pb.Timestamp): SeriesRequest;

	hasEnd(): boolean;
	clearEnd(): void;
	getEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setEnd(value?: google_protobuf_timestamp_pb.Timestamp): SeriesRequest;

	clearGroupsList(): void;
	getGroupsList(): Array<string>;
	setGroupsList(value: Array<string>): SeriesRequest;
	addGroups(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SeriesRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: SeriesRequest,
	): SeriesRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: SeriesRequest,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): SeriesRequest;
	static deserializeBinaryFromReader(
		message: SeriesRequest,
		reader: jspb.BinaryReader,
	): SeriesRequest;
}

export namespace SeriesRequest {
	export type AsObject = {
		start?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		end?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		groupsList: Array<string>;
	};
}

export class SeriesResponse extends jspb.Message {
	clearSeriesList(): void;
	getSeriesList(): Array<SeriesIdentifier>;
	setSeriesList(value: Array<SeriesIdentifier>): SeriesResponse;
	addSeries(value?: SeriesIdentifier, index?: number): SeriesIdentifier;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SeriesResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: SeriesResponse,
	): SeriesResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: SeriesResponse,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): SeriesResponse;
	static deserializeBinaryFromReader(
		message: SeriesResponse,
		reader: jspb.BinaryReader,
	): SeriesResponse;
}

export namespace SeriesResponse {
	export type AsObject = {
		seriesList: Array<SeriesIdentifier.AsObject>;
	};
}

export class SeriesIdentifier extends jspb.Message {
	getLabelsMap(): jspb.Map<string, string>;
	clearLabelsMap(): void;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SeriesIdentifier.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: SeriesIdentifier,
	): SeriesIdentifier.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: SeriesIdentifier,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): SeriesIdentifier;
	static deserializeBinaryFromReader(
		message: SeriesIdentifier,
		reader: jspb.BinaryReader,
	): SeriesIdentifier;
}

export namespace SeriesIdentifier {
	export type AsObject = {
		labelsMap: Array<[string, string]>;
	};
}

export class DroppedStream extends jspb.Message {
	hasFrom(): boolean;
	clearFrom(): void;
	getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setFrom(value?: google_protobuf_timestamp_pb.Timestamp): DroppedStream;

	hasTo(): boolean;
	clearTo(): void;
	getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setTo(value?: google_protobuf_timestamp_pb.Timestamp): DroppedStream;

	getLabels(): string;
	setLabels(value: string): DroppedStream;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DroppedStream.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: DroppedStream,
	): DroppedStream.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: DroppedStream,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): DroppedStream;
	static deserializeBinaryFromReader(
		message: DroppedStream,
		reader: jspb.BinaryReader,
	): DroppedStream;
}

export namespace DroppedStream {
	export type AsObject = {
		from?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		to?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		labels: string;
	};
}

export class TimeSeriesChunk extends jspb.Message {
	getFromIngesterId(): string;
	setFromIngesterId(value: string): TimeSeriesChunk;

	getUserId(): string;
	setUserId(value: string): TimeSeriesChunk;

	clearLabelsList(): void;
	getLabelsList(): Array<LabelPair>;
	setLabelsList(value: Array<LabelPair>): TimeSeriesChunk;
	addLabels(value?: LabelPair, index?: number): LabelPair;

	clearChunksList(): void;
	getChunksList(): Array<Chunk>;
	setChunksList(value: Array<Chunk>): TimeSeriesChunk;
	addChunks(value?: Chunk, index?: number): Chunk;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TimeSeriesChunk.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: TimeSeriesChunk,
	): TimeSeriesChunk.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: TimeSeriesChunk,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): TimeSeriesChunk;
	static deserializeBinaryFromReader(
		message: TimeSeriesChunk,
		reader: jspb.BinaryReader,
	): TimeSeriesChunk;
}

export namespace TimeSeriesChunk {
	export type AsObject = {
		fromIngesterId: string;
		userId: string;
		labelsList: Array<LabelPair.AsObject>;
		chunksList: Array<Chunk.AsObject>;
	};
}

export class LabelPair extends jspb.Message {
	getName(): string;
	setName(value: string): LabelPair;

	getValue(): string;
	setValue(value: string): LabelPair;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): LabelPair.AsObject;
	static toObject(includeInstance: boolean, msg: LabelPair): LabelPair.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: LabelPair,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): LabelPair;
	static deserializeBinaryFromReader(
		message: LabelPair,
		reader: jspb.BinaryReader,
	): LabelPair;
}

export namespace LabelPair {
	export type AsObject = {
		name: string;
		value: string;
	};
}

export class Chunk extends jspb.Message {
	getData(): Uint8Array | string;
	getData_asU8(): Uint8Array;
	getData_asB64(): string;
	setData(value: Uint8Array | string): Chunk;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Chunk.AsObject;
	static toObject(includeInstance: boolean, msg: Chunk): Chunk.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: Chunk,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): Chunk;
	static deserializeBinaryFromReader(
		message: Chunk,
		reader: jspb.BinaryReader,
	): Chunk;
}

export namespace Chunk {
	export type AsObject = {
		data: Uint8Array | string;
	};
}

export class TransferChunksResponse extends jspb.Message {
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TransferChunksResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: TransferChunksResponse,
	): TransferChunksResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: TransferChunksResponse,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): TransferChunksResponse;
	static deserializeBinaryFromReader(
		message: TransferChunksResponse,
		reader: jspb.BinaryReader,
	): TransferChunksResponse;
}

export namespace TransferChunksResponse {
	export type AsObject = {};
}

export class TailersCountRequest extends jspb.Message {
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TailersCountRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: TailersCountRequest,
	): TailersCountRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: TailersCountRequest,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): TailersCountRequest;
	static deserializeBinaryFromReader(
		message: TailersCountRequest,
		reader: jspb.BinaryReader,
	): TailersCountRequest;
}

export namespace TailersCountRequest {
	export type AsObject = {};
}

export class TailersCountResponse extends jspb.Message {
	getCount(): number;
	setCount(value: number): TailersCountResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TailersCountResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: TailersCountResponse,
	): TailersCountResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: {
		[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
	};
	static serializeBinaryToWriter(
		message: TailersCountResponse,
		writer: jspb.BinaryWriter,
	): void;
	static deserializeBinary(bytes: Uint8Array): TailersCountResponse;
	static deserializeBinaryFromReader(
		message: TailersCountResponse,
		reader: jspb.BinaryReader,
	): TailersCountResponse;
}

export namespace TailersCountResponse {
	export type AsObject = {
		count: number;
	};
}

export enum Direction {
	FORWARD = 0,
	BACKWARD = 1,
}
