const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (Boolean(sampleActivity) && typeof sampleActivity == 'number' && Number.isInteger(sampleActivity) && sampleActivity>3) {
    let k = 0.693/HALF_LIFE_PERIOD;
    let result = (Math.log(sampleActivity/MODERN_ACTIVITY))/k
    return Math.ceil(result)
  }
  else return false
};
