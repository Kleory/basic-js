const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'}) {

  a = '';
  
  for (let i = 0; i < repeatTimes - 1; i++){
    a += str;
    for (let j = 0; j < additionRepeatTimes-1; j++){
      a += addition + additionSeparator;
    };
    a += addition
    a += separator;
  };

  a += str;
  for (let j = 0; j < additionRepeatTimes-1; j++){
    a += addition + additionSeparator;
  };
  a += addition;

  return a;
};
  