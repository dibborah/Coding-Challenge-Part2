"use strict";
// Coding challenge #30a: Create a function that will add two indefinite size numbers.
// Object.defineProperty(exports, "__esModule", { value: true });
// Requirements: Only positive numbers will be
// used and will be provided to the function as strings.
// The result should be also returned as a string.
// const addIndefiniteNumbers = (num1: string, num2: string): string => {
//   const addedNum: string = num1 + num2;
//   return addedNum;
// };
// console.log(addIndefiniteNumbers("18734773743543543300", "5008983763325455660"));
// Solution by Website
var n1 = "2045678";
var n2 = "16322";
var addIndefiniteNumbers = function (n1, n2) {
    var maxSize = Math.max(n1.length, n2.length);
    var s1 = n1.padStart(maxSize, "0");
    var s2 = n2.padStart(maxSize, "0");
    var s = "";
    var carry = 0;
    for (var i = maxSize - 1; i >= 0; i--) {
        var digit1 = parseInt(s1[i]); // 7
        console.log(digit1, "digit1");
        var digit2 = parseInt(s2[i]); // 2
        console.log(digit2, "digit2");
        // let sum = digit1 + digit2 + carry; // 9
        var sum_1 = digit1 + digit2; // 9
        console.log(sum_1);
        var digitSum = sum_1 % 10; // 9
        console.log(digitSum, "digitSum");
        carry = sum_1 >= 10 ? 1 : 0;
        console.log(carry, "Carry after putting conditional");
    }
};
var sum = addIndefiniteNumbers(n1, n2);
