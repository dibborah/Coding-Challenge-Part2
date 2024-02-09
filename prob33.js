"use strict";
// Coding challenge #32: Create a function 
// that will capitalize the first letter of each 
// word in a text
// Object.defineProperty(exports, "__esModule", { value: true });
// First the solution of returning the number of words in passed text
var isSeparator = function (text) {
    var separator = ["", " ", "\n", "\r", "\t", "?", ".", "!"];
    return text.includes(separator);
};
var countWords = function (text) {
    var words = 0;
    var wasSeparator = true;
    // character a words + 1
    // once character increases the consecutive number should not be increase word count
    // First if empty

    // 0 => I  1 => " " 2 => a 3 =>m // I am

    for (var i = 0; i < text.length; i++) {
        if (!isSeparator(text[i])){
            wasSeparator = true;
        }
        if (wasSeparator){
            words++;
            wasSeparator = false;
        }
    }
    return words;
};

console.log(countWords(""));
console.log(countWords("Javascript"));
console.log(countWords("Hii"));
