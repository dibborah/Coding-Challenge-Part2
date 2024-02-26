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
// const capitalizeWords = (text: string): string => {
//   let arr =  '';
//   for (let i = 0; i < text.length; i++) {
//     let curr = text[i];
//     const prevCurr = i > 0 ? text[i - 1] : " ";
//     if(!isSeparator(curr) && isSeparator(prevCurr)) {
//       curr = curr.toUpperCase();
//     }
//     arr += curr;
//   }
//   return arr;
// };
// console.log(capitalizeWords(testText));
// Coding challenge #31-a: Create a function
// that will return the number of words in a text
// My Solution
// const getWordsNumber = (text: string): number => {
//   let words = 0;
//   for (let i = 0; i < text.length; i++) {
//     let currChr = text[i];
//     let prevCurr = i > 0 ? text[i  - 1] : " ";
//     if(!isSeparator(currChr) && isSeparator(prevCurr)){
//       words += 1;
//     }
//   }
//   return words;
// };
// Websites Solution
// const countWords = (text:string): number => {
//   let wasSeparator = true;
//   let words = 0;
//   for(let i = 0; i < text.length; i++) {
//     if(isSeparator(text[i])) {
//       wasSeparator = true;
//       continue;
//     }
//     if(wasSeparator){
//       words++;
//       wasSeparator = false;
//     }
//   }
//   return words;
// }
// Coding challenge #34: Create a function that will
// return an array with words inside a text
// javascript is good // Length = 18 // Case 1. startword = 0 and endword = 11
//  Case 2. startWord = 12 and endWord = 14
//   Case 3. startWord = 15 and endword = 19
var arrayWords = function (text) {
    var arr = [];
    var startWord;
    var fixedStartWord = true;
    for (var i = 0; i <= text.length; i++) {
        var c = i < text.length ? text[i] : " ";
        if (!isSeparator(c) && fixedStartWord) {
            startWord = i;
            fixedStartWord = false;
        }
        if (isSeparator(c) && !fixedStartWord) {
            arr.push(text.substring(startWord, i));
            fixedStartWord = true;
        }
    }
    return arr;
};
console.log(arrayWords("javascript is good programming language"));
// console.log(arrayWords("Hii, my name is khan and I am,,,, ,,,, nota terrorist"));
