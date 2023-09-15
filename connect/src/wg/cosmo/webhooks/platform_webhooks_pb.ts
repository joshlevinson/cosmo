// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file wg/cosmo/webhooks/platform_webhooks.proto (package wg.cosmo.webhooks, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FederatedGraph } from "./common_pb.js";

/**
 * @generated from enum wg.cosmo.webhooks.PlatformEventName
 */
export enum PlatformEventName {
  /**
   * @generated from enum value: USER_REGISTER_SUCCESS = 0;
   */
  USER_REGISTER_SUCCESS = 0,

  /**
   * @generated from enum value: GRAPH_MIGRATE_INIT = 1;
   */
  GRAPH_MIGRATE_INIT = 1,

  /**
   * @generated from enum value: GRAPH_MIGRATE_SUCCESS = 2;
   */
  GRAPH_MIGRATE_SUCCESS = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(PlatformEventName)
proto3.util.setEnumType(PlatformEventName, "wg.cosmo.webhooks.PlatformEventName", [
  { no: 0, name: "USER_REGISTER_SUCCESS" },
  { no: 1, name: "GRAPH_MIGRATE_INIT" },
  { no: 2, name: "GRAPH_MIGRATE_SUCCESS" },
]);

/**
 * @generated from message wg.cosmo.webhooks.GraphMigrate
 */
export class GraphMigrate extends Message<GraphMigrate> {
  /**
   * @generated from field: int32 version = 1;
   */
  version = 0;

  /**
   * @generated from field: wg.cosmo.webhooks.FederatedGraph federated_graph = 2;
   */
  federatedGraph?: FederatedGraph;

  /**
   * @generated from field: optional string actorID = 3;
   */
  actorID?: string;

  constructor(data?: PartialMessage<GraphMigrate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wg.cosmo.webhooks.GraphMigrate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "federated_graph", kind: "message", T: FederatedGraph },
    { no: 3, name: "actorID", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GraphMigrate {
    return new GraphMigrate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GraphMigrate {
    return new GraphMigrate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GraphMigrate {
    return new GraphMigrate().fromJsonString(jsonString, options);
  }

  static equals(a: GraphMigrate | PlainMessage<GraphMigrate> | undefined, b: GraphMigrate | PlainMessage<GraphMigrate> | undefined): boolean {
    return proto3.util.equals(GraphMigrate, a, b);
  }
}

/**
 * @generated from message wg.cosmo.webhooks.UserRegister
 */
export class UserRegister extends Message<UserRegister> {
  /**
   * @generated from field: int32 version = 1;
   */
  version = 0;

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  /**
   * @generated from field: string email = 3;
   */
  email = "";

  constructor(data?: PartialMessage<UserRegister>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wg.cosmo.webhooks.UserRegister";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserRegister {
    return new UserRegister().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserRegister {
    return new UserRegister().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserRegister {
    return new UserRegister().fromJsonString(jsonString, options);
  }

  static equals(a: UserRegister | PlainMessage<UserRegister> | undefined, b: UserRegister | PlainMessage<UserRegister> | undefined): boolean {
    return proto3.util.equals(UserRegister, a, b);
  }
}

