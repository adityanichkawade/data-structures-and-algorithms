import factorial from '../index';

describe('Testing - Factorial', () => {
  it('should calculate correct factorial for given number', () => {
    expect(factorial(5)).toEqual(120);
    expect(factorial(1)).toEqual(1);
    expect(factorial(0)).toEqual(1);
  });
});
