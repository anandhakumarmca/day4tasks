const numbers = [103, 232, 253, 304, 475, 556, 617, 898, 969, 1510];

//Print Odd Numbers in Array using an Invoked Function Expressions (IIFE)
(function(arr) {
    console.log("Odd Numbers in Given array is : ");
  arr.forEach(function(num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})(numbers);

//Print Odd Numbers in Array using an anonymous function
const printOddNumbers = function(arr) {
    console.log("Odd Numbers in Given array is : ");
     arr.forEach(function(num) {
       if (num % 2 !== 0) {
         console.log(num);
       }
     });
   };
   printOddNumbers(numbers);
