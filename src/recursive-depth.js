const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {  
      if (arr.length==0) return 1
      else return Math.max(...arr.map(elem => this.calculateDepth(elem)))+1
    }
    else return 0;
  }
}