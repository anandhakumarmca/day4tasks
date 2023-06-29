//Return all the palindromes in an array

const string = ["amma", "hello", "radar"];

const isPalindrome = (str) => {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

const getPalindromes = (arr) => {
  return arr.filter((str) => isPalindrome(str));
};

console.log("Palindromes in given array is : "+ getPalindromes(string));
