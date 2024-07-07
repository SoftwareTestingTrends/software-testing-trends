---
sidebar_position: 2
---
# Understanding DSL Concepts

# What is Big O Notation?
* Big O Notation is a tool for evaluating algorithm efficiency.
* It provides a broad picture of how an algorithm's runtime or memory usage scales with input size.
* Big O Notation focuses on the overall growth pattern of an algorithm, not exact timings or memory usage.
* An algorithm's Big O complexity is hardware-independent and only depends only on the algorithm.

**Time complexity:** How can we analyze the runtime of an algorithm as the size of the inputs increases?

**Space complexity:** How much additional memory do we need to allocate in order to run the code in our algorithm?

**Rules:**
* Arithmetic operations are constant
* Variable assignment is constant
* Accessing elements in an array (by index) or object (by key) is constant
* In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

**Auxiliary space complexity:** Space required by the algorithm, not including space taken up by the inputs.

**Rules:**
* Most primitives (booleans, numbers, undefined, null) are constant space
* Strings require O(n) space (where n is the string length)
* Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)
* If the input halves at each step, its likely O(logn) or O(nlogn)

Absolutely! Here's a reworked version of your problem-solving breakdown, focusing on clarity, active language, and guiding questions:

# Problem Solving Framework

**1. Define the Challenge:**

* **Summarize it yourself:** Can I explain the problem in simple terms?
* **Identify the essentials:**  What data do I need to work with? What outcome should my solution produce?
* **Check for gaps:** Can I reach that outcome with the information I have?  

**2. Investigate Through Examples**

* **Start basic:**  What does the simplest possible case look like?
* **Build upwards:** How does the problem change as it gets more complex?
* **Test limits:** What happens with no input, or incorrect input?

**3. Dissect and Strategize**

* **Isolate the steps:** What actions do I need to take, in what order?
* **Focus on the core:** What's the hardest part of the problem? Can I solve a version without that part?
* **Build in complexity:** How do I add back the tricky element into my simplified solution?  

**4. Review and Optimize**

* **Does it work?** Can I verify that my solution produces the correct results?
* **Alternatives?** Are there different ways to reach the same outcome?
* **Readability:** Could someone else follow my process easily?
* **Beyond this problem:** Can I reuse any of my methods for something else?
* **Efficiency:** Can I make my solution run faster or use less memory?
* **Inspiration:** How have others tackled similar challenges?

# What are the common problem solving patterns to solve data structure and logic problems?
When solving data structure and logic problems, there are several common problem-solving patterns that can be applied:

Absolutely! Here's a breakdown of common problem-solving patterns used when working with data structures and algorithms:

**Core Techniques**

* **Divide and Conquer:** Break the problem into smaller subproblems, solve each subproblem independently, and then combine the solutions to the subproblems to form a solution to the original problem. This approach is often used for problems that can be divided into similar, smaller instances. Examples: Merge Sort, Quick Sort, Binary Search.

* **Greedy Algorithms:** Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum. They don't always guarantee an optimal solution but are often used for optimization problems where finding an exact solution is not necessary or feasible. Examples:  Prim's Algorithm (for minimum spanning trees), Dijkstra's Algorithm (shortest path).

* **Dynamic Programming:** This involves breaking down a problem into simpler subproblems and solving each subproblem only once. The solutions to subproblems are stored in a table or memoization array to avoid redundant calculations. Dynamic programming is particularly useful for optimization problems and those with overlapping subproblems. Examples: Fibonacci sequence calculation, Knapsack Problem.

**Data Structure-Based Patterns**

* **Brute Force:** This involves trying every possible solution until a satisfactory one is found. While it's not always the most efficient, it's a straightforward approach that can be used when other methods are not applicable or when the problem size is small enough to handle.

* **Frequency Counter:** This pattern involves using an object (often a hash map or dictionary) to collect frequencies or counts of elements in an array or string. It's particularly useful when you need to compare two collections to determine if they have the same frequency of elements. This pattern is commonly used in solving problems involving anagrams, finding duplicates, or checking for patterns.

