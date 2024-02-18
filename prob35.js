// Coding challenge #34: Create a function that will
// return an array with words inside a text
// const isSeparator = () => {
//     // separator code
// }
// This is my Solution which has some bugs
// const arrayWords = (text: string): Array<string> => {
//     const resultArr = text.split(/,\s*|\s+|\s,+/g);
//     return resultArr;
// }
// const arrayWords = (text:string): Array<string> => {
//     return [text];
// }
// Soltion by ChatGPT
// function extractWords(text) {
// Use a regular expression to split the text into words
//     const words = text.match(/\b\w+\b/g);
// Return the array of words
//     return words || []; // Return an empty array if no words are found
// }
// Test the function
// const text = "Testing, my arrayWords ,problem (solution of), to an impact";
// const wordsArray = extractWords(text);
// console.log(wordsArray);
// console.log(arrayWords("Testing, my arrayWords ,problem (solution) to an impact"));
// match method searches for a match in a regular expression
// Solution by codeGuppy website
// var text = "Testing, my arrayWords ,problem (solution) to an impact";
// 1st scenerio
// var text = "This is it";
// 2nd scenerio
// var text = "This, is it";
// 3rd scenerio
// var text = "This, is (it";
// 4th scenerio
// var text = "This, ai ,is it)";
// 5th scenerio
// var text = "This, is (it)";
// Break the problem into each tiny step and then understand
// console.log(getWords(text));
// function getWords(text: string) {
//   let startWord = -1;
//   let ar: any = [];
// i = 0 => T
// i = 1 => h
// i = 2 => i
// i = 3 => s
// i = 4 => ' '
// i = 5 => i
// i = 6 => s
// i = 7 => ' '
//   for (let i = 0; i <= text.length; i++) { // length 10
//     let c = i < text.length ? text[i] : " "; // i = 0,1,2,3,4 ,5,6,7,8,9 // c = T,h,i,s," ", i,s," ", i,t // startWord = 8;
//     if (!isSeparator(c) && startWord < 0) {
//       startWord = i;// startWord = 0
//     }
//     if (isSeparator(c) && startWord >= 0) {
//       let word = text.substring(startWord, i);
//       ar.push(word);
//       startWord = -1;
//     }
//   }
//   return ar;
// }
// function isSeparator(c: string) {
//   var separator: any = [
//     " ",
//     "\t",
//     "\n",
//     "\r",
//     ",",
//     ";",
//     ".",
//     "!",
//     "?",
//     "(",
//     ")",
//   ];
//   return separator.includes(c);
// }
// Practicing Website Solution
var isSeparator = function (text) {
    var separators = [" ", ",", ".", "?", "!", "\n", "\t", "\r", "(", ")"];
    return separators.includes(text);
};
var getWords = function (text) {
    var arr = [];
    var startWord = -1;
    for (var i = 0; i <= text.length; i++) {
        var c = i < text.length ? text[i] : " ";
        if (!isSeparator(c) && startWord < 0) {
            startWord = i;
        }
        if (isSeparator(c) && startWord >= 0) {
            var word = text.substring(startWord, i);
            arr.push(word);
            startWord = -1;
        }
    }
    return arr;
};
var text = "Testing, my arrayWords ,problem (solution) to an impact";
console.log(getWords(text));
