function sumOfAllEvenNumbers(nums) {
  // We can use a simple loop where we tally up every even number which can be given by the modulo operator. 
  // If it is an even number, being divided by 2 should return a 0 remainder which is returned by the modulo operator
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) 
      count++;
  }

  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;