/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

**Example**

For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.

**Hints**
-   Math.abs()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer inputArray**

*Guaranteed constraints:*

3 ≤ inputArray.length ≤ 10,

-15 ≤ inputArray[i] ≤ 15.

- **[output] integer**

The maximal absolute difference.
 */
function arrayMaximalAdjacentDifference(arr) {
  let result = [];
  for (i = 0; i < arr.length - 1; i++) {
    result.push(Math.abs(arr[i] - arr[i + 1]));
  }
  console.log(result);

  return Math.max(...result);
}
console.log(arrayMaximalAdjacentDifference([1, 2, 4, 5, 10]));
