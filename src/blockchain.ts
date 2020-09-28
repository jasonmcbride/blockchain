import Block from './block';

class Blockchain {
  chain: any[];
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }: { data: any }) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data
    });

    this.chain.push(newBlock);
  }
}

export default Blockchain;
