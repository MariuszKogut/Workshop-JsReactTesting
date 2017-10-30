import { MathCalc } from './MathCalc';

describe('MathCalc', () => {
  it('should not explode', () => {
    let sut = new MathCalc();

    expect(sut).not.toBeNull();
  });

  it('1+1 should return 2', () => {
    let sut = new MathCalc();
    let result = sut.add(1, 1);

    expect(result).toBe(2);
  });
});