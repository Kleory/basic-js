const CustomError = require("../extensions/custom-error");

const chainMaker = {

    str: [],
 
  getLength() {
    console.log(this.str.length);
    return this.str.length;
  },
  addLink(value = '') {
    if (!this.str.length){
      this.str.push(`( ${value} )`);
    }else {
      this.str.push('~~');
      this.str.push(`( ${value} )`);
    }; 

    return this;
  },
  removeLink(position) {
    if (!position || !Number.isInteger(position) ||  position < 0 || (position + (position - 3)) >= this.str.length){
      this.str = [];
      throw new Error();
    }else {
      let k = position + (position - 2) - 1;
      (position === 1) ? this.str.splice(0, 2) : this.str.splice(k, 2);

      return this;
    };
  },
  reverseChain() {
    this.str = this.str.reverse();

    return this;
  },
  finishChain() {
    let a = this.str.join('');
    this.str = [];

    return a;
  }
};

module.exports = chainMaker;
