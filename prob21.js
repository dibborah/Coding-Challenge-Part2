"use strict";
// Coding challenge #20
// Rotate an array to the left 1 position
// Object.defineProperty(exports, "__esModule", { value: true });
var arr = [1, 2, 3];
console.log(arr);
function rotateArray(arr) {
    var removed = arr.shift();
    arr.push(removed);
    console.log(arr);
}
rotateArray(arr);
