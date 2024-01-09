// Calculate the sum of digits
// of a positive integer number

const sumDigit = (num: number): number => {
  let s = num.toString();
  let sum = 0;
  for (let char of s) {
    let digit = parseInt(char, 10);
    sum += digit;
  }
  return sum;
};

const result = sumDigit(123);
console.log(result);

export {};
