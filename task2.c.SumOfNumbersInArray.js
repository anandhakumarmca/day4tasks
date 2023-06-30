//Sum of all numbers in an array

const numbers = [12, 23, 34, 47, 58];

const sumArray = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0);
};

console.log("Sum of all numbers in array is :"+sumArray(numbers));

