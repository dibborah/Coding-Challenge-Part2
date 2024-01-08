// Create a function that will return a Boolean
// specifying if a number is prime

// Prime number => Starting with 2  numbers which are not a product of two smaller natural numbers

// This below is just one of the possible solutions of find if Prime or not
// Find and do other possible prime number solutions 

const isPrime = (num: number): boolean => {
    if(num<2){
        return false;
    }
    if(num===2){
        return true;
    }
    let maxNum:number = Math.sqrt(num);
    for(let i = 2; i<= maxNum;i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
};

const isPrimeResult = isPrime(9);
console.log(isPrimeResult);
// Issues in 2 3 5 7
// Mera dhyan kaha hain
// Mera dhayan nahi tha 
// Agar hota ho mujhe 3 ya phir worst 4 main h pata chal jata h kuch error hain
// Ye .ts file read ya compile h nhi ho raha tha

export {};