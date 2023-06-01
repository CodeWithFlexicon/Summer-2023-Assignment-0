function setUnionOfAnyAmountOfSets(...args) {
  // We have to use a nested loop since the add function inserts only *elements* into the new set
  let union = new Set();

  // So first loop we will iterate through each set
  for (let i of args) {
    //Now that we have the set, we need to iterate through each element in the set and add it to the new set
    for (let j of i) {
      union.add(j);
    }
  }

  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;