// Coding challenge #24
// Create a function that will merge two arrays and return the result as
// a new array

const arr1 = [1, 2, 3,100,200];
const arr2 = [4, 5, 6, 7, 8, 765];

const mergeArrays = (arr1, arr2) => {
  const resultArr:any = [];
  for (let i of arr1){
    resultArr.push(i);    
  }
  for(let i of arr2){
    resultArr.push(i);
  }
  return resultArr;
};

console.log(mergeArrays(arr1,arr2));

export {};