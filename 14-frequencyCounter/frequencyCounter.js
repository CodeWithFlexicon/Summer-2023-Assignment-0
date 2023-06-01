function frequencyCounter(word) {
  //We can create a map which is a data structure that uses key value pairs
  let freqency = {};

  for(var i = 0; i < word.length; i++) {
    //If the letter is already found in the map, then we can increment the value pair
    //Otherwise, we can store the new letter and set the value to 1
    if (freqency[word[i]])
      freqency[word[i]]++;
    else
      freqency[word[i]] = 1;
  }

  return freqency;
}

// Do not edit this line;
module.exports = frequencyCounter;