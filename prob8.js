// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30 

// my solution

// let oddNum = [];
// for (let i = 10; i <= 30; i++) {// uncontrolled increment 
//     if (i % 2 !== 0) {
//         oddNum.push(i);
//     }
// }

// const sumOfOdd = oddNum.reduce((i,j)=>{
//     return i+j;
// });
// console.log(sumOfOdd);
// console.log(oddNum);

let sum = 0;// Here below in incremented i+2 => this is wrong
// increment as  i +=2 //This is right
for (let i = 11; i < 31; i += 2) {// controlled increment so no need to put conditional statements
    sum += i;
}
console.log(sum);