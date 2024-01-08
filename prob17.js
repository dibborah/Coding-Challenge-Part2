"use strict";
// Create a function that will return a Boolean
// specifying if a number is prime
// Object.defineProperty(exports, "__esModule", { value: true });
// Prime number => Starting with 2  numbers which are not a product of two smaller natural numbers
var isPrime = function (num) {
    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    var maxNum = Math.sqrt(num);
    for (var i = 2; i <= maxNum; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
var isPrimeResult = isPrime(27);
console.log(isPrimeResult);
