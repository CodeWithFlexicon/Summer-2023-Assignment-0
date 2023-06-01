function sumOfAllOddNumbers(nums) {
  // Using the same logic here with a simple loop, if the modulo operator returns a remainder when divided by 2, it should be odd
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0) 
      count++;
  }

  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;