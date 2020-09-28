import Block from './block';
import { GENESIS_DATA } from './config';

describe('Block', () => {
  const timestamp = new Date();
  const lastHash = 'foo-hash';
  const hash = 'bar-hash';
  const data = ['blockchan', 'data'];
  const block = new Block({
    timestamp,
    lastHash,
    hash,
    data
  });

  it('has a timestamp', () => {
    expect(block.timestamp).toEqual(timestamp);
  });

  it('has a lastHash', () => {
    expect(block.lastHash).toEqual(lastHash);
  });

  it('has a hash', () => {
    expect(block.hash).toEqual(hash);
  });

  it('has a data', () => {
    expect(block.data).toEqual(data);
  });

  describe('genesis()', () => {
    const genesisBlock = Block.genesis();

    it('returns a Block instance', () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });

    it('returns the genesis data', () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });

  describe('mineBlock()', () => {
    const lastBlock = Block.genesis();
    const data = 'minded data';
    const minedBlock = Block.mineBlock({ lastBlock, data });

    it('returns a Block instance', () => {
      expect(minedBlock instanceof Block).toBe(true);
    });

    it('sets the `lastHash` to be `hash` of the lastBlock', () => {
      expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });

    it('sets the `data`', () => {
      expect(minedBlock.data).toEqual(data);
    });

    it('sets a `timestamp`', () => {
      expect(minedBlock.timestamp).not.toEqual(undefined);
    });

    /*it('sets a `hash`', () => {
      expect(minedBlock.hash).not.toEqual(undefined);
    });*/
  });
});
