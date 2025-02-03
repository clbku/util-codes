import { toHex } from '../src';

describe('testing toHex', () => {
    // generate 20 test cases with random numbers
    const testCases = Array.from({ length: 20 }, () => Math.floor(Math.random() * 1000000));

    testCases.forEach((num) => {
        test(`testing ${num}`, () => {
            expect(toHex(num)).toBe(num.toString(16));
        });
    });
   
});
