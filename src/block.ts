import { GENESIS_DATA } from './config';

class Block {
  timestamp: Date;
  lastHash: string;
  hash: string;
  data: any;
  constructor({
    timestamp,
    lastHash,
    hash,
    data
  }: {
    timestamp: Date;
    lastHash: string;
    hash: string;
    data: any;
  }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }: { lastBlock: Block; data: any }) {
    return new this({
      timestamp: new Date(),
      lastHash: lastBlock.hash,
      data
    });
  }
}

export default Block;
