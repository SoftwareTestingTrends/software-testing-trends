# Maximum Subarray 
Given an integer array, find the subarray with the largest sum, and return its sum.

## Solution 1: 
The brute force solution for finding the maximum sum subarray problem involves checking every possible subarray and calculating its sum. This approach is not efficient for large arrays but can be implemented straightforwardly. Here's how you can implement the brute force solution in JavaScript:

```javascript
const maxSumSubarray = arr => {
    if (arr.length === 0) {
        return 0;
    }
    let maxSum = -Infinity
    for(let i=0; i< arr.length; i++) {
        let currentSum = 0
        for(let j=i; j<arr.length; j++) {
            currentSum = currentSum + arr[j]
            maxSum = Math.max(maxSum, currentSum)
        }
    }
    return maxSum
}
// Example usage:
console.log(maxSumSubarray([2, 3, -6, 4, 2, -8, 3])); //6
console.log(maxSumSubarray([2, 3, -1, 4, -10, 2, 5])); //8
console.log(maxSumSubarray([-3, -1, -2])); //-1
```

In this brute force solution, `maxSumSubarray` iterates through every possible subarray by using nested loops. It calculates the sum of each subarray and updates `maxSum` with the maximum sum found so far. This approach has a time complexity of O(n^2), where n is the number of elements in the array, making it less efficient compared to Kadane's algorithm for larger arrays.

## Solution 2: Kadanes algorithm
Kadane's algorithm is a well-known algorithm used to find the maximum sum subarray within a given array of integers. The subarray must contain at least one element. The algorithm efficiently handles both positive and negative numbers.

Here's how Kadane's algorithm works:

1. Initialize two variables: `currentSum` and `maxSum` to 0 or the first element of the array (if all elements are negative).
2. Iterate through the array:
   - Update `currentSum` as the maximum of the current element or the sum of the current element and `currentSum`.
   - Update `maxSum` as the maximum of `maxSum` and `currentSum`.
3. After iterating through the array, `maxSum` will hold the maximum sum of a subarray.

The algorithm's time complexity is O(n), where n is the number of elements in the array, making it efficient for large arrays.

Here's an implementation of Kadane's algorithm in JavaScript:
```
function kadanesAlgorithm(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let currentSum = arr[0];
    let maxSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = kadanesAlgorithm(array);
console.log("Maximum sum of subarray:", maxSum); // Output: 6 (corresponding to [4, -1, 2, 1])

```

In this implementation, `kadanesAlgorithm` takes an array `arr` as input and calculates the maximum sum subarray using Kadane's algorithm. It iterates through the array once, updating `currentSum` and `maxSum` accordingly, and returns the maximum sum found.
