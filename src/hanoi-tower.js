const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsCount = Math.pow(2,disksNumber)-1;
  let secondsCount = Math.floor(turnsCount/(turnsSpeed/3600));
  let tower = {
    turns: Number(turnsCount),
    seconds: Number(secondsCount)
}
return tower
};
