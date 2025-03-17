import { intersection } from '../src';

describe('intersection', () => {
    test('should return the intersection of two sorted number arrays', () => {
        const arr1 = [1, 2, 3, 4, 5];
        const arr2 = [3, 4, 5, 6, 7];
        const result = intersection(arr1, arr2, (a, b) => a - b);
        expect(result).toEqual([3, 4, 5]);
    });

    test('should return the intersection of two sorted object arrays based on a condition', () => {
        const arr1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
        const arr2 = [{ id: 2 }, { id: 3 }, { id: 4 }];
        const result = intersection(arr1, arr2, (a, b) => a.id - b.id);
        expect(result).toEqual([{ id: 2 }, { id: 3 }]);
    });

    test('should return an empty array if there is no intersection', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const result = intersection(arr1, arr2, (a, b) => a - b);
        expect(result).toEqual([]);
    });

    test('should return an empty array if one of the arrays is empty', () => {
        const arr1 = [1, 2, 3];
        const arr2: number[] = [];
        const result = intersection(arr1, arr2, (a, b) => a - b);
        expect(result).toEqual([]);
    });

    test('should return the intersection of two arrays with duplicate elements', () => {
        const arr1 = [1, 2, 2, 3, 4];
        const arr2 = [2, 2, 3, 5];
        const result = intersection(arr1, arr2, (a, b) => a - b);
        expect(result).toEqual([2, 2, 3]);
    });
});