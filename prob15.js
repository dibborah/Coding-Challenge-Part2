// Print the first 10 Fibonacci numbers without using recursion.
// Reminder:
// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n-2)
// F(2) = F(2-1=>1) + F(2-2=>0);

// Output: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55;

//  = 0
// fact = 0 + 1 => 1
// fact = 1 + 2=> 3
// fact = 3 + 3 => 6

// This is one way of solving the fibonacci problem

// let fact = 0;
// console.log(0);
// console.log(1);
// for (let i = 1; i < 10; i++) {
//   fact = fact + i;
//   console.log(fact);
// }

// Another way of solving the fibonacci problem

let f0 = 0;
console.log(f0);
let f1 = 1;
console.log(f1);

for (let i = 0; i < 8; i++) {
  let fi = f0 + f1;
  console.log(fi);
  f0 = f1;
  f1 = fi;
}

// Understanding RECURSION

// const factorial = (num) => {
//   if(num<=1){
//     return 1;
//   }
//   return num * factorial(num - 1);
// };

// The recursion pattern is explained below
// All the functions gets opened one by one
// Let say: 5
// factorial(5) => 5 * factorial(4)
//              => 5 * (4 * factorial(3))
//              => 5 * 4 * (3 * factorial(2))
//              => 5 * 4 * 3 * (2 * factorial(1))
//              => 5 * 4 * 3 * 2 * (1) => Solution

// const result = factorial(5);
// console.log(result);
