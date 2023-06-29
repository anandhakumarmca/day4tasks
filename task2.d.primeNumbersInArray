//Return all the prime numbers in an array

const numbers = [12, 23, 34, 47, 58];

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeNumbers = (arr) => {
  return arr.filter((num) => isPrime(num));
};

console.log("Prime numbers in given array is : "+ getPrimeNumbers(numbers));
