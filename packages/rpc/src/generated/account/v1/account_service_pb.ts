// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file account/v1/account_service.proto (package code.account.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { AccountType, Signature, SolanaAccountId } from "../../common/v1/model_pb";
import { ExchangeData } from "../../transaction/v2/transaction_service_pb";

/**
 * @generated from message code.account.v1.IsCodeAccountRequest
 */
export class IsCodeAccountRequest extends Message<IsCodeAccountRequest> {
  /**
   * The owner account to check against.
   *
   * @generated from field: code.common.v1.SolanaAccountId owner = 1;
   */
  owner?: SolanaAccountId;

  /**
   * The signature is of serialize(IsCodeAccountRequest) without this field set
   * using the private key of the owner account. This provides an authentication
   * mechanism to the RPC.
   *
   * @generated from field: code.common.v1.Signature signature = 2;
   */
  signature?: Signature;

  constructor(data?: PartialMessage<IsCodeAccountRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.account.v1.IsCodeAccountRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "message", T: SolanaAccountId },
    { no: 2, name: "signature", kind: "message", T: Signature },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IsCodeAccountRequest {
    return new IsCodeAccountRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IsCodeAccountRequest {
    return new IsCodeAccountRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IsCodeAccountRequest {
    return new IsCodeAccountRequest().fromJsonString(jsonString, options);
  }

  static equals(a: IsCodeAccountRequest | PlainMessage<IsCodeAccountRequest> | undefined, b: IsCodeAccountRequest | PlainMessage<IsCodeAccountRequest> | undefined): boolean {
    return proto3.util.equals(IsCodeAccountRequest, a, b);
  }
}

/**
 * @generated from message code.account.v1.IsCodeAccountResponse
 */
export class IsCodeAccountResponse extends Message<IsCodeAccountResponse> {
  /**
   * @generated from field: code.account.v1.IsCodeAccountResponse.Result result = 1;
   */
  result = IsCodeAccountResponse_Result.OK;

  constructor(data?: PartialMessage<IsCodeAccountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.account.v1.IsCodeAccountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(IsCodeAccountResponse_Result) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IsCodeAccountResponse {
    return new IsCodeAccountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IsCodeAccountResponse {
    return new IsCodeAccountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IsCodeAccountResponse {
    return new IsCodeAccountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: IsCodeAccountResponse | PlainMessage<IsCodeAccountResponse> | undefined, b: IsCodeAccountResponse | PlainMessage<IsCodeAccountResponse> | undefined): boolean {
    return proto3.util.equals(IsCodeAccountResponse, a, b);
  }
}

/**
 * @generated from enum code.account.v1.IsCodeAccountResponse.Result
 */
export enum IsCodeAccountResponse_Result {
  /**
   * The account is a Code account.
   *
   * @generated from enum value: OK = 0;
   */
  OK = 0,

  /**
   * The account is not a Code account.
   *
   * @generated from enum value: NOT_FOUND = 1;
   */
  NOT_FOUND = 1,

  /**
   * The account exists, but at least one timelock account is unlocked
   *
   * @generated from enum value: UNLOCKED_TIMELOCK_ACCOUNT = 2;
   */
  UNLOCKED_TIMELOCK_ACCOUNT = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(IsCodeAccountResponse_Result)
proto3.util.setEnumType(IsCodeAccountResponse_Result, "code.account.v1.IsCodeAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "UNLOCKED_TIMELOCK_ACCOUNT" },
]);

/**
 * @generated from message code.account.v1.GetTokenAccountInfosRequest
 */
export class GetTokenAccountInfosRequest extends Message<GetTokenAccountInfosRequest> {
  /**
   * The owner account, which can also be thought of as a parent account for this
   * RPC that links to one or more token accounts.
   *
   * @generated from field: code.common.v1.SolanaAccountId owner = 1;
   */
  owner?: SolanaAccountId;

  /**
   * The signature is of serialize(GetTokenAccountInfosRequest) without this field set
   * using the private key of the owner account. This provides an authentication
   * mechanism to the RPC.
   *
   * @generated from field: code.common.v1.Signature signature = 2;
   */
  signature?: Signature;

  constructor(data?: PartialMessage<GetTokenAccountInfosRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.account.v1.GetTokenAccountInfosRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "message", T: SolanaAccountId },
    { no: 2, name: "signature", kind: "message", T: Signature },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTokenAccountInfosRequest {
    return new GetTokenAccountInfosRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTokenAccountInfosRequest {
    return new GetTokenAccountInfosRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTokenAccountInfosRequest {
    return new GetTokenAccountInfosRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetTokenAccountInfosRequest | PlainMessage<GetTokenAccountInfosRequest> | undefined, b: GetTokenAccountInfosRequest | PlainMessage<GetTokenAccountInfosRequest> | undefined): boolean {
    return proto3.util.equals(GetTokenAccountInfosRequest, a, b);
  }
}

/**
 * @generated from message code.account.v1.GetTokenAccountInfosResponse
 */
export class GetTokenAccountInfosResponse extends Message<GetTokenAccountInfosResponse> {
  /**
   * @generated from field: code.account.v1.GetTokenAccountInfosResponse.Result result = 1;
   */
  result = GetTokenAccountInfosResponse_Result.OK;

  /**
   * @generated from field: map<string, code.account.v1.TokenAccountInfo> token_account_infos = 2;
   */
  tokenAccountInfos: { [key: string]: TokenAccountInfo } = {};

  constructor(data?: PartialMessage<GetTokenAccountInfosResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.account.v1.GetTokenAccountInfosResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(GetTokenAccountInfosResponse_Result) },
    { no: 2, name: "token_account_infos", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: TokenAccountInfo} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTokenAccountInfosResponse {
    return new GetTokenAccountInfosResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTokenAccountInfosResponse {
    return new GetTokenAccountInfosResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTokenAccountInfosResponse {
    return new GetTokenAccountInfosResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetTokenAccountInfosResponse | PlainMessage<GetTokenAccountInfosResponse> | undefined, b: GetTokenAccountInfosResponse | PlainMessage<GetTokenAccountInfosResponse> | undefined): boolean {
    return proto3.util.equals(GetTokenAccountInfosResponse, a, b);
  }
}

/**
 * @generated from enum code.account.v1.GetTokenAccountInfosResponse.Result
 */
export enum GetTokenAccountInfosResponse_Result {
  /**
   * @generated from enum value: OK = 0;
   */
  OK = 0,

  /**
   * @generated from enum value: NOT_FOUND = 1;
   */
  NOT_FOUND = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(GetTokenAccountInfosResponse_Result)
proto3.util.setEnumType(GetTokenAccountInfosResponse_Result, "code.account.v1.GetTokenAccountInfosResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
]);

/**
 * @generated from message code.account.v1.TokenAccountInfo
 */
export class TokenAccountInfo extends Message<TokenAccountInfo> {
  /**
   * The token account's address
   *
   * @generated from field: code.common.v1.SolanaAccountId address = 1;
   */
  address?: SolanaAccountId;

  /**
   * The owner of the token account, which can also be thought of as a parent
   * account that links to one or more token accounts. This is provided when
   * available.
   *
   * @generated from field: code.common.v1.SolanaAccountId owner = 2;
   */
  owner?: SolanaAccountId;

  /**
   * The token account's authority, which has access to moving funds for the
   * account. This can be the owner account under certain circumstances (eg.
   * ATA, primary account). This is provided when available.
   *
   * @generated from field: code.common.v1.SolanaAccountId authority = 3;
   */
  authority?: SolanaAccountId;

  /**
   * The type of token account, which infers its intended use.
   *
   * @generated from field: code.common.v1.AccountType account_type = 4;
   */
  accountType = AccountType.UNKNOWN;

  /**
   * The account's derivation index for applicable account types. When this field
   * doesn't apply, a zero value is provided.
   *
   * @generated from field: uint64 index = 5;
   */
  index = protoInt64.zero;

  /**
   * The source of truth for the balance calculation.
   *
   * @generated from field: code.account.v1.TokenAccountInfo.BalanceSource balance_source = 6;
   */
  balanceSource = TokenAccountInfo_BalanceSource.UNKNOWN;

  /**
   * The Kin balance in quarks, as observed by Code. This may not reflect the
   * value on the blockchain and could be non-zero even if the account hasn't
   * been created. Use balance_source to determine how this value was calculated.
   *
   * @generated from field: uint64 balance = 7;
   */
  balance = protoInt64.zero;

  /**
   * The state of the account as it pertains to Code's ability to manage funds.
   *
   * @generated from field: code.account.v1.TokenAccountInfo.ManagementState management_state = 8;
   */
  managementState = TokenAccountInfo_ManagementState.UNKNOWN;

  /**
   * The state of the account on the blockchain.
   *
   * @generated from field: code.account.v1.TokenAccountInfo.BlockchainState blockchain_state = 9;
   */
  blockchainState = TokenAccountInfo_BlockchainState.UNKNOWN;

  /**
   * For temporary incoming accounts only. Flag indicates whether client must
   * actively try rotating it by issuing a ReceivePayments intent. In general,
   * clients should wait as long as possible until this flag is true or requiring
   * the funds to send their next payment.
   *
   * @generated from field: bool must_rotate = 10;
   */
  mustRotate = false;

  /**
   * Whether an account is claimed. This only applies to relevant account types
   * (eg. REMOTE_SEND_GIFT_CARD).
   *
   * @generated from field: code.account.v1.TokenAccountInfo.ClaimState claim_state = 11;
   */
  claimState = TokenAccountInfo_ClaimState.UNKNOWN;

  /**
   * For account types used as an intermediary for sending money between two
   * users (eg. REMOTE_SEND_GIFT_CARD), this represents the original exchange
   * data used to fund the account. Over time, this value will become stale:
   *  1. Exchange rates will fluctuate, so the total fiat amount will differ.
   *  2. External entities can deposit additional funds into the account, so
   *     the balance, in quarks, may be greater than the original quark value.
   *  3. The balance could have been received, so the total balance can show
   *     as zero.
   *
   * @generated from field: code.transaction.v2.ExchangeData original_exchange_data = 12;
   */
  originalExchangeData?: ExchangeData;

  constructor(data?: PartialMessage<TokenAccountInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "code.account.v1.TokenAccountInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "message", T: SolanaAccountId },
    { no: 2, name: "owner", kind: "message", T: SolanaAccountId },
    { no: 3, name: "authority", kind: "message", T: SolanaAccountId },
    { no: 4, name: "account_type", kind: "enum", T: proto3.getEnumType(AccountType) },
    { no: 5, name: "index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "balance_source", kind: "enum", T: proto3.getEnumType(TokenAccountInfo_BalanceSource) },
    { no: 7, name: "balance", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "management_state", kind: "enum", T: proto3.getEnumType(TokenAccountInfo_ManagementState) },
    { no: 9, name: "blockchain_state", kind: "enum", T: proto3.getEnumType(TokenAccountInfo_BlockchainState) },
    { no: 10, name: "must_rotate", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "claim_state", kind: "enum", T: proto3.getEnumType(TokenAccountInfo_ClaimState) },
    { no: 12, name: "original_exchange_data", kind: "message", T: ExchangeData },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenAccountInfo {
    return new TokenAccountInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenAccountInfo {
    return new TokenAccountInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenAccountInfo {
    return new TokenAccountInfo().fromJsonString(jsonString, options);
  }

  static equals(a: TokenAccountInfo | PlainMessage<TokenAccountInfo> | undefined, b: TokenAccountInfo | PlainMessage<TokenAccountInfo> | undefined): boolean {
    return proto3.util.equals(TokenAccountInfo, a, b);
  }
}

/**
 * @generated from enum code.account.v1.TokenAccountInfo.BalanceSource
 */
export enum TokenAccountInfo_BalanceSource {
  /**
   * The account's balance could not be determined. This may be returned when
   * the data source is unstable and a reliable balance cannot be determined.
   *
   * @generated from enum value: BALANCE_SOURCE_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * The account's balance was fetched directly from a finalized state on the
   * blockchain.
   *
   * @generated from enum value: BALANCE_SOURCE_BLOCKCHAIN = 1;
   */
  BLOCKCHAIN = 1,

  /**
   * The account's balance was calculated using cached values in Code. Accuracy
   * is only guaranteed when management_state is LOCKED.
   *
   * @generated from enum value: BALANCE_SOURCE_CACHE = 2;
   */
  CACHE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(TokenAccountInfo_BalanceSource)
proto3.util.setEnumType(TokenAccountInfo_BalanceSource, "code.account.v1.TokenAccountInfo.BalanceSource", [
  { no: 0, name: "BALANCE_SOURCE_UNKNOWN" },
  { no: 1, name: "BALANCE_SOURCE_BLOCKCHAIN" },
  { no: 2, name: "BALANCE_SOURCE_CACHE" },
]);

/**
 * @generated from enum code.account.v1.TokenAccountInfo.ManagementState
 */
export enum TokenAccountInfo_ManagementState {
  /**
   * The state of the account is unknown. This may be returned when the
   * data source is unstable and a reliable state cannot be determined.
   *
   * @generated from enum value: MANAGEMENT_STATE_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * Code does not maintain a management state and won't move funds for this
   * account.
   *
   * @generated from enum value: MANAGEMENT_STATE_NONE = 1;
   */
  NONE = 1,

  /**
   * The account is in the process of transitioning to the LOCKED state.
   *
   * @generated from enum value: MANAGEMENT_STATE_LOCKING = 2;
   */
  LOCKING = 2,

  /**
   * The account's funds are locked and Code has co-signing authority.
   *
   * @generated from enum value: MANAGEMENT_STATE_LOCKED = 3;
   */
  LOCKED = 3,

  /**
   * The account is in the process of transitioning to the UNLOCKED state.
   *
   * @generated from enum value: MANAGEMENT_STATE_UNLOCKING = 4;
   */
  UNLOCKING = 4,

  /**
   * The account's funds are unlocked and Code no longer has co-signing
   * authority. The account must transition to the LOCKED state to have
   * management capabilities.
   *
   * @generated from enum value: MANAGEMENT_STATE_UNLOCKED = 5;
   */
  UNLOCKED = 5,

  /**
   * The account is in the process of transitioning to the CLOSED state.
   *
   * @generated from enum value: MANAGEMENT_STATE_CLOSING = 6;
   */
  CLOSING = 6,

  /**
   * The account has been closed and doesn't exist on the blockchain.
   * Subsequently, it also has a zero balance.
   *
   * @generated from enum value: MANAGEMENT_STATE_CLOSED = 7;
   */
  CLOSED = 7,
}
// Retrieve enum metadata with: proto3.getEnumType(TokenAccountInfo_ManagementState)
proto3.util.setEnumType(TokenAccountInfo_ManagementState, "code.account.v1.TokenAccountInfo.ManagementState", [
  { no: 0, name: "MANAGEMENT_STATE_UNKNOWN" },
  { no: 1, name: "MANAGEMENT_STATE_NONE" },
  { no: 2, name: "MANAGEMENT_STATE_LOCKING" },
  { no: 3, name: "MANAGEMENT_STATE_LOCKED" },
  { no: 4, name: "MANAGEMENT_STATE_UNLOCKING" },
  { no: 5, name: "MANAGEMENT_STATE_UNLOCKED" },
  { no: 6, name: "MANAGEMENT_STATE_CLOSING" },
  { no: 7, name: "MANAGEMENT_STATE_CLOSED" },
]);

/**
 * @generated from enum code.account.v1.TokenAccountInfo.BlockchainState
 */
export enum TokenAccountInfo_BlockchainState {
  /**
   * The state of the account is unknown. This may be returned when the
   * data source is unstable and a reliable state cannot be determined.
   *
   * @generated from enum value: BLOCKCHAIN_STATE_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * The account does not exist on the blockchain.
   *
   * @generated from enum value: BLOCKCHAIN_STATE_DOES_NOT_EXIST = 1;
   */
  DOES_NOT_EXIST = 1,

  /**
   * The account is created and exists on the blockchain.
   *
   * @generated from enum value: BLOCKCHAIN_STATE_EXISTS = 2;
   */
  EXISTS = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(TokenAccountInfo_BlockchainState)
proto3.util.setEnumType(TokenAccountInfo_BlockchainState, "code.account.v1.TokenAccountInfo.BlockchainState", [
  { no: 0, name: "BLOCKCHAIN_STATE_UNKNOWN" },
  { no: 1, name: "BLOCKCHAIN_STATE_DOES_NOT_EXIST" },
  { no: 2, name: "BLOCKCHAIN_STATE_EXISTS" },
]);

/**
 * @generated from enum code.account.v1.TokenAccountInfo.ClaimState
 */
export enum TokenAccountInfo_ClaimState {
  /**
   * The account doesn't have a concept of being claimed, or the state
   * could not be fetched by server.
   *
   * @generated from enum value: CLAIM_STATE_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * The account has not yet been claimed.
   *
   * @generated from enum value: CLAIM_STATE_NOT_CLAIMED = 1;
   */
  NOT_CLAIMED = 1,

  /**
   * The account is claimed. Attempting to claim it will fail.
   *
   * @generated from enum value: CLAIM_STATE_CLAIMED = 2;
   */
  CLAIMED = 2,

  /**
   * The account hasn't been claimed, but is expired. Funds will move
   * back to the issuer. Attempting to claim it will fail.
   *
   * @generated from enum value: CLAIM_STATE_EXPIRED = 3;
   */
  EXPIRED = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(TokenAccountInfo_ClaimState)
proto3.util.setEnumType(TokenAccountInfo_ClaimState, "code.account.v1.TokenAccountInfo.ClaimState", [
  { no: 0, name: "CLAIM_STATE_UNKNOWN" },
  { no: 1, name: "CLAIM_STATE_NOT_CLAIMED" },
  { no: 2, name: "CLAIM_STATE_CLAIMED" },
  { no: 3, name: "CLAIM_STATE_EXPIRED" },
]);

