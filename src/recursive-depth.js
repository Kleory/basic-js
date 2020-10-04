const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(/*arr*/) {
    throw new CustomError("Not implemented");
    // remove line with error and write your code here

    // let length = 1;
    // let count = [];
    // function deep(item) {
    //   if (item.isArray) {
    //     item.map((itemN) => {
    //       if (itemN.isArray()) {
    //         length += 1;
    //         deep(itemN);
    //       } else {
    //         count.push(length);
    //         length -= 1;
    //       }
    //     });
    //   }
    // }

    // arr.map((item) => deep(item));
    // console.log(count);
    // let max = Math.max(...count);
    // return max;
  }
};
