// Coding challenge # 19: Create a function that will return in an array the first
// "nPrimes" prime numbers greater than a number "startAt"
var isPrime = function (num) {
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
var nPrimes = function (num, startAt) {
    var arr = [];
    var i = startAt;
    var n = 0;
    while (n < num) {
        if (isPrime(i)) {
            // console.log(i);
            arr.push(i);
            n++;
        }
        i++;
    }
    return arr;
};
console.log(nPrimes(10, 30));
