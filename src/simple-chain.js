const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value){
     this.chain.push(value+'')
    }
    else if (value+'' == 'NaN' || value == 0 || value == null || value == false) {
      this.chain.push(value+'')
    }
    else {
      this.chain.push(' ') 
    }
    return this 
  },
  removeLink(position) {
    if (position > 0 && position <= this.chain.length)  {
      this.chain.splice(position-1,1)
    }
    else {
      this.chain=[];
      throw new Error('Error')
    }
    return this 
  },
  reverseChain() {
    this.chain.reverse();
    return this 
  },
  finishChain() {
    let result = '';
    for (i=0; i<this.chain.length; i++) {
      if (i==this.chain.length-1) {
        result +='( '+this.chain[i]+' )'
      }
      else {
        result +='( '+this.chain[i]+' )~~'
      }
    }
    this.chain=[]
    return result
  }
};

module.exports = chainMaker;
