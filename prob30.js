"use strict";
// Coding challenge #29:
// Print the distance between the first 100 prime numbers
// Object.defineProperty(exports, "__esModule", { value: true });
// for ex .
// let's say :
// 1. 1 - 10
// primes are => 2, 3, 5, 7
//            => 0, 1, 2
// isPrime(n)
// const isPrime = (num: number): boolean => {
//   if (num < 2) {
//     return false;
//   }
//   if (num === 2) {
//     return true;
//   }
//   if (num > 2) {
//     const maxNumber: number = Math.sqrt(num); // 3 = 1.7 //  9 = 3
//     for (let i = 2; i <= maxNumber; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
// const distancePrime = (num:number) => {
//   let lastPrime = 2
//   let i = lastPrime + 2;
//   for(let p = 0; p < num; ){
//     if(isPrime(i)){
//       console.log(`${i - lastPrime} is the distance between ${i} and ${lastPrime}` );
//       p++;
//       lastPrime = i;
//     }
//     i++;
//   }
// }
// distancePrime(10);
// distancePrime Solution by chatGPT :
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
//   function findPrimes(count) {
//     const primes = [];
//     let currentNumber = 2;
//     while (primes.length < count) {
//       if (isPrime(currentNumber)) {
//         primes.push(currentNumber);
//       }
//       currentNumber++;
//     }
//     return primes;
//   }
//   function calculateDistances(primes) {
//     const distances = [];
//     for (let i = 1; i < primes.length; i++) {
//       distances.push(primes[i] - primes[i - 1]);
//     }
//     return distances;
//   }
//   // Find the first 100 prime numbers
//   const numberOfPrimes = 100;
//   const primeNumbers = findPrimes(numberOfPrimes);
//   // Calculate the distances between consecutive primes
//   const distances = calculateDistances(primeNumbers);
//   // Print the distances
//   console.log("Distances between consecutive prime numbers:");
//   console.log(distances);
// Solution by ChatGPT:
// 1. isPrime()
var isPrime = function (num) {
    if (num <= 1)
        return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
};
// Find Primes
var findPrimes = function (num) {
    var primes = [];
    var currentNumber = 2;
    while (primes.length < num) {
        if (isPrime(currentNumber)) {
            primes.push(currentNumber);
        }
        currentNumber++;
    }
    return primes;
};
// calculatePrimesDistance 
var numberOfPrimes = 100;
var primes = findPrimes(numberOfPrimes);
var calculatePrimesDistance = function (primes) {
    var distance = [];
    for (var i = 1; i < primes.length; i++) {
        distance.push(primes[i] - primes[i - 1]);
    }
    return distance;
};
var distance = calculatePrimesDistance(primes);
// Consoling the distance between primes
console.log("Distance between consecutive prime numbers are");
console.log(distance);
