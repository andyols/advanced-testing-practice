import { add, subtract, multiply, divide } from '../services/calculations';

describe('add', () => {
  it('should add 1 and 2 and return 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe('subtract', () => {
  it('subtracts 4 from 5 to equal 1', () => {
    expect(subtract(5, 4)).toBe(1);
  });
});

describe('multiply', () => {
  it('multiply 4 by 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
  });
});

describe('divide', () => {
  it('divide 100 by 4 to equal 25', () => {
    expect(divide(100, 4)).toBe(25);
  });
});
