//   Coding challenge #25
// Create a function that will receive two arrays of numbers as arguments
// and return an array composed of all the numbers that are either
// in the first array or second array but not in both
// arguments => data
// parameter => variable
// [number,boolean, string]=> tuple

// var arr1 = [1, 2, 3, 5];
// var arr2 = [6, 7, 3, 4, 1];

// My Approach :
// arr1 ==== arr2 => arr 2, 5, 9, 6, 7, 4;
// arr2 === arr1 => arr;
// return arr;

var arr1 = [1, 2, 3, 5];
var arr2 = [6, 7, 3, 4, 1];

function compareArr1(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        console.log("hii");
        return arr1[i];
      }
    }
  }
}

var uniqueValueArray = function (array1, array2) {
  let arr3 = compareArr1(array1, array2);
  console.log(arr3);
  return arr3;
};

uniqueValueArray(arr1, arr2);
