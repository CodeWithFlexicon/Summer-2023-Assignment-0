function countOfAllIndexMatchingNumbers(nums) {
  // We can use a simple loop where we compare if the number is equal to the current loop counter
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == i) 
      count++;
  }

  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;