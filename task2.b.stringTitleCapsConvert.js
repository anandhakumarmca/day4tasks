//Convert all the strings to title caps in a string array
const strings = ["welcome to", "guvi", "zen program"];

const convertToTitleCaps = (arr) => {
  return arr.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
};

console.log(convertToTitleCaps(strings));
