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

interface IERC1155MetaInterface extends ethers.utils.Interface {
  functions: {
    "metaSafeBatchTransferFrom(address,address,uint256[],uint256[],bool,bytes)": FunctionFragment;
    "metaSafeTransferFrom(address,address,uint256,uint256,bool,bytes)": FunctionFragment;
    "metaSetApprovalForAll(address,address,bool,bool,bytes)": FunctionFragment;
  };

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

  events: {
    "NonceChange(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NonceChange"): EventFragment;
}

export class IERC1155Meta extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IERC1155MetaInterface;

  functions: {
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
  };

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

  callStatic: {
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
  };

  filters: {
    NonceChange(signer: string | null, newNonce: null): EventFilter;
  };

  estimateGas: {
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
  };

  populateTransaction: {
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
  };
}