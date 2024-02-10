"use strict";
// Coding challenge #32: Create a function 
// that will capitalize the first letter of each 
// word in a text
// Object.defineProperty(exports, "__esModule", { value: true });
// First the solution of returning the number of words in passed text
var isSeparator = function (text) {
    var separators = [" ", "\n", "\r", "\t", "?", ".", "!"];
    return separators.includes(text);
};
var countWords = function (text) {
    var words = 0;
    var wasSeparator;
    // character a words + 1
    // once character increases the consecutive number should not be increase word count
    // First if empty
    // 0 => j
    for (var i = 0; i < text.length; i++) {
        // console.log(text[i], "Some Character");            
        if (isSeparator(text[i])) {
            wasSeparator = true;
            continue;
        }
        if (wasSeparator) {
            words++;
            // console.log("Word is increased by 1");            
            wasSeparator = false;
        }
    }
    return words;
};
// console.log(countWords(""));// 0
// console.log(countWords("Ja v"));// 2
// console.log(countWords("Javascript is my favourite language"));// 5
// console.log(countWords(" Ja v hihhdc"));// 3
console.log("Answer =>", countWords("   Javascript is my favourite language   ")); // 5
console.log(countWords("   Javascript is    my favourite    language   ")); // 5
