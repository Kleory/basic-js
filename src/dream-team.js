const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
if (!Array.isArray(members) || !members) 
  {return false }
  else  {
    let x = '';
    let y ;
    members.map( item => {

      if (item && typeof(item) == "string"){
        let i = 0; 
           
        while ((item[i].charCodeAt(0) > 90 || item[i].charCodeAt(0) < 65) && (item[i].charCodeAt(0) > 122 || item[i].charCodeAt(0) < 97)){ i++}
       
        x += item[i].toUpperCase();       
      }
    });

    y = x.split('').sort().join('');
    return y;
  }

};
