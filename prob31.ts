// Coding challenge #30a: Create a function that will add two indefinite size numbers.

// Requirements: Only positive numbers will be
// used and will be provided to the function as strings.
// The result should be also returned as a string.

// The dumbest solution in the world by me: STAY FOOLISH STAY HUNGRY

// const addIndefiniteNumbers = (num1: string, num2: string): string => {
//   const addedNum: string = num1 + num2;
//   return addedNum;
// };

// console.log(addIndefiniteNumbers("12345", "289"), "mySolution");

// CHATGPT

// function addIndefiniteSizeNumbers(num1: string, num2: string): string {
//   let result = '';
//   let carry = 0;

//   // Make the lengths of num1 and num2 equal by padding with zeros
//   while (num1.length < num2.length) {
//     num1 = '0' + num1;
//   }

//   while (num2.length < num1.length) {
//     num2 = '0' + num2;
//   }
//   console.log(num1);
//   console.log(num2);

//   // Iterate through the digits from right to left
//   for (let i = num1.length - 1; i >= 0; i--) {
//     const digit1 = parseInt(num1[i]);
//     const digit2 = parseInt(num2[i]);

//     // Add digits and the carry from the previous iteration
//     const sum = digit1 + digit2 + carry;

//     // Update the carry for the next iteration
//     carry = Math.floor(sum / 10);

//     // Update the result string with the current digit
//     result = (sum % 10) + result;
//   }
//   console.log(result, 'Result');

//   // If there's a carry left after the loop, add it to the result
//   if (carry > 0) {
//     result = carry + result;
//   }

//   return result;
// }

// // Example usage:
// // const sum = addIndefiniteSizeNumbers('12345678901234567890', '98765432109876543210');
// // console.log(sum); // Outputs: 111111111011111111100

// const sum = addIndefiniteSizeNumbers('12345', '289');
// // console.log(sum);

// export {};

// // var n1 = "2909034221912398942349";
// // var n2 = "1290923909029309499";

// SOLUTION BY SHASHWATH BHAI

// function addLargeNumbers(num1, num2) {
//   // Convert the input strings to arrays of digits
//   let arr1 = num1.split('').map(Number);  // O/P WILL LOOK LIKE THIS [7,7]
//   let arr2 = num2.split('').map(Number); // O/P WILL LOOK LIKE THIS [8,8]

//   // Make the arrays the same length by adding leading zeros
//   while (arr1.length < arr2.length) {
//       arr1.unshift(0);
//   }
//   while (arr2.length < arr1.length) {
//       arr2.unshift(0);
//   }
//   // these two above while loop helps us achive this
//   //   0012  //if num1  was 12  then we will add those 0's(basicaaly Make the arrays the same length)
//   // + 4567
//   // ------
//   //   4690

//   // Initialize variables for the result and carry
//   // since in basic maths u may get carry values sometimes so add those number we will have a variable to store that value (i.e carry)
//   // result variable gives you the result
//   let result:any = [];
//   let carry = 0;

//   // Iterate through the arrays from right to left
//   for (let i = arr1.length - 1; i >= 0; i--) {   //for looping throgh the two array of numbers
//       let sum:any = arr1[i] + arr2[i] + carry;     //addition formula
//       result.unshift(sum % 10);  // Add the digit to the beginning of the result array
//       carry = Math.floor(sum / 10);  // Update the carry
//   }

//   // The above for loop is designed to iterate through the arrays from right to left because,
//   // in the context of addition, it is a common practice to start adding from the rightmost digits ,
//   // and move towards the leftmost digits.

//   // If there's still a carry after the loop, add it to the result then the above for loop will run again if carry is present
//   if (carry > 0) {
//       result.unshift(carry);
//   }

//   //once all the addition calculation is done then the final  result array is Converted   to a string and returned
//   return result.join('');
// }

// // Example usage:
// let num1 = "2909034221912398942349";
// let num2 = "1290923909029309499";
// let result = addLargeNumbers(num1, num2);
// console.log(result);

// Doing the chatGPT solution

// const addIndefiniteNumbers = (num1: string, num2: string): string => {
//   let result = "";
//   let carry = 0;

//   while (num1.length < num2.length) {
//     num1 = "0" + num1;
//   }
//   while (num2.length < num1.length) {
//     num2 = "0" + num2;
//   }
//   console.log(num1);
//   console.log(num2);

//   for (let i = num1.length - 1; i >= 0; i--) {
//     let digit1 = parseInt(num1[i]);
//     let digit2 = parseInt(num2[i]);

//     let sum = digit1 + digit2 + carry;

//     carry = Math.floor(sum / 10);
//     result = (sum % 10) + result;
//   }

//   if (carry > 0) {
//     return result = carry + result;
//   }

//   return result;
// };

// console.log(addIndefiniteNumbers("2909034221912398942349", "1290923909029309499"), "Solution by Dib");

// Solution provided by Shashwath Bhai

// By using this solution two new method I learned 
// .map(Number) To convert to numbers
// .join() to join the arrays into a single string where a seperator can also be provided

const addIndefiniteNumbers = (num1:string, num2:string): string => {
  
  let arr1 = num1.split("").map(Number);
  let arr2 = num2.split("").map(Number);

  while(arr1.length< arr2.length){
    arr1.unshift(0);
  }

  while(arr2.length< arr1.length){
    arr2.unshift(0);
  }

  let result:any = [];
  let carry = 0;

  for (let i = arr1.length - 1; i >= 0; i--) {
    let sum = arr1[i] + arr2[i] + carry;
    result.unshift(sum % 10);
    carry = Math.floor(sum / 10);
  }

  if(carry>0){
    result.unshift(carry);
  }

  result = result.join("");

  return result;
}

console.log(addIndefiniteNumbers("2909034221912398942349", "1290923909029309499"));

export {};
