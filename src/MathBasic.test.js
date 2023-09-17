const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.add('1', '2')).toThrowError();
      expect(() => MathBasic.add(true, {})).toThrowError();
      expect(() => MathBasic.add(null, false)).toThrowError();
    });

    it('should return a + b when given two number parameters', () => {
      expect(MathBasic.add(2, 2)).toEqual(4);
      expect(MathBasic.add(16, 8)).toEqual(24);
      expect(MathBasic.add(3, 7)).toEqual(10);
    });
  });

  describe('A subtract function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.subtract()).toThrowError();
      expect(() => MathBasic.subtract(3)).toThrowError();
      expect(() => MathBasic.subtract(3, 2, 5)).toThrowError();
      expect(() => MathBasic.subtract(4, 2, 1, 8)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.subtract('1', '3')).toThrowError();
      expect(() => MathBasic.subtract(false, {})).toThrowError();
      expect(() => MathBasic.subtract([], true)).toThrowError();
    });

    it('should return a - b when given two number parameters', () => {
      expect(MathBasic.subtract(4, 1)).toEqual(3);
      expect(MathBasic.subtract(15, 4)).toEqual(11);
      expect(MathBasic.subtract(21, 15)).toEqual(6);
    });
  });

  describe('A multiply function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrowError();
      expect(() => MathBasic.multiply(3)).toThrowError();
      expect(() => MathBasic.multiply(3, 1, 2)).toThrowError();
      expect(() => MathBasic.multiply(4, 2, 1, 8)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.multiply(null, true)).toThrowError();
      expect(() => MathBasic.multiply('1', {})).toThrowError();
      expect(() => MathBasic.multiply([], false)).toThrowError();
    });

    it('should return a * b when given two number paramters', () => {
      expect(MathBasic.multiply(1, 1)).toEqual(1);
      expect(MathBasic.multiply(2, 2)).toEqual(4);
      expect(MathBasic.multiply(3, 3)).toEqual(9);
    });
  });

  describe('A divide function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.divide()).toThrowError();
      expect(() => MathBasic.divide(1)).toThrowError();
      expect(() => MathBasic.divide(1, 2, 5)).toThrowError();
      expect(() => MathBasic.divide(2, 1, 4, 5)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.divide('4', [])).toThrowError();
      expect(() => MathBasic.divide(null, {})).toThrowError();
      expect(() => MathBasic.divide(false, true)).toThrowError();
    });

    it('should return a / b when given two number parameters', () => {
      expect(MathBasic.divide(4, 2)).toEqual(2);
      expect(MathBasic.divide(9, 3)).toEqual(3);
      expect(MathBasic.divide(20, 10)).toEqual(2);
    });
  });
});
