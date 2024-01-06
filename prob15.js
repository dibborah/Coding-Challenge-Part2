// Print the first 10 Fibonacci numbers without using recursion.
// Reminder:
// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n-2)

// Demo commit to check commit on github

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
