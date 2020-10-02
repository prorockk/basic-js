const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    throw new CustomError('Not implemented');
    if (Array.isArray(arr)) {
      return 1 + Math.max(...arr.map(this.calculateDepth))
    }
    else return 0
  }
};