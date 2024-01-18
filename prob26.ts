//   Coding challenge #25

// Create a function that will receive two arrays of numbers as arguments
// and return an array composed of all the numbers that are either
// in the first array or second array but not in both

// arguments => data
// parameter => variable
// [number,boolean, string]=> tuple

let arr1 = [1, 2, 3, 5,];
let arr2 = [6, 5, 3, 4, 1];
// Resultant Array = [2 , 6, 4];

const uniqueArray = (arr1: Array<number>,arr2: Array<number>): Array<number> => {
  const arr:any = [];
  for(let i of arr1){
    if(!arr2.includes(i)){
      arr.push(i);
    }
  }
  for(let i of arr2){
    if(!arr1.includes(i)){
      arr.push(i);
    }
  }
  return arr;
};

console.log(uniqueArray(arr1, arr2));

// Checking includes method

// Learning and Checking includes method with number array

// let arr1 = [1, 2, 4, 5, 100];
// const checkIncludes = (arr1) => {
//   let arr = [];
//   const result = arr1.includes(4);
//   console.log(result);
// };

// checkIncludes(arr1);

// Learning and Checking includes method with string array

// let arr1 = ["dragon", "lion", "tiger", "griffin", "leopard", "wolf"];
// const checkIncludes = (arr1) => {
//   let arr = [];
//   const result = arr1.includes("dragon");
//   console.log(result);
// };

// checkIncludes(arr1);

export {};
