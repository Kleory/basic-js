const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.map((item) => {
    item.map((i) => {
      if (i == "^^") {
        cats += 1;
      }
    });
  });
  return cats;

};
