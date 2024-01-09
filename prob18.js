"use strict";
// Calculate the sum of digits
// of a positive integer number
// Object.defineProperty(exports, "__esModule", { value: true });
var sumDigit = function (num) {
    var s = num.toString();
    var sum = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        var digit = parseInt(char, 10);
        sum += digit;
    }
    return sum;
};
var result = sumDigit(123);
console.log(result);
