function getNames(car) {
  return new Promise(function (resolve, reject) {
    if (car === "benz") {
      resolve("the car is benz");
    } else {
      reject("The car is not benz");
    }
  });
}
getNames("hyundai")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
