let result = 1;

function factorial(n) {
    if(n)
  return n != 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(4));