* **Two Pointers:** This technique involves using two pointers that iterate through the data structure in tandem (one behind the other) or towards each other. It's commonly used in solving problems where you need to search, traverse, or manipulate a data structure efficiently. There are variations of the two-pointer technique, including the "fast and slow" pointers, where one pointer moves faster than the other, and the "left and right" pointers, where one pointer starts from the beginning and the other from the end. Common uses are reversing elements in-place or finding pairs.

* **Floyd's cycle detection algorithm**: Floyd's cycle detection algorithm, also known as the tortoise and hare algorithm, is a technique used to detect cycles in linked lists or sequences of elements. It's particularly useful for finding loops in data structures like linked lists, graphs, or arrays.

* **Multiple Pointers:** Similar to the two-pointer technique, the multiple pointers technique involves using more than two pointers to solve a problem. Each pointer typically represents a different position or element within the data structure. This technique is commonly used in problems where you need to find a solution that satisfies specific conditions or constraints, such as finding pairs that meet certain criteria or searching for a subsequence. This is considered an efficient way for solving problems with minimal space complexity.

* **Sliding Window:** This technique involves maintaining a subset (window) of elements within an array or a string and sliding the window across the data structure to find a solution. Depending on a certain condition, the window either increases or closes (and a new window is created). It's commonly used for solving problems involving strings or arrays, such as finding subarrays with a specific property or solving substring-related problems efficiently. 

* **Binary Search:** This is an efficient search algorithm used to find the position of a target value within a sorted array. It repeatedly divides the search interval in half until the target value is found or the interval is empty. Binary search is particularly useful for problems involving searching or finding an optimal value within a range.
  
**Graph-Based Patterns**

* **Breadth-First Search (BFS):** Explores a graph level by level, visiting neighbors before their children. Useful for finding shortest paths.
  
* **Depth-First Search (DFS):** Explores a path in a graph as far as possible before backtracking. Applications include topological sorting, detecting cycles.

**Advanced Techniques**
Yes, there are several other problem-solving patterns that are commonly used in algorithmic and programming challenges. Here are a few more:

1. **Backtracking**: Backtracking is a systematic method for finding all possible solutions to a problem by trying different options recursively and abandoning a candidate solution as soon as it's determined that it cannot lead to a valid solution. It's commonly used for problems such as generating all permutations, combinations, or solving constraint satisfaction problems (think of mazes or the N-Queens problem).

2. **Topological Sorting**: This technique is used to order the vertices of a directed graph such that for every directed edge uv from vertex u to vertex v, u comes before v in the ordering. It's commonly used in problems involving scheduling tasks or dependencies.

3. **Trie (Prefix Tree)**: A trie is a tree-like data structure used to store a dynamic set of strings where the keys are usually strings. Tries are commonly used in problems involving string manipulation, such as searching for words with a common prefix or implementing autocomplete functionality.

4. **Segment Tree**: Segment trees are tree data structures used for storing intervals or segments of elements and efficiently performing queries and updates on those segments. They are commonly used in problems involving range queries, such as finding the minimum, maximum, or sum of elements within a given range.

5. **Fenwick Tree (Binary Indexed Tree)**: Fenwick trees are another data structure used for efficient range queries and updates on an array or list of elements. They are particularly useful when you need to perform cumulative operations, such as finding the sum of elements or updating individual elements efficiently.

6. **Union-Find (Disjoint Set Union)**: Union-Find is a data structure used to efficiently perform operations such as union and find on disjoint sets. It's commonly used in problems involving connectivity or disjoint components, such as detecting cycles in a graph or implementing Kruskal's algorithm for finding minimum spanning trees.

The algorithm works by using two pointers, often referred to as the slow pointer (tortoise) and the fast pointer (hare), that traverse the elements at different speeds. At each step, the slow pointer moves one step forward, while the fast pointer moves two steps forward. If there is a cycle in the data structure, the fast pointer will eventually catch up to the slow pointer within the cycle.

