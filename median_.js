// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

var findMedianSortedArrays = function(nums1, nums2) {
  const arr = nums1.concat(nums2).sort(customSort);
  const middle = arr.length / 2;

  if (middle % 2 > 0 && arr.length % 2 > 0) {
    // middle value of the sorted array if length is an odd number
    return arr[Math.floor(middle)];
  } else {
    // add two middle numbers ÷ 2
    return (arr[middle - 1] + arr[middle]) / 2;
  }
};

function customSort(a, b) {
  // use custom sort function to properly sort numbers
  return a - b;
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1], []));
