const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arr=[]
  let result
  if (options.separator == undefined) options.separator = '+';
  if (options.additionSeparator == undefined) options.additionSeparator = '|';
  if (options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;
  if (options.repeatTimes == undefined) options.repeatTimes = 1;
  if (options.addition===null) options.addition='null'
  
  for (i=0; i<options.repeatTimes;i++) {
    let add=[]
    for (j=0; j<options.additionRepeatTimes;j++){
      add.push(options.addition)
    }
    arr.push(str + add.join(options.additionSeparator));
  }
  result= arr.join(options.separator)
  return result
};
  