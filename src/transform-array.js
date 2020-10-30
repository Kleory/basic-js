const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr) && arr.length){return false}
  
  let a = [];
  let k = 0;
  let index = 1;

  arr.map((item, i) => {
    if (k) {
      k = 0;
      

      return false;
    }
    
    if(item == '--discard-next'){
      k = 1;
      index = 0;

      return false;
    }
    
    if(item == '--discard-prev'){
      if (a.length && index){
        a.pop();
      }else {index = 1};

      return false;
    }
    
    if(item == '--double-next'){
      if (i < arr.length-1){
       a.push(arr[i+1]); 
      }
      
      return false;
    }
    
    if(item == '--double-prev'){
      if (a.length && index){
        a.push(arr[i-1]);
      }else {
        index = 1
      };

      return false;
    }
      
    a.push(item);
    index = 1;
    
  } )
  return a;


  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
