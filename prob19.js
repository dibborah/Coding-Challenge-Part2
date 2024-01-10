"use strict";
// Coding challenge #18: Print the first 100 prime numbers
// Object.defineProperty(exports, "__esModule", { value: true });
var isPrime = function (num) {
    if (num <= 1) {
        return false;
    }
    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    var sq = Math.sqrt(num);
    for (var i = 2; i <= sq; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
var primes100 = function (num) {
    var i = 2;
    var n = 0;
    while (n < num) {
        if (isPrime(i)) {
            console.log(i);
            n++;
        }
        i++;
    }
};
primes100(100);
