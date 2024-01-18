"use strict";
//   Coding challenge #25
// Object.defineProperty(exports, "__esModule", { value: true });
// Create a function that will receive two arrays of numbers as arguments
// and return an array composed of all the numbers that are either
// in the first array or second array but not in both
// arguments => data
// parameter => variable
// [number,boolean, string]=> tuple
var arr1 = [1, 2, 3, 5,];
var arr2 = [6, 5, 3, 4, 1];
// Resultant Array = [2 , 6, 4];
var uniqueArray = function (arr1, arr2) {
    var arr = [];
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var i = arr1_1[_i];
        if (!arr2.includes(i)) {
            arr.push(i);
        }
    }
    for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
        var i = arr2_1[_a];
        if (!arr1.includes(i)) {
            arr.push(i);
        }
    }
    return arr;
};
console.log(uniqueArray(arr1, arr2));
