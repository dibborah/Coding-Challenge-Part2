// Coding challenge #28: Calculate the sum of first 100 prime numbers

// Coding challenge #18: Print the first 100 prime numbers
// Create a function that will return a Boolean
// specifying if a number is prime

// 1. isPrime
// 2. Print 1st 100 Prime numbers
// 3. Sum of 1st 100 Prime numbers

// 2, 3, 5, 7, 11

// 1. isPrime

const isPrime = (num: number): boolean => {
    if(num < 2){
        return false;
    }
    if(num === 2){
        return true;
    }
    if(num > 2){
        const maxNumber:number = Math.sqrt(num);// 3 = 1.7 //  9 = 3
        for(let i = 2; i <= maxNumber;i++){
            if(num % i === 0){
                return false;
            }
        }
    }
    return true;
}

// console.log(isPrime(14));

// 2. Print 100 Prime numbers

const printPrimes = (num:number):number => {
    let arr:any = []// let num = 100
    let p = 2;
    for(let i = 0; i < num;){
        if(isPrime(p)){
            arr.push(p); 
            i++;
        }
        p++;
    }
    return arr;
}

console.log(printPrimes(100));

