"use strict";
// Create a function to convert
// a CSV text to a “bi-dimensional” array
Object.defineProperty(exports, "__esModule", { value: true });
// Example usage
var csv = "Name,Age,Email\nJohn,25,john@example.com\nAlice,30,alice@example.com\nBob,35,bob@example.com";
// const isSeparator = (text: string): boolean => {
//   const separator: any = [","];
//   return separator.includes(text);
// };
var newLineSeparator = function (text) {
    var separators = [" ", ",", ".", "?", "!", "\n", "\t", "\r", "(", ")"];
    return separators.includes(text);
};
var csvToArray = function (csv) {
    var arr = [];
    var doNotEnter = true;
    var startWord = 0;
    for (var i = 0; i <= csv.length; i++) {
        var c = i < length ? csv[i] : ",";
        if (!newLineSeparator(c) && doNotEnter) {
            startWord = i;
            doNotEnter = false;
        }
        if (newLineSeparator(c) && !doNotEnter) {
            arr.push(csv.substring(startWord, i));
            doNotEnter = true;
        }
    }
    return arr;
};
console.log(csvToArray("hi boy, who are you"));
console.log(csv);
