function sumOfMinimumAndMaximum(nums) {
  // To keep it simple thanks to Javascript, we can use the Math.max and Math.min
  // To pass in an array, we must include spread syntax(...) so Math can read the values of the array as individual parameters
  return Math.max(...nums) + Math.min(...nums);

  // Otherwise, we can create two variables that would keep track of the max and min values as we go through the array

  /* var max = nums[0], min = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (max < nums[i])
      max = nums[i];
    else 
      min = nums[i];
  } */


  return max + min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;