function countOfAllBooleansAndStrings(arr) {
  //We can loop through the array and tally up the true or false data types as well as string data types
  //We can use === for strict comparisons and typeof to check their data types
  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === true || arr[i] === false || typeof arr[i] == "string") 
      count++;
  }

  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;