const array = [1, 2, 3, 2, 4, 3, 5];

//Remove duplicates from an array using an Anonymous function

const removeDuplicates = function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
};

console.log("After removing duplicates in Array is : " + removeDuplicates(array));

//Remove duplicates from an array using an Invoked Function Expressions (IIFE)

const removeArrayDuplicates = (function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
})(array);

console.log("After removing duplicates in Array is : " + removeArrayDuplicates);
