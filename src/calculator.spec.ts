import { Calculator } from './calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('should correctly add two numbers', () => {
        expect(calculator.add(5, 5)).toEqual(10);
    });

    it('should correctly subtract two numbers', () => {
        expect(calculator.subtract(10, 5)).toEqual(5);
    });

    it('should correctly multiply two numbers', () => {
        expect(calculator.multiply(5, 5)).toEqual(25);
    });

    it('should correctly divide two numbers', () => {
        expect(calculator.divide(10, 5)).toEqual(2);
    });

    it('should throw error when divide by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrowError('Cannot divide by zero');
    });
});
