function series(n) {
  let result = 0;
  for (i = 1; i < n * 3; i = i + 3) {
    result += 1 / i;
  }
  return result;
}

console.log(series(3));
