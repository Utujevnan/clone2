function party() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("The Party is starting");
    }, 40000);
  });
}

party()
  .then((result1) => {
    console.log(result1);
    return "Bring The cake";
  })

  .then((result2) => {
    console.log(result2);
    return "the singer is here";
  })
  .then((result3) => {
    console.log(result3);
  });
