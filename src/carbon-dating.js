const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
let age = 0;
module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === String(Number(sampleActivity)) && Number(sampleActivity) > 0 && Number(sampleActivity) <= 15) {
    age = Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD);
    return Math.ceil(age);
  } else {
    return false;
  }
  
};
