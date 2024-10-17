// package: finance
// file: finance.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateFundRequest extends jspb.Message {
  getUnionId(): number;
  setUnionId(value: number): void;

  getLabel(): string;
  setLabel(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getCheckChild(): boolean;
  setCheckChild(value: boolean): void;

  getRuleValue(): number;
  setRuleValue(value: number): void;

  getIsTmp(): boolean;
  setIsTmp(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFundRequest): CreateFundRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFundRequest;
  static deserializeBinaryFromReader(message: CreateFundRequest, reader: jspb.BinaryReader): CreateFundRequest;
}

export namespace CreateFundRequest {
  export type AsObject = {
    unionId: number,
    label: string,
    priority: number,
    checkChild: boolean,
    ruleValue: number,
    isTmp: boolean,
  }
}

export class CreateFundResponse extends jspb.Message {
  getFundId(): number;
  setFundId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFundResponse): CreateFundResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFundResponse;
  static deserializeBinaryFromReader(message: CreateFundResponse, reader: jspb.BinaryReader): CreateFundResponse;
}

export namespace CreateFundResponse {
  export type AsObject = {
    fundId: number,
  }
}

export class AddChildRequest extends jspb.Message {
  getFundId(): number;
  setFundId(value: number): void;

  getChildId(): number;
  setChildId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddChildRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddChildRequest): AddChildRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddChildRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddChildRequest;
  static deserializeBinaryFromReader(message: AddChildRequest, reader: jspb.BinaryReader): AddChildRequest;
}

export namespace AddChildRequest {
  export type AsObject = {
    fundId: number,
    childId: number,
  }
}

export class AddChildResponse extends jspb.Message {
  getFundId(): number;
  setFundId(value: number): void;

  getChildId(): number;
  setChildId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddChildResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddChildResponse): AddChildResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddChildResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddChildResponse;
  static deserializeBinaryFromReader(message: AddChildResponse, reader: jspb.BinaryReader): AddChildResponse;
}

export namespace AddChildResponse {
  export type AsObject = {
    fundId: number,
    childId: number,
  }
}

export class AddGoalRequest extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  getTotal(): number;
  setTotal(value: number): void;

  hasExpireDate(): boolean;
  clearExpireDate(): void;
  getExpireDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getFundId(): number;
  setFundId(value: number): void;

  getIsTmp(): boolean;
  setIsTmp(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGoalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddGoalRequest): AddGoalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddGoalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGoalRequest;
  static deserializeBinaryFromReader(message: AddGoalRequest, reader: jspb.BinaryReader): AddGoalRequest;
}

export namespace AddGoalRequest {
  export type AsObject = {
    label: string,
    total: number,
    expireDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fundId: number,
    isTmp: boolean,
  }
}

export class AddGoalResponse extends jspb.Message {
  getGoalId(): number;
  setGoalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddGoalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddGoalResponse): AddGoalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddGoalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddGoalResponse;
  static deserializeBinaryFromReader(message: AddGoalResponse, reader: jspb.BinaryReader): AddGoalResponse;
}

export namespace AddGoalResponse {
  export type AsObject = {
    goalId: number,
  }
}

export class GetFundRequest extends jspb.Message {
  getFundId(): number;
  setFundId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFundRequest): GetFundRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFundRequest;
  static deserializeBinaryFromReader(message: GetFundRequest, reader: jspb.BinaryReader): GetFundRequest;
}

export namespace GetFundRequest {
  export type AsObject = {
    fundId: number,
  }
}

export class GetFundResponse extends jspb.Message {
  getLabel(): string;
  setLabel(value: string): void;

  clearAutoOperationIdList(): void;
  getAutoOperationIdList(): Array<number>;
  setAutoOperationIdList(value: Array<number>): void;
  addAutoOperationId(value: number, index?: number): number;

  clearChildIdList(): void;
  getChildIdList(): Array<number>;
  setChildIdList(value: Array<number>): void;
  addChildId(value: number, index?: number): number;

