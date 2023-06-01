function countOfAllNumbersSmallerThanTarget(nums, target) {
  //We can use another simple loop to count all numbers less than the target or a hashmap
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < target) 
      count++;
  }

  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;