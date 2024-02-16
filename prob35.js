// Coding challenge #34: Create a function that will 
// return an array with words inside a text
// const isSeparator = () => {
//     // separator code
// }
var arrayWords = function (text) {
    var resultArr = text.split(' ');
    return resultArr;
};
console.log(arrayWords("Testing, my arrayWords ,problem solution"));
