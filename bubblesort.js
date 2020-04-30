function bubblesort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let y = 0; y < arr.length - 1 - i; y++) {
      if (arr[y] < arr[y + 1]) {
        let temp = arr[y];
        arr[y] = arr[y + 1];
        arr[y + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubblesort([4, 5, 6, 1, 2, 3]));
