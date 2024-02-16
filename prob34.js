"use strict";
// Coding challenge #33: Calculate the sum of numbers 
// received in a comma delimited string
// Object.defineProperty(exports, "__esModule", { value: true });

var input = "1,2,3,4,5,4.90"; // 15
var sumNumberString = function (input) {
    var sepInput = input.split(",");
    var result = 0;
    for (var _i = 0, sepInput_1 = sepInput; _i < sepInput_1.length; _i++) {
        var i = sepInput_1[_i];
        // result += parseInt(i);
        result += parseFloat(i);
    }
    return result;
};
console.log(sumNumberString(input));
