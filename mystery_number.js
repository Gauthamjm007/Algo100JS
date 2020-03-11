function mysteryNumber(n) {
  for (let i = 1; i <= n / 2; i++) {
    let j = Number(
      String(i)
        .split("")
        .reverse()
        .join("")
    );
    console.log(j);
    if (i + j == n) {
      console.log("This is mystery number");
      return [i, j];
    }
  }
  console.log("it is not a mystery number");
  return false;
}

console.log(mysteryNumber(121));
console.log(mysteryNumber(22));
