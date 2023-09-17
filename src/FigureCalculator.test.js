const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator({});

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe('A calculateRectanglePerimerter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(2, 4, 5)).toThrowError();
    });

    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePerimeter(true, [])).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter({}, false)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter('1', null)).toThrowError();
    });

    it('should return correct value based on rectangle perimeter formula', () => {
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      const result = figureCalculator.calculateRectanglePerimeter(length, width);

      expect(result).toEqual(60);
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 30);
    });
  });

  describe('A calculateRectangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(3)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(4, 2, 1)).toThrowError();
    });

    it('should throw error when given non number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea([], false)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea('1', null)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError();
    });

    it('should return correct value base on rectangle area formula', () => {
      const length = 20;
      const width = 10;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      const result = figureCalculator.calculateRectangleArea(length, width);

      expect(result).toEqual(200);
      expect(spyMultiply).toHaveBeenCalledWith(length, width);
    });
  });

  describe('A calculateTrianglePerimeter function', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(2)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(4, 1)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(4, 1, 4, 5)).toThrowError();
    });

    it('should throw error when give non number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter('1', null, false)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(true, [], {})).toThrowError();
    });

    it('should return correct value based on triangle perimeter formula', () => {
      const sideA = 10;
      const sideB = 10;
      const sideC = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const figureCalculator = new FigureCalculator(MathBasic);

      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, sideC);

      expect(result).toEqual(30);
      expect(spyAdd).toHaveBeenCalledWith((sideA + sideB), sideC);
    });
  });

  describe('A calculateTriangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(2, 1, 4)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea('1', null)).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(false, [])).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea({}, true)).toThrowError();
    });

    it('should return correct value based on triangle area formula', () => {
      const base = 20;
      const height = 10;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const figureCalculator = new FigureCalculator(MathBasic);

      const result = figureCalculator.calculateTriangleArea(base, height);

      expect(result).toEqual(100);
      expect(spyMultiply).toHaveBeenCalledWith(base, height);
      expect(spyDivide).toHaveBeenCalledWith(200, 2);
    });
  });
});
