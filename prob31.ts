// Coding challenge #30a: Create a function that will add two indefinite size numbers.

// Requirements: Only positive numbers will be
// used and will be provided to the function as strings.
// The result should be also returned as a string.

// const addIndefiniteNumbers = (num1: string, num2: string): string => {
//   const addedNum: string = num1 + num2;
//   return addedNum;
// };

// console.log(addIndefiniteNumbers("18734773743543543300", "5008983763325455660"));

// Solution by Website

const n1 = "2045678";
const n2 = "16322";


const addIndefiniteNumbers = (n1, n2) => {
  const maxSize = Math.max(n1.length, n2.length);

  const s1 = n1.padStart(maxSize, "0");
  const s2 = n2.padStart(maxSize, "0");
  
  let s = "";
  let carry = 0;
  for(let i = maxSize - 1; i >= 0; i--){
    let digit1 = parseInt(s1[i]);// 7
    console.log(digit1, "digit1");    
    let digit2 = parseInt(s2[i]);// 2
    console.log(digit2, "digit2");    
    // let sum = digit1 + digit2 + carry; // 9
    let sum = digit1 + digit2; // 9
    console.log(sum);
    let digitSum = sum % 10; // 9
    console.log(digitSum,"digitSum");
    carry = sum >= 10 ? 1 : 0
    console.log(carry, "Carry after putting conditional");
  }
  
}
const sum = addIndefiniteNumbers(n1, n2);

export {};

