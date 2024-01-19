"use strict";
// Coding challenge #26
// Object.defineProperty(exports, "__esModule", { value: true });
// Create a function that will receive two arrays and will return an array
// with elements that are in the first array but not in the second
var arr1 = [1, 4, 6, 8];
var arr2 = [1, 3, 6, 2];
// ouput = 4, 8
var mergeFirstArray = function (array1, array2) {
    var arr = [];
    for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
        var i = array1_1[_i];
        if (!array2.includes(i)) {
            arr.push(i);
        }
    }
    return arr;
};
console.log(mergeFirstArray(arr1, arr2));
