const arr = [1, 2, 3, 4, 5];
const k = 3;
const k1 = 2;
//Rotate an array by k times using an Anonymous function

const rotateArray = function(arr, k) {
  const rotations = k % arr.length;
  const rotated = arr.slice(rotations).concat(arr.slice(0, rotations));
  return rotated;
};

const rotatedArray = rotateArray(arr, k);
console.log("Rotating an array "+ k +" times :"+rotatedArray);

//Rotate an array by k times using an Invoked Function Expressions (IIFE)

const rotatedArray1 = (function(arr, k1) {
  const rotations = k1 % arr.length;
  const rotated = arr.slice(rotations).concat(arr.slice(0, rotations));
  return rotated;
})(arr, k1);

console.log("Rotating an array "+ k1 +" times :"+rotatedArray1);
