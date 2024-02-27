"use strict";
// Create a function to convert
// a CSV text to a “bi-dimensional” array
// Object.defineProperty(exports, "__esModule", { value: true });
// Example usage
var exampleCSV = "Name,Age,Email\nJohn,25,john@example.com\nAlice,30,alice@example.com\nBob,35,bob@example.com";
// const isSeparator = (text: string): boolean => {
//   const separator: any = [","];
//   return separator.includes(text);
// };
var newLineSeparator = function (text) {
    var separators = ["\n"];
    return separators.includes(text);
};
var commaSeparator = function (text) {
    var separators = [","];
    return separators.includes(text);
};
var csvToArraySingleDimension = function (csv) {
    var arr = [];
    var doNotEnter = true;
    var startWord = 0;
    for (var i = 0; i <= csv.length; i++) {
        var c = i < csv.length ? csv[i] : "\n";
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
// console.log(csvToArraySingleDimension(exampleCSV));
var resultArray = csvToArraySingleDimension(exampleCSV);
var csvToArrayBiDimension = function (csv) {
    var arr_ = csvToArraySingleDimension(exampleCSV);
    var parentArray = [];
    arr_.map(function (item, index) {
        return function (item, index) {
            for (var i = 0; i <= item.length; i++) {
                var c = i < item.length ? item[i] : ",";
                var startWord = void 0;
                var doNotEnter = true;
                if (!commaSeparator(c) && doNotEnter) {
                    startWord = i;
                    doNotEnter = false;
                }
                if (commaSeparator(c) && !doNotEnter) {
                    parentArray.push(startWord, i);
                    doNotEnter = true;
                }
            }
            return parentArray;
        };
    });
};
console.log(csvToArrayBiDimension(resultArray));
