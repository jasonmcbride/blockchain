import cryptoHash from '../crypto-hash';

describe('cryptoHash()', () => {
  it('generates a SHA-256 hashed output', () => {
    expect(cryptoHash('password')).toEqual(
      '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'
    );
  });

  it('produces the same hash with the same input arguments in any order', () => {
    expect(cryptoHash('one', 'two', 'three')).toEqual(
      cryptoHash('three', 'one', 'two')
    );
  });
});
