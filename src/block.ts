import { GENESIS_DATA } from './config';

class Block {
  timestamp: any;
  lastHash: any;
  hash: any;
  data: any;
  constructor({
    timestamp,
    lastHash,
    hash,
    data
  }: {
    timestamp: any;
    lastHash: any;
    hash: any;
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
}

export default Block;
