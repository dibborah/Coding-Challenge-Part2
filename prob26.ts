//   Coding challenge #25

// Create a function that will receive two arrays of numbers as arguments
// and return an array composed of all the numbers that are either
// in the first array or second array but not in both

// arguments => data
// parameter => variable
// [number,boolean, string]=> tuple

let arr1 = [1, 2, 3, 5,];
let arr2 = [6, 7, 3, 4, 1];

// My Approach :
// arr1 ==== arr2 => arr 2, 5, 9, 6, 7, 4;
// arr2 === arr1 => arr;
// return arr;

const uniqueValueArray = (arr1: Array<number>,arr2: Array<number>): Array<number> => {
  let arr3 = arr1.filter((num)=> {
    for(let i=0; i<arr1.length;i++){
       if(arr1[i] !== arr2[i]){
        return arr1[i];
       }
    }
  })
  console.log(arr3);
  return arr3;
};

uniqueValueArray(arr1, arr2);

export {};
