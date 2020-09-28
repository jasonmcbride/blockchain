import Blockchain from '../blockchain';
import Block from '../block';

describe('Blockchain', () => {
  let blockchain = new Blockchain();

  beforeEach(() => {
    blockchain = new Blockchain();
  });
  it('contains a `chain` Array instance', () => {
    expect(blockchain.chain instanceof Array).toBe(true);
  });

  it('starts with the genesis block', () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it('adds a new block to the chain', () => {
    const newData = 'foo bar';
    blockchain.addBlock({ data: newData });

    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
  });

  describe('isValidChain()', () => {
    describe('when the chain does not start with the genesis block', () => {
      it('returns false', () => {
        blockchain.chain[0] = {
          timestamp: new Date().toUTCString(),
          data: 'fake-genesise',
          hash: 'fsdfsd',
          lastHash: 'fsdfsdafsdfsd'
        };
      });

      expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
    });

    describe('when the chain starts with the genesis block and has multiple blocks', () => {
      beforeEach(() => {
        blockchain.addBlock({ data: 'bears' });
        blockchain.addBlock({ data: 'beets' });
        blockchain.addBlock({ data: 'battlestar galactica' });
      });

      describe('and lastHash reference has changed', () => {
        it('returns false', () => {
          blockchain.chain[2].lastHash = 'broke-last-hash';
          expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
        });
      });

      describe('and chain contains a block with an invalid field', () => {
        it('returns fals', () => {
          it('returns false', () => {
            blockchain.chain[2].data = 'bad and evil data';
            expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
          });
        });
      });

      describe('and the chain does not contain any invalid blocks', () => {
        it('returns true', () => {
          it('returns true', () => {
            expect(Blockchain.isValidChain(blockchain.chain)).toBe(true);
          });
        });
      });
    });
  });
});
