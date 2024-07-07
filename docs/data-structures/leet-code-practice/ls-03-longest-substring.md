# Longest Substring Without Repeating Characters
Given a string str, find the length of the longest substring without repeating characters.


Constraints: 
```
0 <= s.length <= 5 * 104
```
s consists of English letters, digits, symbols and spaces.

Example 1:
```
Input: str = "abcdbeghef"
Output: 6
```
Explanation: the longest substring without repeating characters is "cdbegh", its length is 6

Example 2:
```
Input: str = "aaaaa"
Output: 1
```
Explanation: the longest substring without repeating characters is "a", its length is 1

Example 3:
```
Input: str = "eddy"
Output: 2
```
Explanation: the longest substring without repeating characters is "ed" (or "dy"), its length is 2

## Solution:
To solve this problem, you can use the sliding window technique along with a hash map to keep track of the last seen index of each character. Here's a JavaScript function that implements this approach:

```js
function longestSubstringWithoutRepeating(str) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = {};

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if (
      charIndexMap[currentChar] !== undefined &&
      charIndexMap[currentChar] >= start
    ) {
      start = charIndexMap[currentChar] + 1;
    }

    charIndexMap[currentChar] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

// Example usage
console.log(longestSubstringWithoutRepeating("abcdbeghef")); // Output: 6
console.log(longestSubstringWithoutRepeating("aaaaa")); // Output: 1
console.log(longestSubstringWithoutRepeating("eddy")); // Output: 2
```

In this code `maxLength` stores the length of the longest substring without repeating characters.
`start` keeps track of the start index of the current substring without repeating characters.
`charIndexMap` is a hash map that stores the last seen index of each character.
We iterate through the input string `str`, updating `start` and `charIndexMap` as needed to maintain the longest substring without repeating characters. Finally, we return `maxLength`, which represents the length of the longest substring without repeating characters.

Let's break down the code inside the loop step by step:

1. `if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {`
   - This condition checks if the current character `currentChar` already exists in the `charIndexMap` (which is a hash map storing the last seen index of each character) and if its last seen index (`charIndexMap[currentChar]`) is greater than or equal to the `start` index.
   - If this condition is true, it means that `currentChar` has been seen before within the current substring without repeating characters, and we need to update the `start` index to skip past the last occurrence of `currentChar` in the current substring.
   - By setting `start = charIndexMap[currentChar] + 1`, we move the `start` index to the position immediately after the last occurrence of `currentChar`.

2. `charIndexMap[currentChar] = i;`
   - Regardless of whether `currentChar` is a repeating character or not, we update the `charIndexMap` with the current index `i` for `currentChar`.
   - This ensures that the `charIndexMap` always reflects the most recent occurrence of each character in the input string.

3. `maxLength = Math.max(maxLength, i - start + 1);`
   - After handling the current character `currentChar`, we update the `maxLength` by taking the maximum between the current `maxLength` and the length of the current substring without repeating characters (`i - start + 1`).
   - The expression `i - start + 1` calculates the length of the current substring by subtracting the `start` index from the current index `i` and adding 1 (to include the current character in the length).

This code segment efficiently handles cases where the current character is a repeating character within the current substring without repeating characters. It updates the necessary variables (`start`, `charIndexMap`, and `maxLength`) to maintain the longest substring without repeating characters as the loop progresses through the input string.
