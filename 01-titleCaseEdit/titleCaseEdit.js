function titleCaseEdit(title) {
  //Split divides a string using the pattern passed and creates an ordered array of substrings
  title = title.split(" "); 
  //Create a loop to go through each word and capitalize the first letter
  for(let i = 0; i < title.length; i++) {
    //substr returns a substring starting at whatever index is passed
    //In this case, we are setting the first character of the word to upper case but we still need to add the rest of the word back to the string
    title[i] = title[i].charAt(0).toUpperCase() + title[i].substr(1); 
  }

  return title.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;