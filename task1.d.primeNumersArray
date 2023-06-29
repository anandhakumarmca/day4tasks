const numbers = [12, 23, 34, 47, 58];

//Return all the prime numbers in an array using an Anonymous function

const getPrimeNumbers = function(arr) {
  return arr.filter(function(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
};

console.log("Prime numbers in given array is : "+ getPrimeNumbers(numbers));

//Return all the prime numbers in an array using an Invoked Function Expressions (IIFE)

const primeNumbers = (function(arr) {
  return arr.filter(function(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });
})(numbers);

console.log("Prime numbers in given array is : "+ primeNumbers);
