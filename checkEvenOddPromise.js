function checkValue(n) {
  return new Promise((resolve, reject) => {
    if (n % 2 == 0) {
      resolve(this);
    } else {
      reject();
    }
  });
}

checkValue(102)
  .then((n) => {
    console.log("even");
  })
  .catch(() => {
    console.log("odd");
  });
