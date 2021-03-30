const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr) {
    throw `Error`;
  } else {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i] !== "--discard-next" &&
        arr[i] !== "--discard-prev" &&
        arr[i] !== "--double-prev" &&
        arr[i] !== "--double-next"
      ) {
        arr1.push(arr[i]);
        //console.log(arr1);
      } else if (
        arr[i] === "--discard-next" &&
        arr[i + 1] &&
        arr[i + 2] === "--double-prev"
      ) {
        arr1.push(arr[i + 3]);
        i += 3;
        //console.log(arr1);
      } else if (arr[i] === "--discard-prev" && arr[i - 1]) {
        arr1.pop(arr[i - 1]);
        //console.log(arr1);
      } else if (
        arr[i] === "--double-prev" &&
        arr[i - 2] !== "--discard-next" &&
        arr[i - 1]
      ) {
        arr1.push(arr[i - 1]);
        //console.log(arr1);
      } else if (arr[i] === "--double-next" && arr[i + 1]) {
        arr1.push(arr[i + 1]);
        //console.log(arr1);
      }
    }
    return arr1;
  }
};
