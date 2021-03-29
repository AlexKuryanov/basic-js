const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let defaultOptions = {
    repeatTimes: 0,
    separator: "+",
    addition: "",
    additionRepeatTimes: 0,
    additionSeparator: "|",
  };
  let sep = options.separator;
  //console.log(sep);
  str = String(str);

  if (sep) {
    str = str + sep;
  } else {
    str = str + "+";
  }

  let newStr = str.repeat(options.repeatTimes);
  //console.log(newStr)
  let cep = new RegExp("" + sep + "$");
  //console.log(cep)
  let lastStr = "";
  if (sep) {
    lastStr = newStr.replace(cep, "");
  } else {
    lastStr = newStr.replace(/\+$/, "");
  }

  console.log(lastStr);
  return lastStr;
};
