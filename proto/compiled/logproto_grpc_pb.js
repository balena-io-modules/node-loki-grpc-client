// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var logproto_pb = require('./logproto_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var gogo_pb = require('./gogo_pb.js');

function serialize_logproto_LabelRequest(arg) {
  if (!(arg instanceof logproto_pb.LabelRequest)) {
    throw new Error('Expected argument of type logproto.LabelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_LabelRequest(buffer_arg) {
  return logproto_pb.LabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_LabelResponse(arg) {
  if (!(arg instanceof logproto_pb.LabelResponse)) {
    throw new Error('Expected argument of type logproto.LabelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_LabelResponse(buffer_arg) {
  return logproto_pb.LabelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_PushRequest(arg) {
  if (!(arg instanceof logproto_pb.PushRequest)) {
    throw new Error('Expected argument of type logproto.PushRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_PushRequest(buffer_arg) {
  return logproto_pb.PushRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_PushResponse(arg) {
  if (!(arg instanceof logproto_pb.PushResponse)) {
    throw new Error('Expected argument of type logproto.PushResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_PushResponse(buffer_arg) {
  return logproto_pb.PushResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_QueryRequest(arg) {
  if (!(arg instanceof logproto_pb.QueryRequest)) {
    throw new Error('Expected argument of type logproto.QueryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_QueryRequest(buffer_arg) {
  return logproto_pb.QueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_QueryResponse(arg) {
  if (!(arg instanceof logproto_pb.QueryResponse)) {
    throw new Error('Expected argument of type logproto.QueryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_QueryResponse(buffer_arg) {
  return logproto_pb.QueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_SeriesRequest(arg) {
  if (!(arg instanceof logproto_pb.SeriesRequest)) {
    throw new Error('Expected argument of type logproto.SeriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_SeriesRequest(buffer_arg) {
  return logproto_pb.SeriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_SeriesResponse(arg) {
  if (!(arg instanceof logproto_pb.SeriesResponse)) {
    throw new Error('Expected argument of type logproto.SeriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_SeriesResponse(buffer_arg) {
  return logproto_pb.SeriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_TailRequest(arg) {
  if (!(arg instanceof logproto_pb.TailRequest)) {
    throw new Error('Expected argument of type logproto.TailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_TailRequest(buffer_arg) {
  return logproto_pb.TailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_TailResponse(arg) {
  if (!(arg instanceof logproto_pb.TailResponse)) {
    throw new Error('Expected argument of type logproto.TailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_TailResponse(buffer_arg) {
  return logproto_pb.TailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_TailersCountRequest(arg) {
  if (!(arg instanceof logproto_pb.TailersCountRequest)) {
    throw new Error('Expected argument of type logproto.TailersCountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_TailersCountRequest(buffer_arg) {
  return logproto_pb.TailersCountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_TailersCountResponse(arg) {
  if (!(arg instanceof logproto_pb.TailersCountResponse)) {
    throw new Error('Expected argument of type logproto.TailersCountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_TailersCountResponse(buffer_arg) {
  return logproto_pb.TailersCountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_TimeSeriesChunk(arg) {
  if (!(arg instanceof logproto_pb.TimeSeriesChunk)) {
    throw new Error('Expected argument of type logproto.TimeSeriesChunk');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_TimeSeriesChunk(buffer_arg) {
  return logproto_pb.TimeSeriesChunk.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_logproto_TransferChunksResponse(arg) {
  if (!(arg instanceof logproto_pb.TransferChunksResponse)) {
    throw new Error('Expected argument of type logproto.TransferChunksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_logproto_TransferChunksResponse(buffer_arg) {
  return logproto_pb.TransferChunksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PusherService = exports.PusherService = {
  push: {
    path: '/logproto.Pusher/Push',
    requestStream: false,
    responseStream: false,
    requestType: logproto_pb.PushRequest,
    responseType: logproto_pb.PushResponse,
    requestSerialize: serialize_logproto_PushRequest,
    requestDeserialize: deserialize_logproto_PushRequest,
    responseSerialize: serialize_logproto_PushResponse,
    responseDeserialize: deserialize_logproto_PushResponse,
  },
};

exports.PusherClient = grpc.makeGenericClientConstructor(PusherService);
var QuerierService = exports.QuerierService = {
  query: {
    path: '/logproto.Querier/Query',
    requestStream: false,
    responseStream: true,
    requestType: logproto_pb.QueryRequest,
    responseType: logproto_pb.QueryResponse,
    requestSerialize: serialize_logproto_QueryRequest,
    requestDeserialize: deserialize_logproto_QueryRequest,
    responseSerialize: serialize_logproto_QueryResponse,
    responseDeserialize: deserialize_logproto_QueryResponse,
  },
  label: {
    path: '/logproto.Querier/Label',
    requestStream: false,
    responseStream: false,
    requestType: logproto_pb.LabelRequest,
    responseType: logproto_pb.LabelResponse,
    requestSerialize: serialize_logproto_LabelRequest,
    requestDeserialize: deserialize_logproto_LabelRequest,
    responseSerialize: serialize_logproto_LabelResponse,
    responseDeserialize: deserialize_logproto_LabelResponse,
  },
  tail: {
    path: '/logproto.Querier/Tail',
    requestStream: false,
    responseStream: true,
    requestType: logproto_pb.TailRequest,
    responseType: logproto_pb.TailResponse,
    requestSerialize: serialize_logproto_TailRequest,
    requestDeserialize: deserialize_logproto_TailRequest,
    responseSerialize: serialize_logproto_TailResponse,
    responseDeserialize: deserialize_logproto_TailResponse,
  },
  series: {
    path: '/logproto.Querier/Series',
    requestStream: false,
    responseStream: false,
    requestType: logproto_pb.SeriesRequest,
    responseType: logproto_pb.SeriesResponse,
    requestSerialize: serialize_logproto_SeriesRequest,
    requestDeserialize: deserialize_logproto_SeriesRequest,
    responseSerialize: serialize_logproto_SeriesResponse,
    responseDeserialize: deserialize_logproto_SeriesResponse,
  },
  tailersCount: {
    path: '/logproto.Querier/TailersCount',
    requestStream: false,
    responseStream: false,
    requestType: logproto_pb.TailersCountRequest,
    responseType: logproto_pb.TailersCountResponse,
    requestSerialize: serialize_logproto_TailersCountRequest,
    requestDeserialize: deserialize_logproto_TailersCountRequest,
    responseSerialize: serialize_logproto_TailersCountResponse,
    responseDeserialize: deserialize_logproto_TailersCountResponse,
  },
};

exports.QuerierClient = grpc.makeGenericClientConstructor(QuerierService);
var IngesterService = exports.IngesterService = {
  transferChunks: {
    path: '/logproto.Ingester/TransferChunks',
    requestStream: true,
    responseStream: false,
    requestType: logproto_pb.TimeSeriesChunk,
    responseType: logproto_pb.TransferChunksResponse,
    requestSerialize: serialize_logproto_TimeSeriesChunk,
    requestDeserialize: deserialize_logproto_TimeSeriesChunk,
    responseSerialize: serialize_logproto_TransferChunksResponse,
    responseDeserialize: deserialize_logproto_TransferChunksResponse,
  },
};

exports.IngesterClient = grpc.makeGenericClientConstructor(IngesterService);
