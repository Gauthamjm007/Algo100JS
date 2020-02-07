/*
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

**Example**

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:
-   2 + 3 = 5;
-   3 + 5 = 8;
-   5 + 1 = 6;
-   1 + 6 = 7.

   Thus, the answer is 8

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] array.integer inputArray** Array of positive integers.

*/

function arrayMaxConsecutiveSum(arr, n) {
  let result = [];
  for (i = 0; i < arr.length; i += n - 1) {
    if (arr[i] + arr[i + 1]) {
      result.push(arr[i] + arr[i + 1]);
    }
  }
  console.log(result);
  return Math.max(...result);
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
