function productOfAnyAmountOfNumbers(...args) {
  //Using a for of loop, we can iterate through any amount of elements 
  let product = 1;
  
  for (let i of args) {
    product *= i;
  }

  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;