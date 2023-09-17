class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('function just receive 2 parameters');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('function just receive number parameters');
    }

    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('function just receive 2 parameters');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('function just receive number parameters');
    }

    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    if (args.length !== 3) {
      throw new Error('function just receive 3 parameters');
    }

    const [sideA, sideB, sideC] = args;

    if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof sideC !== 'number') {
      throw new Error('function just receive number parameters');
    }

    return (this._mathBasic.add(this._mathBasic.add(sideA, sideB), sideC));
  }

  calculateTriangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('function just receive 2 parameters');
    }

    const [base, height] = args;

    if (typeof base !== 'number' || typeof height !== 'number') {
      throw new Error('function just receive number parameters');
    }

    return (this._mathBasic.divide(this._mathBasic.multiply(base, height), 2));
  }
}

module.exports = FigureCalculator;
