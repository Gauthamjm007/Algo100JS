function seperate(arr) {
  arr = arr.sort();
  let pos = [],
    neg = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }
  neg = neg.reverse();
  for (let j = 0; j < pos.length + neg.length; j++) {
    if (j % 2 == 0) {
      arr[j] = neg.shift();
    } else {
      arr[j] = pos.shift();
    }
  }
  return arr;
}

console.log(seperate([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]));
