const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let sep = options.separator;
  let add = options.addition;
  let repeat = options.repeatTimes;
  let addSep = options.additionSeparator;
  let addRepeat = options.additionRepeatTimes;
  //console.log(sep);
  str = String(str);
  if (add) {
    str = str + add;
  }
  let newStr = "";
  if (repeat) {
    if (sep) {
      str = str + sep;
    } else {
      str = str + "+";
    }
    if (addSep) {
      str = str + addSep;
    }
    if (repeat > addRepeat) {
      newStr = str.repeat(repeat);
    } else if (repeat < addRepeat) {
      newStr = str.repeat(addRepeat);
    }
  } else {
    newStr = str;
  }
  //console.log(newStr)
  let cep = new RegExp("" + sep + "$");
  //console.log(cep)
  let lastStr = "";
  if (sep) {
    lastStr = newStr.replace(cep, "");
  } else {
    lastStr = newStr.replace(/\+$/, "");
  }

  //console.log(lastStr);
  return lastStr;
};
