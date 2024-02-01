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
// const addIndefiniteNumbers = (n1, n2) => {
//   const maxSize = Math.max(n1.length, n2.length);
//   const s1 = n1.padStart(maxSize, "0");
//   const s2 = n2.padStart(maxSize, "0");
//   let s = "";
//   let carry = 0;
//   for(let i = maxSize - 1; i >= 0; i--){
//     let digit1 = parseInt(s1[i]);// 7
//     let digit2 = parseInt(s2[i]);// 2
//     // let sum = digit1 + digit2 + carry; // 9
//     let sum = digit1 + digit2; // 9
//     let digitSum = sum % 10; // 9
//     carry = sum >= 10 ? 1 : 0
//     s = digitSum.toString() + s;
//   }
//   if(carry> 0){
//     s = carry + s;
//   }
//   return s;
// }
// const n1 = "2045678";
// const n2 = "16322";
// const sum = addIndefiniteNumbers(n1, n2);
// console.log(sum);
// export {};
function addIndefiniteSizeNumbers(num1, num2) {
    var result = '';
    var carry = 0;
    // Make the lengths of num1 and num2 equal by padding with zeros
    while (num1.length < num2.length) {
        num1 = '0' + num1;
    }
    while (num2.length < num1.length) {
        num2 = '0' + num2;
    }
    // Iterate through the digits from right to left
    for (var i = num1.length - 1; i >= 0; i--) {
        var digit1 = parseInt(num1[i]);
        var digit2 = parseInt(num2[i]);
        // Add digits and the carry from the previous iteration
        var sum_1 = digit1 + digit2 + carry;
        // Update the carry for the next iteration
        carry = Math.floor(sum_1 / 10);
        // Update the result string with the current digit
        result = (sum_1 % 10) + result;
    }
    // If there's a carry left after the loop, add it to the result
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}
// Example usage:
var sum = addIndefiniteSizeNumbers('12345678901234567890', '98765432109876543210');
console.log(sum); // Outputs: 111111111011111111100
