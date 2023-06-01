function pairSum(nums, target) {
  // We can use two for loops to find if any pair can add up to the target
  if (nums.length < 2) {
    throw new Error("Array too short");
  }

  for (var i = 0; i < nums.length; i++) {
    for (var j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return true;
      }
    }
  }

  return false;
}

// Do not edit this line;
module.exports = pairSum;