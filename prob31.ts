// Coding challenge #30a: Create a function that will add two indefinite size numbers.

// Requirements: Only positive numbers will be
// used and will be provided to the function as strings.
// The result should be also returned as a string.

const addIndefiniteNumbers = (num1: string, num2: string): string => {
  const addedNum: string = num1 + num2;
  return addedNum;
};

console.log(addIndefiniteNumbers("18734773743543543300", "5008983763325455660"));
