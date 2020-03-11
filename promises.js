const myPromise = new Promise(function(resolve, reject) {
  const n = Math.round(Math.random() * 100);
  if (n % 2 == 0) {
    resolve(n);
  } else {
    reject(n);
  }
});

myPromise
  .then((n) => {
    console.log("success",n);
  })
  .catch((n) => {
    console.log("failure",n);
  });
