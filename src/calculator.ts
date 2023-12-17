export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    isPositive(number: number): boolean {
        return number >= 0;
    }
}
