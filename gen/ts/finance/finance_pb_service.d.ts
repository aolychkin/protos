// package: finance
// file: finance.proto

import * as finance_pb from "./finance_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FundConfigCreateFund = {
  readonly methodName: string;
  readonly service: typeof FundConfig;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finance_pb.CreateFundRequest;
  readonly responseType: typeof finance_pb.CreateFundResponse;
};

type FundConfigAddChild = {
  readonly methodName: string;
  readonly service: typeof FundConfig;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finance_pb.AddChildRequest;
  readonly responseType: typeof finance_pb.AddChildResponse;
};

type FundConfigAddGoal = {
  readonly methodName: string;
  readonly service: typeof FundConfig;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finance_pb.AddGoalRequest;
  readonly responseType: typeof finance_pb.AddGoalResponse;
};

type FundConfigGetFund = {
  readonly methodName: string;
  readonly service: typeof FundConfig;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finance_pb.GetFundRequest;
  readonly responseType: typeof finance_pb.GetFundResponse;
};

type FundConfigGetFundTree = {
  readonly methodName: string;
  readonly service: typeof FundConfig;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof finance_pb.GetFundTreeRequest;
  readonly responseType: typeof finance_pb.GetFundTreeResponse;
};

export class FundConfig {
  static readonly serviceName: string;
  static readonly CreateFund: FundConfigCreateFund;
  static readonly AddChild: FundConfigAddChild;
  static readonly AddGoal: FundConfigAddGoal;
  static readonly GetFund: FundConfigGetFund;
  static readonly GetFundTree: FundConfigGetFundTree;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class FundConfigClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createFund(
    requestMessage: finance_pb.CreateFundRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finance_pb.CreateFundResponse|null) => void
  ): UnaryResponse;
  createFund(
    requestMessage: finance_pb.CreateFundRequest,
    callback: (error: ServiceError|null, responseMessage: finance_pb.CreateFundResponse|null) => void
  ): UnaryResponse;
  addChild(
    requestMessage: finance_pb.AddChildRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finance_pb.AddChildResponse|null) => void
  ): UnaryResponse;
  addChild(
    requestMessage: finance_pb.AddChildRequest,
    callback: (error: ServiceError|null, responseMessage: finance_pb.AddChildResponse|null) => void
  ): UnaryResponse;
  addGoal(
    requestMessage: finance_pb.AddGoalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finance_pb.AddGoalResponse|null) => void
  ): UnaryResponse;
  addGoal(
    requestMessage: finance_pb.AddGoalRequest,
    callback: (error: ServiceError|null, responseMessage: finance_pb.AddGoalResponse|null) => void
  ): UnaryResponse;
  getFund(
    requestMessage: finance_pb.GetFundRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finance_pb.GetFundResponse|null) => void
  ): UnaryResponse;
  getFund(
    requestMessage: finance_pb.GetFundRequest,
    callback: (error: ServiceError|null, responseMessage: finance_pb.GetFundResponse|null) => void
  ): UnaryResponse;
  getFundTree(
    requestMessage: finance_pb.GetFundTreeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: finance_pb.GetFundTreeResponse|null) => void
  ): UnaryResponse;
  getFundTree(
    requestMessage: finance_pb.GetFundTreeRequest,
    callback: (error: ServiceError|null, responseMessage: finance_pb.GetFundTreeResponse|null) => void
  ): UnaryResponse;
}

