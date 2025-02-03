/**
Given a 32-bit integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

i.e., 26 = "1a", -1 = "ffffffff"
 */
export function toHex(num: number): string {
    if (num === 0) return "0";

    const hexValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

    if (num < 0) {
        num = 2**32 + num;
    }

    let hex = "";
    while (num !== 0) {
        const mod = num % 16;
        hex = hexValue[mod] + hex;
        num = Math.floor(num / 16)
    }
    
    return hex;
};