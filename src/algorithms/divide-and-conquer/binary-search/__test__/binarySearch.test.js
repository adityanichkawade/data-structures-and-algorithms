import binarySearch from '../index';

describe('Testing - Factorial', () => {
  it('should search correct keyword provided for given list', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 5)).toEqual(4);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 100)).toEqual(-1);
  });
});
