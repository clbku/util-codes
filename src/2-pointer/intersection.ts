/**
 * Finds the intersection of two sorted arrays based on a provided condition.
 * 
 * @param arr1 - The first sorted array.
 * @param arr2 - The second sorted array.
 * @param condition - A comparator function that takes two elements, one from each array, 
 * and returns a negative number if the first element is less than the second, 
 * zero if they are equal, and a positive number if the first element is greater than the second.
 * 
 * @returns An array containing the elements that are present in both input arrays.
 */

function intersection(arr1: number[], arr2: number[], condition: (a: number, b: number) => number): number[]
function intersection(arr1: Record<string, any>[], arr2: Record<string, any>[], condition: (a: Record<string, any>, b: Record<string, any>) => number): Record<string, any>[]
function intersection(arr1: any[], arr2: any[], condition: (a: any, b: any) => number): any[] {
    let i = 0;
    let j = 0;

    const result = [];

    while (i < arr1.length && j < arr2.length) {
        const diff = condition(arr1[i], arr2[j]);
        if (diff === 0) {
            result.push(arr1[i]);
            i++;
            j++;
        } else if (diff < 0) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

export { intersection };