  clearGoalIdList(): void;
  getGoalIdList(): Array<number>;
  setGoalIdList(value: Array<number>): void;
  addGoalId(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFundResponse): GetFundResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFundResponse;
  static deserializeBinaryFromReader(message: GetFundResponse, reader: jspb.BinaryReader): GetFundResponse;
}

export namespace GetFundResponse {
  export type AsObject = {
    label: string,
    autoOperationIdList: Array<number>,
    childIdList: Array<number>,
    goalIdList: Array<number>,
  }
}

export class GetFundTreeRequest extends jspb.Message {
  getFundId(): number;
  setFundId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFundTreeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFundTreeRequest): GetFundTreeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFundTreeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFundTreeRequest;
  static deserializeBinaryFromReader(message: GetFundTreeRequest, reader: jspb.BinaryReader): GetFundTreeRequest;
}

export namespace GetFundTreeRequest {
  export type AsObject = {
    fundId: number,
  }
}

export class GetFundTreeResponse extends jspb.Message {
  hasFundTree(): boolean;
  clearFundTree(): void;
  getFundTree(): FundTree | undefined;
  setFundTree(value?: FundTree): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFundTreeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFundTreeResponse): GetFundTreeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFundTreeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFundTreeResponse;
  static deserializeBinaryFromReader(message: GetFundTreeResponse, reader: jspb.BinaryReader): GetFundTreeResponse;
}

export namespace GetFundTreeResponse {
  export type AsObject = {
    fundTree?: FundTree.AsObject,
  }
}

export class FundTree extends jspb.Message {
  getFundId(): number;
  setFundId(value: number): void;

  getFundLabel(): string;
  setFundLabel(value: string): void;

  getUnionId(): number;
  setUnionId(value: number): void;

  getPriority(): number;
  setPriority(value: number): void;

  getCheckChild(): boolean;
  setCheckChild(value: boolean): void;

  getRuleValue(): number;
  setRuleValue(value: number): void;

  getFundValue(): number;
  setFundValue(value: number): void;

  clearGoalsList(): void;
  getGoalsList(): Array<GoalTree>;
  setGoalsList(value: Array<GoalTree>): void;
  addGoals(value?: GoalTree, index?: number): GoalTree;

  clearChildsList(): void;
  getChildsList(): Array<FundTree>;
  setChildsList(value: Array<FundTree>): void;
  addChilds(value?: FundTree, index?: number): FundTree;

  getIsTmp(): boolean;
  setIsTmp(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FundTree.AsObject;
  static toObject(includeInstance: boolean, msg: FundTree): FundTree.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FundTree, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FundTree;
  static deserializeBinaryFromReader(message: FundTree, reader: jspb.BinaryReader): FundTree;
}

export namespace FundTree {
  export type AsObject = {
    fundId: number,
    fundLabel: string,
    unionId: number,
    priority: number,
    checkChild: boolean,
    ruleValue: number,
    fundValue: number,
    goalsList: Array<GoalTree.AsObject>,
    childsList: Array<FundTree.AsObject>,
    isTmp: boolean,
  }
}

export class GoalTree extends jspb.Message {
  getGoalId(): number;
  setGoalId(value: number): void;

  getGoalLabel(): string;
  setGoalLabel(value: string): void;

  hasExpireDate(): boolean;
  clearExpireDate(): void;
  getExpireDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getGoalTotal(): number;
  setGoalTotal(value: number): void;

  getCurrentValue(): number;
  setCurrentValue(value: number): void;

  getSprintTotal(): number;
  setSprintTotal(value: number): void;

  getSprintIncome(): number;
  setSprintIncome(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalTree.AsObject;
  static toObject(includeInstance: boolean, msg: GoalTree): GoalTree.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalTree, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalTree;
  static deserializeBinaryFromReader(message: GoalTree, reader: jspb.BinaryReader): GoalTree;
}

export namespace GoalTree {
  export type AsObject = {
    goalId: number,
    goalLabel: string,
    expireDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    goalTotal: number,
    currentValue: number,
    sprintTotal: number,
    sprintIncome: number,
  }
}

