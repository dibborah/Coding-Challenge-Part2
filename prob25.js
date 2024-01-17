"use strict";
// Coding challenge #24
// Create a function that will merge two arrays and return the result as
// a new array
// Object.defineProperty(exports, "__esModule", { value: true });
var arr1 = [1, 2, 3, 100, 200];
var arr2 = [4, 5, 6, 7, 8, 765];
var mergeArrays = function (arr1, arr2) {
    var resultArr = [];
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var i = arr1_1[_i];
        resultArr.push(i);
    }
    for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
        var i = arr2_1[_a];
        resultArr.push(i);
    }
    return resultArr;
};
console.log(mergeArrays(arr1, arr2));
