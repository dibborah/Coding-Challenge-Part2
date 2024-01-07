// Create a function that will find the nth Fibonacci number using recursion.
// Reminder:
// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n-2)

// Finding the first 10 Fibbonacci number using recursion

// let f_0 = 0;
// console.log(f_0);
// let f_1 = 1;
// console.log(f_1);
// const findFibonnaci = (): number=> {
//     let fi = f_0 + f_1;
//     console.log(fi);
//     f_0 = f_1;
//     f_1 = fi
//     if(fi===34){
//         return 0;
//     }
//     return findFibonnaci();
// };

// findFibonnaci();

// Main Question

// Finding the nth fibbonacci number using recursion

const findNthFibbonacci = (num: number): number => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return findNthFibbonacci(num - 1) + findNthFibbonacci(num - 2);
};

const result = findNthFibbonacci(0);
console.log(result);

export {};
