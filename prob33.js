"use strict";
// Coding challenge #32: Create a function
// that will capitalize the first letter of each
// word in a text
// Object.defineProperty(exports, "__esModule", { value: true });
// First the solution of returning the number of words in passed text
// const isSeparator = (text:any): boolean => {
//     const separators:any = [" ", "\n", "\r", "\t", "?", ".", "!"];
//     return separators.includes(text);
// }
// const capitalizeWords = (text:string) : string => {// java scr
//     var text2 = "";
//     for(var i = 0; i < text.length; i++) {
//         var currChr = text[i];// a
//         var prevChr = i > 0 ? text[i - 1] : " ";// J
//         if(!isSeparator(currChr) && isSeparator(prevChr)){
//             currChr = currChr.toUpperCase();
//         }
//         text2 += currChr;
//     }
//     return text2;
// };
// console.log(capitalizeWords("Javascript is my favourite language"));// 5
// console.log(capitalizeWords("   Javascript is my favourite language   "));
// Practicing solutions of website
var isSeparator = function (text) {
    var separators = ["", " ", "\n", "\r", "\t"];
    return separators.includes(text);
};
var capitalizeWords = function (text) {
    var text2 = "";
    for (var i = 0; i < text.length; i++) {
        var currChr = text[i];
        var prevChr = i > 0 ? text[i - 1] : " ";
        if (!isSeparator(currChr) && isSeparator(prevChr)) {
            currChr = currChr.toUpperCase();
        }
        text2 += currChr;
    }
    return text2;
};
console.log(capitalizeWords("  javascipt is my favourite language  "));
console.log(capitalizeWords("javascipt is my favourite language"));
console.log(capitalizeWords("  javascipt   is  my   favourite    language    "));
