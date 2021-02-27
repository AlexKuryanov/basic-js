const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr) {
    throw `Error`
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === `--discard-next`) {
        arr.splice(arr[i + 1], 1);
      } else if (arr[i] === `--discard-prev`) {
        arr.splice(arr[i - 1], 1);
      } else if (arr[i] === `--double-next`) {
        arr.splice(arr[i + 1], 0, arr[i + 1]);
      } else if (arr[i] === `--double-prev`) {
        arr.splice(arr[i - 1], 0, arr[i - 1]);
      } else {
        arr.splice(arr[i]);
      }
      
    }
  }
};
