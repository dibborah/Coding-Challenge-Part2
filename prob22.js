"use strict";

// Rotate an array to the right 1 position
// Object.defineProperty(exports, "__esModule", { value: true });

// const arr: number[] = [1, 2, 3];
var arr = [1, 2, 3];
// Expected Result => 3,1,2
var rotateArrayRight = function (anyArr) {
    var digit = anyArr.pop();
    anyArr.unshift(digit);
    console.log(anyArr);
};
rotateArrayRight(arr);
