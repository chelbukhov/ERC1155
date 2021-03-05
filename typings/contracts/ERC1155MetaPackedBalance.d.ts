/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ERC1155MetaPackedBalanceInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "getIDBinIndex(uint256)": FunctionFragment;
    "getNonce(address)": FunctionFragment;
    "getValueInBin(uint256,uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "isValidSignature(address,bytes32,bytes,bytes)": FunctionFragment;
    "metaSafeBatchTransferFrom(address,address,uint256[],uint256[],bool,bytes)": FunctionFragment;
    "metaSafeTransferFrom(address,address,uint256,uint256,bool,bytes)": FunctionFragment;
    "metaSetApprovalForAll(address,address,bool,bool,bytes)": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getIDBinIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getValueInBin",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [string, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "metaSafeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "metaSafeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "metaSetApprovalForAll",
    values: [string, string, boolean, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIDBinIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getValueInBin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "metaSafeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "metaSafeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "metaSetApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "NonceChange(address,uint256)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NonceChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
}

export class ERC1155MetaPackedBalance extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ERC1155MetaPackedBalanceInterface;

  functions: {
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOf(address,uint256)"(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "balanceOfBatch(address[],uint256[])"(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getIDBinIndex(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { bin: BigNumber; index: BigNumber }>;

    "getIDBinIndex(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { bin: BigNumber; index: BigNumber }>;

    getNonce(
      _signer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    "getNonce(address)"(
      _signer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    getValueInBin(
      _binValues: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getValueInBin(uint256,uint256)"(
      _binValues: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isOperator: boolean }>;

    "isApprovedForAll(address,address)"(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isOperator: boolean }>;

    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isValid: boolean }>;

    "isValidSignature(address,bytes32,bytes,bytes)"(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isValid: boolean }>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "metaSafeBatchTransferFrom(address,address,uint256[],uint256[],bool,bytes)"(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "metaSafeTransferFrom(address,address,uint256,uint256,bool,bytes)"(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "metaSetApprovalForAll(address,address,bool,bool,bytes)"(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setApprovalForAll(address,bool)"(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  balanceOf(
    _owner: string,
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceOf(address,uint256)"(
    _owner: string,
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    _owners: string[],
    _ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "balanceOfBatch(address[],uint256[])"(
    _owners: string[],
    _ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getIDBinIndex(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { bin: BigNumber; index: BigNumber }>;

  "getIDBinIndex(uint256)"(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { bin: BigNumber; index: BigNumber }>;

  getNonce(_signer: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getNonce(address)"(
    _signer: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getValueInBin(
    _binValues: BigNumberish,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getValueInBin(uint256,uint256)"(
    _binValues: BigNumberish,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isApprovedForAll(
    _owner: string,
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isApprovedForAll(address,address)"(
    _owner: string,
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isValidSignature(
    _signerAddress: string,
    _hash: BytesLike,
    _data: BytesLike,
    _sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isValidSignature(address,bytes32,bytes,bytes)"(
    _signerAddress: string,
    _hash: BytesLike,
    _data: BytesLike,
    _sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  metaSafeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _isGasFee: boolean,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "metaSafeBatchTransferFrom(address,address,uint256[],uint256[],bool,bytes)"(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _isGasFee: boolean,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  metaSafeTransferFrom(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _isGasFee: boolean,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "metaSafeTransferFrom(address,address,uint256,uint256,bool,bytes)"(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _isGasFee: boolean,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  metaSetApprovalForAll(
    _owner: string,
    _operator: string,
    _approved: boolean,
    _isGasFee: boolean,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "metaSetApprovalForAll(address,address,bool,bool,bytes)"(
    _owner: string,
    _operator: string,
    _approved: boolean,
    _isGasFee: boolean,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  safeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,uint256,bytes)"(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    _operator: string,
    _approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setApprovalForAll(address,bool)"(
    _operator: string,
    _approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  supportsInterface(
    _interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    _interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address,uint256)"(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "balanceOfBatch(address[],uint256[])"(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getIDBinIndex(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { bin: BigNumber; index: BigNumber }>;

    "getIDBinIndex(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { bin: BigNumber; index: BigNumber }>;

    getNonce(_signer: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce(address)"(
      _signer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueInBin(
      _binValues: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getValueInBin(uint256,uint256)"(
      _binValues: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isApprovedForAll(address,address)"(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isValidSignature(address,bytes32,bytes,bytes)"(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "metaSafeBatchTransferFrom(address,address,uint256[],uint256[],bool,bytes)"(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "metaSafeTransferFrom(address,address,uint256,uint256,bool,bytes)"(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "metaSetApprovalForAll(address,address,bool,bool,bytes)"(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setApprovalForAll(address,bool)"(
      _operator: string,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    NonceChange(signer: string | null, newNonce: null): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _amounts: null
    ): EventFilter;

    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _amount: null
    ): EventFilter;
  };

  estimateGas: {
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address,uint256)"(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfBatch(address[],uint256[])"(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIDBinIndex(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getIDBinIndex(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNonce(_signer: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce(address)"(
      _signer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValueInBin(
      _binValues: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getValueInBin(uint256,uint256)"(
      _binValues: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isApprovedForAll(address,address)"(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidSignature(address,bytes32,bytes,bytes)"(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "metaSafeBatchTransferFrom(address,address,uint256[],uint256[],bool,bytes)"(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "metaSafeTransferFrom(address,address,uint256,uint256,bool,bytes)"(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "metaSetApprovalForAll(address,address,bool,bool,bytes)"(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setApprovalForAll(address,bool)"(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address,uint256)"(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOfBatch(address[],uint256[])"(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIDBinIndex(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getIDBinIndex(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNonce(
      _signer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getNonce(address)"(
      _signer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getValueInBin(
      _binValues: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getValueInBin(uint256,uint256)"(
      _binValues: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isApprovedForAll(address,address)"(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidSignature(address,bytes32,bytes,bytes)"(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "metaSafeBatchTransferFrom(address,address,uint256[],uint256[],bool,bytes)"(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "metaSafeTransferFrom(address,address,uint256,uint256,bool,bytes)"(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "metaSetApprovalForAll(address,address,bool,bool,bytes)"(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setApprovalForAll(address,bool)"(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      _interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
