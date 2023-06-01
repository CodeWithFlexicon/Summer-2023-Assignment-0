class MySolution {
  countDownSum(num) {
    //Since we are doing it recursively, we need to think about the base cases
    //We want it to stop at 1, so once the number reaches 1, we should return that number
    if (num == 1) 
      return 1;
    return num + this.countDownSum(num-1);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;