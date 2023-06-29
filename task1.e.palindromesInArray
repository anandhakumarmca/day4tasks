const string = ["amma", "hello", "radar"];

//Return all the palindromes in an array using an Anonymous function

const getPalindromes = function(arr) {
  return arr.filter(function(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  });
};

console.log("Palindromes in given array is : "+ getPalindromes(string));

//Return all the palindromes in an array using an Invoked Function Expressions (IIFE)

const palindromes = (function(arr) {
  return arr.filter(function(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  });
})(string);

console.log("Palindromes in given array is : "+ palindromes);
