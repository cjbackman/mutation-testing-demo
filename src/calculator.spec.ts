import { Calculator } from './calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add should return the sum of two numbers', () => {
        expect(calculator.add(5, 2)).toBe(7);
    });

    test('multiply should return the product of two numbers', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('isPositive should return true if the number is positive', () => {
        expect(calculator.isPositive(5)).toBe(true);
    });

    test('isPositive should return false if the number is negative', () => {
        expect(calculator.isPositive(-3)).toBe(false);
    });
});
