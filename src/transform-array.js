const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr) && arr.length){return false}
  else {
  let a = [];
  let k = 0;
  arr.map((item, i) => {
    if (k) {
      k = 0;
    }else
    if(item == '--discard-next'){
      k = 1;
    }else
    if(item == '--discard-prev'){
      if (a.length){
        a.pop;
      }
    }else
    if(item == '--double-next'){
      if (i < arr.length-1){
       a.push(arr[i+1]); 
      }
      
    }else
    if(item == '--double-prev'){
      if (a.length){
        a.push(arr[i-1]);
      }
    }else {
      a.push(item);
    }
  } )
  return a;
}

  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
