import { Calculator } from './Calculator';

describe('Calculator', () => {
  it('should not explode', () => {
    let sut = new Calculator();

    expect(sut).not.toBeNull();
  });

  it('1+1 should return 2', () => {
    let sut = new Calculator();
    let result = sut.add(1, 1);

    expect(result).toBe(2);
  });
});