Here are the key steps of Floyd's cycle detection algorithm:

1. Initialize two pointers, slow and fast, to the start of the linked list or sequence.
2. Move the slow pointer one step forward and the fast pointer two steps forward.
3. Repeat step 2 until either the fast pointer reaches the end of the list (indicating no cycle) or the slow pointer and fast pointer meet at the same node within the cycle.
4. If the pointers meet, there is a cycle in the data structure. Otherwise, there is no cycle.

This algorithm has a time complexity of O(n), where n is the number of elements in the data structure. It's a widely used algorithm in computer science for detecting cycles efficiently. 

These additional problem-solving patterns offer different approaches and techniques for solving a wide range of algorithmic and programming challenges. By familiarizing yourself with these patterns and understanding when and how to apply them, you can become a more effective problem solver in various domains of computer science and programming.

**Important Considerations**

* **Understanding the problem:** Carefully analyze the problem to identify the type of solution it might require. Is it about optimization, finding patterns, or exploring relationships?
* **Choosing the right data structures:** The way you organize your data (arrays, linked lists, trees, graphs, etc.) significantly impacts how you can approach the problem.
* **Time and Space Complexity:** Analyze the algorithmic efficiency of your solution. How long does it take to run (time complexity)? How much memory does it consume (space complexity)?

# Frequency Counter: 
This pattern stores value frequencies in objects or sets, often eliminating the need for nested loops or O(N^2) operations with arrays / strings.

## Example 1:
* Write a function which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

### Solution 1:
A naive approach - Time Complexity - N^2

```js
/*
Logic:
- Define a function same(arr1, arr2) to check if two arrays contain the same elements with the same frequency.
- Check if the lengths of the two arrays are equal. If not, return false as they cannot contain the same elements.
- Iterate through the elements of arr1.
    - For each element, find its square in arr2 using indexOf().
    - If the square is not found, return false as the arrays cannot contain the same elements.
    - If found, remove the square from arr2 to ensure that each element appears only once in both arrays.
- If all elements in arr1 have corresponding squares in arr2, return true indicating that the arrays contain the same elements.

Example:
- Input: arr1 = [1, 2, 3], arr2 = [4, 1, 9]
- Output: true (The arrays contain the same elements with the same frequency)
*/

function same(arr1, arr2){
    // Check if the lengths of the two arrays are equal
    if(arr1.length !== arr2.length){
        return false;
    }
    
    // Iterate through the elements of arr1
    for(let i = 0; i < arr1.length; i++){
        // Find the index of the square of the current element in arr2
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // If the square is not found, return false
        if(correctIndex === -1) {
            return false;
        }
        // Remove the square from arr2 to ensure that each element appears only once in both arrays
        arr2.splice(correctIndex,1)
    }
    // If all elements in arr1 have corresponding squares in arr2, return true
    return true
}

// Test the function with example inputs
console.log(same([1,2,3], [4,1,9])); // Output: true
console.log(same([1,2,3], [1,9])); // Output: false
console.log(same([1,2,1], [4,4,1])); // Output: false (must have the same frequency)

```
### Solution 2 (Refactored using frequency counter)
Time Complexity - O(n)

