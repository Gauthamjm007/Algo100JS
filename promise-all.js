function api1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { id: 1, name: "Goutham" },
        {
          id: 2,
          name: "Raju"
        }
      ];
      resolve(users);
    }, 600);
  });
}

function api2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { id: 1, name: "sita" },
        {
          id: 2,
          name: "gita"
        }
      ];
      resolve(users);
    }, 1000);
  });
}

function api3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { id: 1, name: "babitha" },
        {
          id: 2,
          name: "savita"
        }
      ];
      reject("error found");
    }, 1000);
  });
}

Promise.all([api1(), api2()])
  .then((values) => {
    const [api1Result, api2Result] = values;
    console.log(api1Result, api2Result);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all([api1(), api2(), api3()])
  .then((values) => {
    const [api1Result, api2Result, api3Result] = values;
    console.log(api1Result, api2Result);
  })
  .catch((err) => {
    console.log(err);
  });
