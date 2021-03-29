const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};

  let turns = 2 ** disksNumber - 1;
  let turnsInSeconds = turnsSpeed / 60 / 60;
  let seconds = turns / turnsInSeconds;
  result.turns = turns;
  result.seconds = Math.floor(seconds);
  return result;
};