```js
/*
Logic:
- Define a function same(arr1, arr2) to check if two arrays contain the same elements with the same frequency.
- Check if the lengths of the two arrays are equal. If not, return false as they cannot contain the same elements.
- Initialize two empty objects frequencyCounter1 and frequencyCounter2 to store the frequency of elements in arr1 and arr2 respectively.
- Iterate through the elements of arr1 and arr2 to populate their respective frequency counters.
- For each element, increment its frequency in the corresponding frequency counter.
- Iterate through the keys of frequencyCounter1.
    - For each key, check if its square exists as a key in frequencyCounter2.
    - If not, return false as the arrays cannot contain the same elements.
    - If it exists, check if the frequencies of the key and its square are the same in both frequency counters.
    - If not, return false as the arrays do not contain the same elements with the same frequency.
- If all checks pass, return true indicating that the arrays contain the same elements with the same frequency.

Example:
- Input: arr1 = [1, 2, 3], arr2 = [4, 1, 9]
- Output: true (The arrays contain the same elements with the same frequency)
*/

function same(arr1, arr2){
    // Check if the lengths of the two arrays are equal
    if(arr1.length !== arr2.length){
        return false;
    }

    // Initialize two empty objects frequencyCounter1 and frequencyCounter2 to store the frequency of elements
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    // Iterate through the elements of arr1 to populate frequencyCounter1
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    // Iterate through the elements of arr2 to populate frequencyCounter2
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }

    // Iterate through the keys of frequencyCounter1
    for(let key in frequencyCounter1){
        // Check if the square of the key exists as a key in frequencyCounter2
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        // Check if the frequencies of the key and its square are the same in both frequency counters
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    // If all checks pass, return true indicating that the arrays contain the same elements with the same frequency
    return true
}

// Test the function with example inputs
console.log(same([1,2,3], [4,1,9])); // Output: true
console.log(same([1,2,3], [1,9])); // Output: false
console.log(same([1,2,1], [4,4,1])); // Output: false (must have the same frequency)


```
**Reference:** https://cs.slides.com/colt_steele/problem-solving-patterns#/28/0/1

## Example 2:
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.  
Note: You may assume the string contains only lowercase alphabets.

```js
/*
Logic:
- Define a function makeCharMap(arr) to create a character frequency map (charMap) from an array.
- Initialize an empty object charMap.
- Iterate through the elements of the array.
- For each element, increment the frequency count in charMap or set it to 1 if it doesn't exist.
- Return the charMap object.
- Define a function validAnagram(arr1, arr2) to check if two arrays are valid anagrams.
- Create character frequency maps charMap1 and charMap2 for the two input arrays using makeCharMap().
- Check if the number of keys (characters) in charMap1 is equal to the number of keys in charMap2. If not, return false.
- Iterate through the keys of charMap1.
- For each key, check if the frequency of the key in charMap1 is equal to the frequency of the same key in charMap2. If not, return false.
- If all checks pass, return true indicating that the two arrays are valid anagrams.

Example:
- Input: arr1 = ['a', 'n', 'a', 'g', 'r', 'a', 'm'], arr2 = ['g', 'a', 'n', 'a', 'r', 'a', 'm']
- Output: true (Both arrays are valid anagrams)
*/

const makeCharMap = (arr) => {
  const charMap = {};

  for (const element of arr) {
    charMap[element] = ++charMap[element] || 1;
  }
  return charMap;
};

function validAnagram(arr1, arr2) {
  const charMap1 = makeCharMap(arr1);
  const charMap2 = makeCharMap(arr2);

  // Check if the number of keys (characters) in charMap1 is equal to the number of keys in charMap2
  if (Object.keys(charMap1).length !== Object.keys(charMap2).length)
    return false;
  
  // Iterate through the keys of charMap1
  for (let char in charMap1) {
    // Check if the frequency of the key in charMap1 is equal to the frequency of the same key in charMap2
    if(charMap1[char] !== charMap2[char]) return false;
  }
  // If all checks pass, return true indicating that the two arrays are valid anagrams
  return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
```

