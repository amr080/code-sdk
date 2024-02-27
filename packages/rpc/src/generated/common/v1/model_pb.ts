// @generated by protoc-gen-es v1.4.2 with parameter "target=ts"
// @generated from file common/v1/model.proto (package code.common.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * AccountType associates a type to an account, which infers how an account is used
 * within the Code ecosystem.
 *
 * @generated from enum code.common.v1.AccountType
 */
export enum AccountType {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: PRIMARY = 1;
   */
  PRIMARY = 1,

  /**
   * @generated from enum value: TEMPORARY_INCOMING = 2;
   */
  TEMPORARY_INCOMING = 2,

  /**
   * @generated from enum value: TEMPORARY_OUTGOING = 3;
   */
  TEMPORARY_OUTGOING = 3,

  /**
   * @generated from enum value: BUCKET_1_KIN = 4;
   */
  BUCKET_1_KIN = 4,

  /**
   * @generated from enum value: BUCKET_10_KIN = 5;
   */
  BUCKET_10_KIN = 5,

  /**
   * @generated from enum value: BUCKET_100_KIN = 6;
   */
  BUCKET_100_KIN = 6,

  /**
   * @generated from enum value: BUCKET_1_000_KIN = 7;
   */
  BUCKET_1_000_KIN = 7,

  /**
   * @generated from enum value: BUCKET_10_000_KIN = 8;
   */
  BUCKET_10_000_KIN = 8,

  /**
   * @generated from enum value: BUCKET_100_000_KIN = 9;
   */
  BUCKET_100_000_KIN = 9,

  /**
   * @generated from enum value: BUCKET_1_000_000_KIN = 10;
   */
  BUCKET_1_000_000_KIN = 10,

  /**
   * @generated from enum value: LEGACY_PRIMARY_2022 = 11;
   */
  LEGACY_PRIMARY_2022 = 11,

  /**
   * @generated from enum value: REMOTE_SEND_GIFT_CARD = 12;
   */
  REMOTE_SEND_GIFT_CARD = 12,

  /**
   * @generated from enum value: RELATIONSHIP = 13;
   */
  RELATIONSHIP = 13,

  /**
   * @generated from enum value: SWAP = 14;
   */
  SWAP = 14,
}
// Retrieve enum metadata with: proto3.getEnumType(AccountType)
proto3.util.setEnumType(AccountType, "code.common.v1.AccountType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "PRIMARY" },
  { no: 2, name: "TEMPORARY_INCOMING" },
  { no: 3, name: "TEMPORARY_OUTGOING" },
  { no: 4, name: "BUCKET_1_KIN" },
  { no: 5, name: "BUCKET_10_KIN" },
  { no: 6, name: "BUCKET_100_KIN" },
  { no: 7, name: "BUCKET_1_000_KIN" },
  { no: 8, name: "BUCKET_10_000_KIN" },
  { no: 9, name: "BUCKET_100_000_KIN" },
  { no: 10, name: "BUCKET_1_000_000_KIN" },
  { no: 11, name: "LEGACY_PRIMARY_2022" },
  { no: 12, name: "REMOTE_SEND_GIFT_CARD" },
  { no: 13, name: "RELATIONSHIP" },
  { no: 14, name: "SWAP" },
]);

/**
 * SolanaAccountId is a raw binary Ed25519 public key for a Solana account
 *
 * @generated from message code.common.v1.SolanaAccountId
 */
export class SolanaAccountId extends Message<SolanaAccountId> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<SolanaAccountId>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.SolanaAccountId";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SolanaAccountId {
    return new SolanaAccountId().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SolanaAccountId {
    return new SolanaAccountId().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SolanaAccountId {
    return new SolanaAccountId().fromJsonString(jsonString, options);
  }

  static equals(a: SolanaAccountId | PlainMessage<SolanaAccountId> | undefined, b: SolanaAccountId | PlainMessage<SolanaAccountId> | undefined): boolean {
    return proto3.util.equals(SolanaAccountId, a, b);
  }
}

