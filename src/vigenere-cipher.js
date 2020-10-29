const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine{

  constructor(param = true){
    this.param = param;
  }

  encrypt(str, key) {
    if (!str || !key) {throw 'Error'}
    else{
      let encryptStr = '';
      let newKey = key.toUpperCase();
      let newStr = str.toUpperCase();
      let k = 0;
    
      for (let i = 0; i < newStr.length; i++){

        if (newStr[i].charCodeAt(0) <= 90 && 65 <= newStr[i].charCodeAt(0)){
          let ind = newStr[i].charCodeAt(0);
          let keyI = newKey[k % newKey.length].charCodeAt(0) - 65;
          let c = ind + keyI;

          while (c > 90) {c -= 26};

          encryptStr += String.fromCharCode(c);
          k++;
        } else{
          encryptStr += newStr[i];
        }
      };

      if (this.param) {return encryptStr}
      else {return encryptStr.split('').reverse().join('');}
      
    };
  }    
  decrypt(str, key) {
    if (!str || !key) {throw 'Error'}
    else{
      let decryptStr = '';
      let newKey = key.toUpperCase();
      let newStr = str.toUpperCase();
      let k = 0;    

      for (let i = 0; i < newStr.length; i++){
        if (newStr[i].charCodeAt(0) <= 90 && 65 <= newStr[i].charCodeAt(0)){
          let ind = newStr[i].charCodeAt(0);
          let keyI = newKey[k % newKey.length].charCodeAt(0) - 65;
          let c = ind - keyI;

          while (c < 65) {c += 26};

          decryptStr += String.fromCharCode(c);
          k++;
        } else{
          decryptStr += newStr[i];
        }
      };

      if (this.param) {return decryptStr}
      else {return decryptStr.split('').reverse().join('');}
      // return decryptStr;
    };
  }
}

module.exports = VigenereCipheringMachine;
