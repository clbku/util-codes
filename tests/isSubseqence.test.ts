import { isSubsequence } from "../src";

describe('testing isSubsequence', () => {
  test('`abd` should be subsequence of `ahbgdc`', () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  });

    test('`aec` should not be subsequence of `ahbgdc`', () => {
        expect(isSubsequence("aec", "ahbgdc")).toBe(false);
    });
});