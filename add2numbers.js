// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
  const result = Number(l1.reverse().join("")) + Number(l2.reverse().join(""));
  return result.toString().split('').reverse().map(Number);
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