**Alternate:**
```js
/*
Logic:
- Define a function validAnagram(first, second) to check if two strings are valid anagrams.
- Check if the lengths of the two strings are equal. If not, return false as they cannot be anagrams.
- Initialize an empty object lookup to store the frequency of characters in the first string.
- Iterate through the characters of the first string.
    - For each character, if it already exists in lookup, increment its frequency; otherwise, set its frequency to 1.
- Iterate through the characters of the second string.
    - For each character, if it does not exist in lookup or its frequency is zero, return false as it cannot be an anagram.
    - If the character exists in lookup, decrement its frequency.
- If all characters in the second string are found in lookup with non-zero frequencies, return true indicating that the strings are valid anagrams.

Example:
- Input: first = 'anagrams', second = 'nagaramm'
- Output: true (The strings are valid anagrams)
*/

function validAnagram(first, second) {
  // Check if the lengths of the two strings are equal
  if (first.length !== second.length) {
    return false;
  }

  // Initialize an empty object lookup to store the frequency of characters in the first string
  const lookup = {};

  // Iterate through the characters of the first string
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // If the letter already exists in lookup, increment its frequency; otherwise, set its frequency to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  
  // Iterate through the characters of the second string
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // If the letter does not exist in lookup or its frequency is zero, return false
    if (!lookup[letter]) {
      return false;
    } else {
      // If the letter exists in lookup, decrement its frequency
      lookup[letter] -= 1;
    }
  }

  // If all characters in the second string are found in lookup with non-zero frequencies, return true
  return true;
}

// Test the function with example inputs
console.log(validAnagram('anagrams', 'nagaramm')); // Output: true

```
# Multiple Pointers
## Example 1:
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

### Solution 1 (a naive solution)

Time Complexity - O(N^2)
Space Complexity - O(1)

```js
/*
Logic:
- Iterate through the array with two nested loops to compare each pair of elements.
- For each element at index i, iterate through the elements following it (starting from index i+1).
- Check if the sum of the elements at indices i and j equals zero.
- If a pair with sum zero is found, return the pair of elements.
- If no such pair is found after exhausting all combinations, return undefined.

Example:
- Input: [-3, -2, -1, 0, 1, 2, 3]
- Output: [-3, 3] (Sum of -3 and 3 equals 0)
*/

function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            // Check if the sum of elements at indices i and j equals zero
            if(arr[i] + arr[j] === 0){
                // If found, return the pair of elements
                return [arr[i], arr[j]];
            }
        }
    }
    // If no such pair is found, return undefined
}

console.log(sumZero([-3,-2,-1,0,1,2,3])); // Output: [-3, 3]
console.log(sumZero([-2,0,1,3])); // Output: undefined
console.log(sumZero([1,2,3])); // Output: undefined

```
### Solution 2 (efficient solution using multiple pointer)

Time Complexity - O(N)
Space Complexity - O(1)

```js
/*
Logic:
- Use the two-pointer technique to find a pair of elements in the sorted array whose sum equals zero.
- Initialize two pointers, left and right, pointing to the beginning and end of the array respectively.
- Iterate through the array until the left pointer is less than the right pointer.
- Calculate the sum of the elements at the positions indicated by the left and right pointers.
- If the sum is zero, return the pair of elements.
- If the sum is greater than zero, decrement the right pointer to reduce the sum.
- If the sum is less than zero, increment the left pointer to increase the sum.
- Repeat this process until the left pointer crosses the right pointer or until a pair with sum zero is found.

Example:
- Input: [-4, -3, -2, -1, 0, 1, 2, 3, 10]
- Output: [-3, 3] (Sum of -3 and 3 equals 0)
*/

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        // Calculate the sum of the elements at positions indicated by left and right pointers
        let sum = arr[left] + arr[right];
        // If the sum equals zero, return the pair of elements
        if(sum === 0){
            return [arr[left], arr[right]];
        } 
        // If the sum is greater than zero, decrement the right pointer
        else if(sum > 0){
            right--;
        } 
        // If the sum is less than zero, increment the left pointer
        else {
            left++;
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])); // Output: [-3, 3]

```
## Example 2: Count Unique Values:
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```js
/*
Logic:
- Use two pointers, i and j, where i represents the position of the last unique value found.
- Start with i = 0 and j = 1.
- Iterate over the array starting from index 1 (j).
- Compare the value at index i with the value at index j.
    - If they are different, increment i and assign the value at index j to the position of index i.
    - If they are the same, continue to the next iteration without changing anything.
- Repeat this process until the end of the array.
- The count of unique values will be i + 1, as indexing starts from 0.

Example:
- Input: [1, 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
- Output: 7 (Unique values: 1, 2, 3, 4, 7, 12, 13)

Time Complexity - O(n)
Space Complexity - O(n)

Bonus: You must do this with constant or O(1) space and O(n) time.
*/

const countUniqueValues = arr => {
    // Edge case: If the array is empty, return 0
    if (arr.length === 0) return 0;

    // Initialize a pointer i to keep track of unique values
    let i = 0;

    // Iterate over the array with pointer j starting from index 1
    for (let j = 1; j < arr.length; j++) {
        // If the current value at pointer i is not equal to the value at pointer j
        if (arr[i] !== arr[j]) {
            // Increment pointer i to move to the next unique value
            i++;
            // Assign the value at pointer j to the position of pointer i
            // This effectively moves all unique values to the beginning of the array
            arr[i] = arr[j];
        }
        // If the values are equal, continue to the next iteration
    }
    // Return the count of unique values, which is the final index of pointer i + 1
    // (as indexing starts from 0)
    return i + 1;
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
```
# Sliding Window
## Example 1:
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

