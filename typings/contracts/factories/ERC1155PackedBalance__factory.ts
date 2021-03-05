/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC1155PackedBalance } from "../ERC1155PackedBalance";

export class ERC1155PackedBalance__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC1155PackedBalance> {
    return super.deploy(overrides || {}) as Promise<ERC1155PackedBalance>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155PackedBalance {
    return super.attach(address) as ERC1155PackedBalance;
  }
  connect(signer: Signer): ERC1155PackedBalance__factory {
    return super.connect(signer) as ERC1155PackedBalance__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155PackedBalance {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155PackedBalance;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getIDBinIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "bin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_binValues",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getValueInBin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611bb8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a25760003560e01c8063a22cb46511610076578063e985e9c51161005b578063e985e9c514610503578063eaec5f811461053e578063f242432a14610561576100a2565b8063a22cb46514610492578063db90e83c146104cd576100a2565b8062fdd58e146100a757806301ffc9a7146100f25780632eb2c2d6146101455780634e1273f41461031b575b600080fd5b6100e0600480360360408110156100bd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610639565b60408051918252519081900360200190f35b6101316004803603602081101561010857600080fd5b50357fffffffff000000000000000000000000000000000000000000000000000000001661068e565b604080519115158252519081900360200190f35b610319600480360360a081101561015b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561019c57600080fd5b8201836020820111156101ae57600080fd5b803590602001918460208302840111640100000000831117156101d057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561022057600080fd5b82018360208201111561023257600080fd5b8035906020019184602083028401116401000000008311171561025457600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156102a457600080fd5b8201836020820111156102b657600080fd5b803590602001918460018302840111640100000000831117156102d857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106f3945050505050565b005b6104426004803603604081101561033157600080fd5b81019060208101813564010000000081111561034c57600080fd5b82018360208201111561035e57600080fd5b8035906020019184602083028401116401000000008311171561038057600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156103d057600080fd5b8201836020820111156103e257600080fd5b8035906020019184602083028401116401000000008311171561040457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506107fe945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561047e578181015183820152602001610466565b505050509050019250505060405180910390f35b610319600480360360408110156104a857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610a7d565b6104ea600480360360208110156104e357600080fd5b5035610b16565b6040805192835260208301919091528051918290030190f35b6101316004803603604081101561051957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610b23565b6100e06004803603604081101561055457600080fd5b5080359060200135610b5e565b610319600480360360a081101561057757600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a0810160808201356401000000008111156105c457600080fd5b8201836020820111156105d657600080fd5b803590602001918460018302840111640100000000831117156105f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b71945050505050565b600080600061064784610b16565b73ffffffffffffffffffffffffffffffffffffffff871660009081526020818152604080832085845290915290205491935091506106859082610b5e565b95945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a260000000000000000000000000000000000000000000000000000000014156106e2575060016106ee565b6106eb82610c75565b90505b919050565b3373ffffffffffffffffffffffffffffffffffffffff8616148061071c575061071c8533610b23565b610771576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180611a1b603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166107dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806118e6603d913960400191505060405180910390fd5b6107e985858585610cbf565b6107f7858585855a866110cc565b5050505050565b8151815160609190811461085d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806118ad6039913960400191505060405180910390fd5b60008061087d8560008151811061087057fe5b6020026020010151610b16565b9150915060008060008860008151811061089357fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020549050600083905060608567ffffffffffffffff8111801561090757600080fd5b50604051908082528060200260200182016040528015610931578160200160208202803683370190505b50905061093e8385610b5e565b8160008151811061094b57fe5b602090810291909101015260015b86811015610a705761097089828151811061087057fe5b909650945082861415806109d9575089818151811061098b57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168a60018303815181106109b857fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b15610a47576000808b83815181106109ed57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000205493508592505b610a518486610b5e565b828281518110610a5d57fe5b6020908102919091010152600101610959565b5098975050505050505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6008810491600790911690565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b6020810282901c63ffffffff1692915050565b3373ffffffffffffffffffffffffffffffffffffffff86161480610b9a5750610b9a8533610b23565b610bef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806119566037913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610c5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180611ad46038913960400191505060405180910390fd5b610c6785858585611343565b6107f7858585855a866113e7565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b815181518114610d1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604281526020018061198d6042913960600191505060405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614158015610d565750600081115b15610f2857600080610d6e8560008151811061087057fe5b73ffffffffffffffffffffffffffffffffffffffff8916600090815260208181526040808320858452909152812054875193955091935091610dc69190849088908590610db757fe5b602002602001015160016115d8565b73ffffffffffffffffffffffffffffffffffffffff881660009081526020818152604080832087845290915281205487519293509091610e1c9190859089908590610e0d57fe5b602002602001015160006115d8565b90508360015b86811015610ed657610e3989828151811061087057fe5b9096509450818614610ea85773ffffffffffffffffffffffffffffffffffffffff8b811660009081526020818152604080832086845280835281842098909855928d16825281815282822094825284815282822095909555878152948452808520549290935291909220549084905b610eb984868a8481518110610db757fe5b9350610ecc83868a8481518110610e0d57fe5b9250600101610e22565b505073ffffffffffffffffffffffffffffffffffffffff808a16600090815260208181526040808320888452825280832095909555918a16815280825283812095815294905292209190915550610fc5565b60005b81811015610fc357828181518110610f3f57fe5b6020026020010151610f6487868481518110610f5757fe5b6020026020010151610639565b1015610fbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180611a576036913960400191505060405180910390fd5b600101610f2b565b505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611071578181015183820152602001611059565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156110b0578181015183820152602001611098565b5050505090500194505050505060405180910390a45050505050565b6110eb8573ffffffffffffffffffffffffffffffffffffffff166117eb565b1561133b5760008573ffffffffffffffffffffffffffffffffffffffff1663bc197c8184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156111a357818101518382015260200161118b565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156111e25781810151838201526020016111ca565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561121e578181015183820152602001611206565b50505050905090810190601f16801561124b5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b15801561127057600080fd5b5087f1158015611284573d6000803e3d6000fd5b50505050506040513d602081101561129b57600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014611339576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604c8152602001806119cf604c913960600191505060405180910390fd5b505b505050505050565b6113508483836001611825565b61135d8383836000611825565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051808381526020018281526020019250505060405180910390a450505050565b6114068573ffffffffffffffffffffffffffffffffffffffff166117eb565b1561133b5760008573ffffffffffffffffffffffffffffffffffffffff1663f23a6e6184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156114bf5781810151838201526020016114a7565b50505050905090810190601f1680156114ec5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b15801561150f57600080fd5b5087f1158015611523573d6000803e3d6000fd5b50505050506040513d602081101561153a57600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014611339576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526047815260200180611a8d6047913960600191505060405180910390fd5b60006020840263ffffffff828460018111156115f057fe5b14156116be5784821b8701925086831015611656576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180611b516032913960400191505060405180910390fd5b64010000000087831c82168601106116b9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180611b516032913960400191505060405180910390fd5b6117e1565b60018460018111156116cc57fe5b14156117905784821b8703925086831115611732576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260338152602001806119236033913960400191505060405180910390fd5b84818389901c1610156116b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260338152602001806119236033913960400191505060405180910390fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526045815260200180611b0c6045913960600191505060405180910390fd5b5050949350505050565b6000813f801580159061181e57507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708114155b9392505050565b60008061183185610b16565b73ffffffffffffffffffffffffffffffffffffffff88166000908152602081815260408083208584529091529020549193509150611871908286866115d8565b73ffffffffffffffffffffffffffffffffffffffff90961660009081526020818152604080832094835293905291909120949094555050505056fe455243313135355061636b656442616c616e63652362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e475448455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20554e444552464c4f57455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20554e444552464c4f57455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20494e56414c49445f42494e5f57524954455f4f5045524154494f4e455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a204f564552464c4f57a264697066735822122032a0d137e0fc70e6d52ec764943918bdca055b68ba8761f74d59a0f9bb0ff0bb64736f6c63430007040033";
