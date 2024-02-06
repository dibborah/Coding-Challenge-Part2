"use strict";
// Coding challenge #31-a: Create a function 
// that will return the number of words in a text
// Object.defineProperty(exports, "__esModule", { value: true });
var countText = function (text) {
    var word = text.trim();
    if (!text.trim()) {
        return 0;
    }
    var wordArr = [];
    wordArr = word.split(/\s+/);
    return wordArr.length;
};
console.log(countText("   Most important thing in programming   ")); // Output : 5
console.log(countText("Problem Solving!!!"));
console.log(countText(""));