### Solution (a naive solution)

Time Complexity - O(N^2)

```js
function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null

```

### Solution 2

Time Complexity - O(N)

```js
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

# Recursion
## What is Recursion?
Here's a breakdown of recursion in computer science, along with examples and explanations:

**What is Recursion?**

In programming, recursion is a technique where a function calls itself within its own definition to solve a problem. It works by breaking down the original problem into smaller, self-similar subproblems.

**Key Components of Recursion**

1. **Base Case:**  The simplest version of the problem that can be solved directly without further recursion.  This is essential to prevent infinite loops.
2. **Recursive Case:** The rules for breaking the problem into smaller versions and how the solution to the larger problem is built from the smaller solution(s).

**How Recursion Works**

1. The function is called with the initial problem.
2. It checks if the current instance of the problem is a base case.
   * If yes, it solves it directly and returns the result.
   * If no, it breaks the problem into smaller subproblems.
3. The function calls itself (recursively) on each of the smaller subproblems.
4. Each recursive call works similarly, eventually hitting a base case.
5. Once a base case is reached, the results are combined, moving back up through the chain of recursive calls until the solution to the original problem is obtained. 

**Example: Calculating Factorial**

The factorial of a number (n!) is the product of all positive integers less than or equal to n.

* **Base case:** 0! = 1
* **Recursive case:**  n! = n * (n-1)!

```js
const factorial = (n) => {
  if (n === 0) return 1;
  else {
    return n * factorial(n - 1);
  }
};
```
**Explanation:**

Let's use the factorial example to illustrate step-by-step recursive execution.

**Problem:** Calculate the factorial of 4 (4!)

**Execution:**

1. **Initial Call:** We start by calling `factorial(4)`.
2. **Recursive Case:** Since 4 is not 0, we enter the `else` block:
   * The calculation becomes `4 * factorial(3)`.
   * A new instance of `factorial` is called with the argument `3`.
3. **Second Recursive Call:** Inside `factorial(3)`:
   * 3 is also not 0, so we have `3 * factorial(2)`.
   * Another instance of `factorial` is called with the argument `2`.
4. **Third Recursive Call:** Inside `factorial(2)`:
   * 2 is not 0, leading to  `2 * factorial(1)`.
   * `factorial` is called yet again with the argument `1`.
5. **Fourth Recursive Call:** Inside `factorial(1)`:
   * Still not 0, resulting in `1 * factorial(0)`.
   * `factorial` is called with `0`.
6. **Base Case Hit:** Inside `factorial(0)`:
   * Finally, the base case is met! (`n == 0`) and the function returns `1`.
7. **Unwinding the Recursion:** Now we work backwards:
   * `factorial(1)` now has `1 * 1 = 1` to return.
   * `factorial(2)` has `2 * 1 = 2` to return.
   * `factorial(3)` has `3 * 2 = 6` to return. 
   * `factorial(4)` has `4 * 6 = 24` to return.

**Final Result:** `factorial(4)` returns 24, which is the correct factorial of 4. 

**Another Example: Calculate sum of n digits:**

```js
const sumAll = (n) => {
  if (n === 1) return 1;
  else return n + sumAll(n - 1);
};
```

**Key Points:**

* Each recursive call creates a new frame on the call stack, storing its state (local variables, where it is in the code).
* The base case prevents the stack from growing infinitely.
* Results are propagated back up as return values through the chain of calls.

**Advantages of Recursion**

* **Elegance:**  Can make code more readable for certain problems. 
* **Problem-solving:**  Well-suited for problems with a self-similar structure  (like tree traversals or fractals).

**Disadvantages of Recursion**

* **Overhead:** Recursive calls introduce function call overhead, sometimes making them less efficient in terms of memory and speed compared to iterative solutions.
* **Stack overflow:**  Deep recursion can lead to stack overflows if not carefully controlled.

**When to Use Recursion**

*  Problems with a naturally recursive structure.
*  Readability and code conciseness are prioritized.
*  You are aware of the potential overhead and can optimize when necessary.

# Binary Trees
## What is a binary tree?
A binary tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. The topmost node of the tree is called the root node. Binary trees are commonly used in computer science for representing hierarchical data such as family trees, file systems, and binary search trees.

Here are some key characteristics of binary trees:

1. **Root Node**: The topmost node of the tree, from which all other nodes are descendants.

2. **Parent and Child Nodes**: Each node in a binary tree can have zero, one, or two children. Nodes that have a common parent are called siblings.

3. **Left and Right Children**: A node's left child is the node directly below it on the left, and the right child is the node directly below it on the right.

4. **Subtree**: The subtree of a node includes the node itself and all its descendants.

5. **Binary Search Tree (BST)**: A binary search tree is a type of binary tree in which the left subtree of a node contains only nodes with values less than the node's value, and the right subtree contains only nodes with values greater than the node's value. This property makes BSTs useful for efficient searching, insertion, and deletion operations.

6. **Traversal**: Binary trees can be traversed in different ways, such as in-order, pre-order, and post-order traversal, which determine the order in which nodes are visited.

Binary trees are versatile data structures that are used in various algorithms and applications in computer science, including sorting algorithms, expression evaluation, and data representation.

## What is an in-order, pre-order, and post-order traversal?
In-order, pre-order, and post-order traversal are methods used to visit and process nodes in a binary tree. These traversal techniques determine the order in which nodes are visited, which can be useful for various operations such as searching, printing, or evaluating expressions. Here's an explanation of each traversal method:

1. **In-Order Traversal**:
   - In an in-order traversal, nodes are visited in the following order:
     1. Visit the left subtree recursively.
     2. Visit the current node.
     3. Visit the right subtree recursively.
   - In other words, for a binary search tree (BST), an in-order traversal will visit nodes in non-decreasing order of their values.
   - In-order traversal is commonly used to print nodes in sorted order, perform mathematical operations on BSTs, and check whether a BST is valid.

2. **Pre-Order Traversal**:
   - In a pre-order traversal, nodes are visited in the following order:
     1. Visit the current node.
     2. Visit the left subtree recursively.
     3. Visit the right subtree recursively.
   - Pre-order traversal is useful for creating a copy of a tree, evaluating prefix expressions, and processing nodes in a top-down manner.

3. **Post-Order Traversal**:
   - In a post-order traversal, nodes are visited in the following order:
     1. Visit the left subtree recursively.
     2. Visit the right subtree recursively.
     3. Visit the current node.
   - Post-order traversal is useful for deleting nodes in a tree, evaluating postfix expressions, and processing nodes in a bottom-up manner.

Here's a visual example of how each traversal method works on a binary tree:

```
         A
       /   \
      B     C
     / \   / \
    D   E F   G