/**
 * InstructionAccount is an account public key used within the context of
 * an instruction.
 *
 * @generated from message code.common.v1.InstructionAccount
 */
export class InstructionAccount extends Message<InstructionAccount> {
  /**
   * @generated from field: code.common.v1.SolanaAccountId account = 1;
   */
  account?: SolanaAccountId;

  /**
   * @generated from field: bool is_signer = 2;
   */
  isSigner = false;

  /**
   * @generated from field: bool is_writable = 3;
   */
  isWritable = false;

  constructor(data?: PartialMessage<InstructionAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.InstructionAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "account", kind: "message", T: SolanaAccountId },
    { no: 2, name: "is_signer", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "is_writable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstructionAccount {
    return new InstructionAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstructionAccount {
    return new InstructionAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstructionAccount {
    return new InstructionAccount().fromJsonString(jsonString, options);
  }

  static equals(a: InstructionAccount | PlainMessage<InstructionAccount> | undefined, b: InstructionAccount | PlainMessage<InstructionAccount> | undefined): boolean {
    return proto3.util.equals(InstructionAccount, a, b);
  }
}

/**
 * Transaction is a raw binary Solana transaction
 *
 * @generated from message code.common.v1.Transaction
 */
export class Transaction extends Message<Transaction> {
  /**
   * Maximum size taken from: https://github.com/solana-labs/solana/blob/39b3ac6a8d29e14faa1de73d8b46d390ad41797b/sdk/src/packet.rs#L9-L13
   *
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<Transaction>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.Transaction";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transaction {
    return new Transaction().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transaction {
    return new Transaction().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transaction {
    return new Transaction().fromJsonString(jsonString, options);
  }

  static equals(a: Transaction | PlainMessage<Transaction> | undefined, b: Transaction | PlainMessage<Transaction> | undefined): boolean {
    return proto3.util.equals(Transaction, a, b);
  }
}

/**
 * Blockhash is a raw binary Solana blockchash
 *
 * @generated from message code.common.v1.Blockhash
 */
export class Blockhash extends Message<Blockhash> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<Blockhash>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.Blockhash";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Blockhash {
    return new Blockhash().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Blockhash {
    return new Blockhash().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Blockhash {
    return new Blockhash().fromJsonString(jsonString, options);
  }

  static equals(a: Blockhash | PlainMessage<Blockhash> | undefined, b: Blockhash | PlainMessage<Blockhash> | undefined): boolean {
    return proto3.util.equals(Blockhash, a, b);
  }
}

/**
 * Signature is a raw binary Ed25519 signature
 *
 * @generated from message code.common.v1.Signature
 */
export class Signature extends Message<Signature> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<Signature>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.Signature";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Signature {
    return new Signature().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Signature {
    return new Signature().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Signature {
    return new Signature().fromJsonString(jsonString, options);
  }

  static equals(a: Signature | PlainMessage<Signature> | undefined, b: Signature | PlainMessage<Signature> | undefined): boolean {
    return proto3.util.equals(Signature, a, b);
  }
}

/**
 * IntentId is a client-side generated ID that maps to an intent to perform actions
 * on the blockchain fulfilled by the Code sequencer.
 *
 * @generated from message code.common.v1.IntentId
 */
export class IntentId extends Message<IntentId> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<IntentId>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.IntentId";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntentId {
    return new IntentId().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntentId {
    return new IntentId().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntentId {
    return new IntentId().fromJsonString(jsonString, options);
  }

  static equals(a: IntentId | PlainMessage<IntentId> | undefined, b: IntentId | PlainMessage<IntentId> | undefined): boolean {
    return proto3.util.equals(IntentId, a, b);
  }
}

/**
 * UserId is a globally unique identifier for a user within Code
 *
 * Note: Users outside Code are modelled as relationship accounts
 *
 * @generated from message code.common.v1.UserId
 */
export class UserId extends Message<UserId> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<UserId>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.UserId";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserId {
    return new UserId().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserId {
    return new UserId().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserId {
    return new UserId().fromJsonString(jsonString, options);
  }

  static equals(a: UserId | PlainMessage<UserId> | undefined, b: UserId | PlainMessage<UserId> | undefined): boolean {
    return proto3.util.equals(UserId, a, b);
  }
}

/**
 * DataContainerId is a globally unique identifier for a container where a user
 * can store a copy of their data
 *
 * @generated from message code.common.v1.DataContainerId
 */
export class DataContainerId extends Message<DataContainerId> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<DataContainerId>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.DataContainerId";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataContainerId {
    return new DataContainerId().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataContainerId {
    return new DataContainerId().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataContainerId {
    return new DataContainerId().fromJsonString(jsonString, options);
  }

  static equals(a: DataContainerId | PlainMessage<DataContainerId> | undefined, b: DataContainerId | PlainMessage<DataContainerId> | undefined): boolean {
    return proto3.util.equals(DataContainerId, a, b);
  }
}

/**
 * DeviceToken is an opaque token used to verify whether a device real
 *
 * @generated from message code.common.v1.DeviceToken
 */
export class DeviceToken extends Message<DeviceToken> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<DeviceToken>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.DeviceToken";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeviceToken {
    return new DeviceToken().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeviceToken {
    return new DeviceToken().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeviceToken {
    return new DeviceToken().fromJsonString(jsonString, options);
  }

  static equals(a: DeviceToken | PlainMessage<DeviceToken> | undefined, b: DeviceToken | PlainMessage<DeviceToken> | undefined): boolean {
    return proto3.util.equals(DeviceToken, a, b);
  }
}

/**
 * AppInstallId is a unque ID tied to a client app installation. It does not
 * identify a device. Value should remain private and not be shared across
 * installs.
 *
 * @generated from message code.common.v1.AppInstallId
 */
export class AppInstallId extends Message<AppInstallId> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<AppInstallId>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.AppInstallId";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppInstallId {
    return new AppInstallId().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppInstallId {
    return new AppInstallId().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppInstallId {
    return new AppInstallId().fromJsonString(jsonString, options);
  }

  static equals(a: AppInstallId | PlainMessage<AppInstallId> | undefined, b: AppInstallId | PlainMessage<AppInstallId> | undefined): boolean {
    return proto3.util.equals(AppInstallId, a, b);
  }
}

/**
 * PhoneNumber is an E.164 phone number
 *
 * @generated from message code.common.v1.PhoneNumber
 */
export class PhoneNumber extends Message<PhoneNumber> {
  /**
   * Regex provided by Twilio here: https://www.twilio.com/docs/glossary/what-e164#regex-matching-for-e164
   *
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<PhoneNumber>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.PhoneNumber";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PhoneNumber {
    return new PhoneNumber().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PhoneNumber {
    return new PhoneNumber().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PhoneNumber {
    return new PhoneNumber().fromJsonString(jsonString, options);
  }

  static equals(a: PhoneNumber | PlainMessage<PhoneNumber> | undefined, b: PhoneNumber | PlainMessage<PhoneNumber> | undefined): boolean {
    return proto3.util.equals(PhoneNumber, a, b);
  }
}

/**
 * Domain is a hostname
 *
 * @generated from message code.common.v1.Domain
 */
export class Domain extends Message<Domain> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<Domain>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.Domain";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Domain {
    return new Domain().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Domain {
    return new Domain().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Domain {
    return new Domain().fromJsonString(jsonString, options);
  }

  static equals(a: Domain | PlainMessage<Domain> | undefined, b: Domain | PlainMessage<Domain> | undefined): boolean {
    return proto3.util.equals(Domain, a, b);
  }
}

/**
 * Relationship is a set of identifiers that a user can establish a relationship
 * with.
 *
 * @generated from message code.common.v1.Relationship
 */
export class Relationship extends Message<Relationship> {
  /**
   * @generated from oneof code.common.v1.Relationship.type
   */
  type: {
    /**
     * @generated from field: code.common.v1.Domain domain = 1;
     */
    value: Domain;
    case: "domain";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Relationship>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.Relationship";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "domain", kind: "message", T: Domain, oneof: "type" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Relationship {
    return new Relationship().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Relationship {
    return new Relationship().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Relationship {
    return new Relationship().fromJsonString(jsonString, options);
  }

  static equals(a: Relationship | PlainMessage<Relationship> | undefined, b: Relationship | PlainMessage<Relationship> | undefined): boolean {
    return proto3.util.equals(Relationship, a, b);
  }
}

/**
 * Hash is a raw binary 32 byte hash value
 *
 * @generated from message code.common.v1.Hash
 */
export class Hash extends Message<Hash> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<Hash>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.Hash";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Hash {
    return new Hash().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Hash {
    return new Hash().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Hash {
    return new Hash().fromJsonString(jsonString, options);
  }

  static equals(a: Hash | PlainMessage<Hash> | undefined, b: Hash | PlainMessage<Hash> | undefined): boolean {
    return proto3.util.equals(Hash, a, b);
  }
}

/**
 * Locale is a user locale consisting of a combination of language, script and region
 *
 * @generated from message code.common.v1.Locale
 */
export class Locale extends Message<Locale> {
  /**
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<Locale>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.Locale";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Locale {
    return new Locale().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Locale {
    return new Locale().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Locale {
    return new Locale().fromJsonString(jsonString, options);
  }

  static equals(a: Locale | PlainMessage<Locale> | undefined, b: Locale | PlainMessage<Locale> | undefined): boolean {
    return proto3.util.equals(Locale, a, b);
  }
}

/**
 * UUID is a 16 byte UUID value
 *
 * @generated from message code.common.v1.UUID
 */
export class UUID extends Message<UUID> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<UUID>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.UUID";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UUID {
    return new UUID().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UUID {
    return new UUID().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UUID {
    return new UUID().fromJsonString(jsonString, options);
  }

  static equals(a: UUID | PlainMessage<UUID> | undefined, b: UUID | PlainMessage<UUID> | undefined): boolean {
    return proto3.util.equals(UUID, a, b);
  }
}

/**
 * Request is a generic wrapper for gRPC requests
 *
 * @generated from message code.common.v1.Request
 */
export class Request extends Message<Request> {
  /**
   * @generated from field: string version = 1;
   */
  version = "";

  /**
   * @generated from field: string service = 2;
   */
  service = "";

  /**
   * @generated from field: string method = 3;
   */
  method = "";

  /**
   * @generated from field: bytes body = 4;
   */
  body = new Uint8Array(0);

  constructor(data?: PartialMessage<Request>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.Request";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "body", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Request {
    return new Request().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Request {
    return new Request().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Request {
    return new Request().fromJsonString(jsonString, options);
  }

  static equals(a: Request | PlainMessage<Request> | undefined, b: Request | PlainMessage<Request> | undefined): boolean {
    return proto3.util.equals(Request, a, b);
  }
}

/**
 * Response is a generic wrapper for gRPC responses
 *
 * @generated from message code.common.v1.Response
 */
export class Response extends Message<Response> {
  /**
   * @generated from field: code.common.v1.Response.Result result = 1;
   */
  result = Response_Result.OK;

  /**
   * @generated from field: bytes body = 2;
   */
  body = new Uint8Array(0);

  /**
   * @generated from field: string message = 3;
   */
  message = "";

  constructor(data?: PartialMessage<Response>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.common.v1.Response";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(Response_Result) },
    { no: 2, name: "body", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Response {
    return new Response().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Response {
    return new Response().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Response {
    return new Response().fromJsonString(jsonString, options);
  }

  static equals(a: Response | PlainMessage<Response> | undefined, b: Response | PlainMessage<Response> | undefined): boolean {
    return proto3.util.equals(Response, a, b);
  }
}

/**
 * @generated from enum code.common.v1.Response.Result
 */
export enum Response_Result {
  /**
   * @generated from enum value: OK = 0;
   */
  OK = 0,

  /**
   * @generated from enum value: ERROR = 1;
   */
  ERROR = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(Response_Result)
proto3.util.setEnumType(Response_Result, "code.common.v1.Response.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ERROR" },
]);

