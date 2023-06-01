function isPalindrome(word) {
  // We can use a simple loop which checks if the letter from the front and the letter from the back are the same 
  // We can then iterate to the next character forwards from the front and backwards from the back
  let len = word.length;
  for (var i = 0; i < len / 2; i++) {
    if (word[i] != word[len-i-1]) {
      return false;
    }
  }

  return true;
}

// Do not edit this line;
module.exports = isPalindrome;