```

- In-order traversal: D -> B -> E -> A -> F -> C -> G
- Pre-order traversal: A -> B -> D -> E -> C -> F -> G
- Post-order traversal: D -> E -> B -> F -> G -> C -> A

These traversal techniques are fundamental in understanding and working with binary trees and are used in various algorithms and applications in computer science.

## What is Breadth-first traversal(BFS) and depth-first traversal(DFS)?
Breadth-first traversal (BFS) and depth-first traversal (DFS) are methods used to visit and explore nodes in a graph or tree data structure. These traversal techniques are fundamental in graph theory and are used in various algorithms for searching, pathfinding, and data processing. Here's an explanation of each traversal method:

1. **Breadth-First Traversal (BFS)**:
   - In a breadth-first traversal, nodes are visited level by level, starting from the root node and moving horizontally across each level before moving to the next level.
   - BFS uses a queue data structure to keep track of nodes to visit. The algorithm visits all the nodes at the current level before moving to the next level.
   - BFS is typically used to find the shortest path in an unweighted graph, to check for connectivity between nodes, and to explore the structure of a graph or tree in a level-by-level manner.

2. **Depth-First Traversal (DFS)**:
   - In a depth-first traversal, nodes are visited by exploring as far down a branch as possible before backtracking and exploring other branches.
   - DFS can be implemented using recursion or a stack data structure to keep track of nodes to visit. The algorithm explores one branch of the tree as deeply as possible before moving to another branch.
   - DFS is often used to search for a specific node or path in a graph, to perform topological sorting, and to explore all possible paths in a maze or graph.

Here's a comparison of BFS and DFS using a simple binary tree:

```
         A
       /   \
      B     C
     / \   / \
    D   E F   G
