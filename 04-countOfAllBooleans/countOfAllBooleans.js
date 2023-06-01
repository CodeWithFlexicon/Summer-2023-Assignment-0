function countOfAllBooleans(arr) {
  //Can do simple loop through the array and tally up the true or false values
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    //Since we only want true or false values ONLY, we need to compare using === which will compare the value and data type
    //Using == will lead to errors in the case that positive numbers will be converted into true values
    if (arr[i] === true || arr[i] === false) {
      count++;
    }
  }

  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;