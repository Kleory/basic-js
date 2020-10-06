const CustomError = require("../extensions/custom-error");

let maxLength = 0;

module.exports = class DepthCalculator {
  calculateDepth(arr, length = 0) {
    if (length === 0) maxLength = 0;

    length += 1;
    maxLength = maxLength < length ? length : maxLength;

    arr.map((item) => {
      if (Array.isArray(item)) {
        this.calculateDepth(item, length);
      }
    });

    length -= 1;

    return maxLength;
  }
};
