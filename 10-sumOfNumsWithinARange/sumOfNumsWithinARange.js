function sumOfNumsWithinARange(nums, start, end) {
  // Using a simple loop, we check if the current number in the array is greater than or equal to the start and less than or equal to the end
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] >= start && nums[i] <= end)
      count++;
  }

  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;