```

- Breadth-First Traversal (BFS): A -> B -> C -> D -> E -> F -> G
- Depth-First Traversal (DFS):
  - Pre-order DFS: A -> B -> D -> E -> C -> F -> G
  - In-order DFS: D -> B -> E -> A -> F -> C -> G
  - Post-order DFS: D -> E -> B -> F -> G -> C -> A

In summary, BFS explores nodes level by level, while DFS explores nodes as deeply as possible before backtracking. The choice between BFS and DFS depends on the specific problem and the desired traversal order.


# Resources
* [Data Structure & Algorithms from Ambreen Khan](https://ambreenkhan.dev/datastructure)
* [14 Patterns to Ace Any Coding Interview Question](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)
* [Algocast from Stephen Grider](https://github.com/StephenGrider/algocasts)
* [Neet Code](https://neetcode.io/roadmap)
* [Leet Code](https://leetcode.com/problems/group-anagrams/description/)
* Courses:
  * [Udemy: The Coding Inteview Bootcamp: Algorithms + Data Structures by Stephen Grider](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)
  * [Udemy: JavaScript Algorithms and Data Structures Masterclass by Colt Steele](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass)
  * [Udemy: 50 popular coding interview problems](https://www.udemy.com/course/50-problems/)
  * [Udemy: Cracking Coding Interview-Data Structure & Algorithm MAANG](https://www.udemy.com/course/coding-interview-question-data-structures-algorithm)
  * [Frontend Masters: The Last Algorithms Course You'll Need](https://frontendmasters.com/courses/algorithms/)
* GitHub:
  * [Awesome Algorithms](https://github.com/tayllan/awesome-algorithms)
  * [Algorithms - Sanjoy Dasgupta, Christos H. Papadimitriou, and Umesh V. Vazirani](https://github.com/eherbold/berkeleytextbooks/blob/master/Algorithms%20-%20Sanjoy%20Dasgupta%2C%20Christos%20H.%20Papadimitriou%2C%20and%20Umesh%20V.%20Vazirani.pdf)
  * [Free Algorithm Books](https://github.com/GauravWalia19/Free-Algorithms-Books/tree/main/Library/src/JAVASCRIPT)
  
