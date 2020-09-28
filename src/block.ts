import { GENESIS_DATA } from './config';
import cryptoHash from './crypto-hash';

class Block {
  timestamp: string;
  lastHash: string;
  hash: string;
  data: any;
  constructor({
    timestamp,
    lastHash,
    hash,
    data
  }: {
    timestamp: string;
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
    const timestamp = new Date().toUTCString();
    const lastHash = lastBlock.hash;
    return new this({
      timestamp,
      lastHash,
      data,
      hash: cryptoHash(timestamp, lastHash, data)
    });
  }
}

export default Block;
