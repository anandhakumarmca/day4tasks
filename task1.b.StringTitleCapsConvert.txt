const strings = ["welcome to", "guvi", "zen program"];

//Convert all the strings to title caps in a string array using an Anonymous function 

const convertToTitleCaps = function(arr) {
  return arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
};
 console.log(convertToTitleCaps(strings));
    

//Convert all the strings to title caps in a string array using an Invoked Function Expressions (IIFE)

(function(arr) {
  const titleCapsArray = arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  
  console.log(titleCapsArray);
})(strings);
