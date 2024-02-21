// Create a function to convert
// a CSV text to a “bi-dimensional” array
// Example usage
var csv = "Name,Age,Email\nJohn,25,john@example.com\nAlice,30,alice@example.com\nBob,35,bob@example.com";
// const getWords(text)
// text => line
// const separatorWhenSpace = (text: string) => {
//   const separator: any = [" ", "\t"];
//   return separator.includes(text);
// };
// const separatorWhenComma = (text: string) => {
//   const separator: any = [","];
//   return separator.includes(text);
// };
// const csvToArray = (text: string): string[] => {
//   const arr: any = [];
//   for (let i = 0; i < text.length; i++) {
//     if (separatorWhenSpace(text)) {
//       arr.push(text[i]);
//     }
//   }
//   return arr;
// };
// console.log(csvToArray(csv));
// checkout push in main branch
// Coding challenge #32: Create a function
// that will capitalize the first letter of each
// word in a text
var isSeparator = function (text) {
    var separators = [" ", ",", "\t", "\n"];
    return separators.includes(text);
};
var testText = "javascript is my favourite language not as a programming language but as a general language";
var capitalizeWords = function (text) {
    var arr = '';
    for (var i = 0; i < text.length; i++) {
        var curr = text[i];
        var prevCurr = i > 0 ? text[i - 1] : " ";
        if (!isSeparator(curr) && isSeparator(prevCurr)) {
            curr = curr.toUpperCase();
        }
        arr += curr;
    }
    return arr;
};
console.log(capitalizeWords(testText));
// Coding challenge #31-a: Create a function
// that will return the number of words in a text
// Coding challenge #34: Create a function that will
// return an array with words inside a text
