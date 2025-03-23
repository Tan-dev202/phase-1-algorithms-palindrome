function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  if (word === reversed) {
    return true;
  } else {
    return false;
  }
}

isPalindrome("abba");
isPalindrome("racecar");
isPalindrome("robot");
isPalindrome("a");

isPalindrome("ab");
/* 
  Add your pseudocode here
* reverse the string
* compare original and reversed string
*/

/*
  Add written explanation of your solution here
  the function does the following:
* uses split method to convert str into array of chars
* reverses array
* joins back chars into a str
* compares original with reversed str
* returns true if they match, false if they do not match
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
