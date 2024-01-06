// Coding challenge #5: Calculate the sum of numbers from 1 to 10

// using reducers

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumAllNum =  arr1.reduce((total, num)=>{
//     return total + num
// });

// console.log(sumAllNum);

// using for loop :

// let num = 0;
// for (let i = 1; i < 11; i++) {
//     num = num+i;
// }
// console.log(num);

// Same as above just slight difference :
let num = 0;
for (let i = 1; i < 11; i++) {
    num += i;
}
console.log(num);

//Note : difference += and =+
// num += i
// num = num + i;

// num =+ i
// num = +i
// num = i
