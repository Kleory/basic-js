const CustomError = require("../extensions/custom-error");

const timeYear = ["winter", "spring", "summer", "autumn"];

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!date.getMilliseconds()) {
    throw new Error("Error");
  }

  let month = date.getMonth() + 1;
  month = month === 12 ? 0 : month;

  return timeYear[Math.floor(month / 3)];

};
