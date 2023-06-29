const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

//Return median of two sorted arrays using an Anonymous function

const getMedian = function(arr1, arr2) {
  const merged = arr1.concat(arr2);
  merged.sort(function(a, b) {
    return a - b;
  });
  
  const midIndex = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[midIndex - 1] + merged[midIndex]) / 2;
  } else {
    return merged[midIndex];
  }
};

console.log("Median of two sorted given arrays in : " + getMedian(arr1, arr2));

//Return median of two sorted arrays using an Invoked Function Expressions (IIFE)

const median = (function(arr1, arr2) {
  const merged = arr1.concat(arr2);
  merged.sort(function(a, b) {
    return a - b;
  });
  
  const midIndex = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[midIndex - 1] + merged[midIndex]) / 2;
  } else {
    return merged[midIndex];
  }
})(arr1, arr2);

console.log("Median of two sorted given arrays in : " + median);
