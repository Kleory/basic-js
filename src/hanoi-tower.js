const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 1;
  let res = {};

  function sumIter(z){
    if (z > 1){
      turns = sumIter(z-1) * 2 + 1;
    }
    return turns;
  }

  sumIter(disksNumber);
  
  res.turns = turns;
  res.seconds = Math.floor((turns * 3600) / turnsSpeed);

  return res;

};
