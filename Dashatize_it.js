function dashatize(num) {
  num = num.toString();
  num = num.split("");
  let result = [];
  for (i = 0; i < num.length; i++) {
    result.push(num[i]);
    if (Number(num[i]) % 2 == 1 || Number(num[i + 1]) % 2 == 1) {
      result.push("-");
    }
  }
  if (result[result.length - 1] == "-") {
    result.pop();
  }
  while (result[0] == "-") {
    result.shift();
  }
  result = result.join("");
  result = result.slice(0, result.length);
  return result;
}

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
console.log(dashatize(28369));
