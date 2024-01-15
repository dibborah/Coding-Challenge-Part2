// Reverse an array

// 1st way of solving the problem (My way)
// const arr = [1, 2, 3];
// const length = arr.length;

// const reverseArray = (arr) => {
//   let reverseArr: any = [];
//   for (let i = 0; i < length; i++) {
//     const digit = arr.shift();
//     reverseArr.unshift(digit);
//   }
//   return reverseArr;
// };

// const result = reverseArray(arr);
// console.log(result);

// export {};

// 2nd approach(By Website)

let arr1 = [1, 2, 3];
let arr2:any = [];

const reverseArray = (arr1) => {
  for (let i = arr1.length - 1; i >= 0; i--) {
    arr2.push(arr1[i]);
  }
  return arr2;
};
const result = reverseArray(arr1);
console.log(result);

export {};
// unshift 1st add & push last add
// shift 1st remove & pop last remove

// Notes I have made by solving the problem using my way(1st approach):

// How I solved my problem
// I got to know why the issue was happening
// And I got the why when I console all the values of i in the for loop
// Then I got to know that i was not printing till the length of the given array
// Than I debbug why the i was not printing till the length since it turn it should
// Then I got to know that the length of i was shortening since I was using the pop() method
// This step by step approach of understanding the problem and breaking every part of the problem
// ... and understanding each part one step at a time leads to the solution of the problem as I got now
