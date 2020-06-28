import fibonacci from '../index';

describe('Testing - Fibonacci', () => {
  it('should calculate correct factorial for given number', () => {
    expect(fibonacci(5)).toEqual(8);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(0)).toEqual(1);
  });
});
