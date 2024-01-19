// Coding challenge #26

// Create a function that will receive two arrays and will return an array
// with elements that are in the first array but not in the second

const arr1 = [1, 4, 6, 8];
const arr2 = [1, 3, 6, 2];
// ouput = 4, 8

const mergeFirstArray = (array1:Array<number>, array2:any) => {
  const arr: any = [];
  for (let i of array1) {
    if(!array2.includes(i)){
        arr.push(i);
    }    
  }
  return arr;
};

console.log(mergeFirstArray(arr1, arr2));

export {};
