const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let t
  if (typeof sampleActivity ==='string' && !typeof +sampleActivity === 'number' && +sampleActivity > 0 && +sampleActivity <= 15){
    t = Math.ceil((Math.log(15/sampleActivity)) / (Math.log(2) / 5730)); 
    return t;
    
  }else {
    return false;
    };
  
};
