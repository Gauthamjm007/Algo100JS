function Rearrange(arr) {
  const pos = [],
    neg = [],
    result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > -1) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }

  console.log(pos, neg);

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      if (neg.length !== 0) {
        result.push(neg.shift());
      } else {
        result.push(pos.shift());
      }
    } else {
      if (pos.length !== 0) {
        result.push(pos.shift());
      } else {
        result.push(neg.shift());
      }
    }
  }

  return result;
}

console.log(Rearrange([1, 2, 3, -4, -1, 4]));


