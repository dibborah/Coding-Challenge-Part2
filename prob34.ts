// Coding challenge #33: Calculate the sum of numbers 
// received in a comma delimited string

const input = "1,2,3,4,5" // 15
const sumNumberString = (input: string): number => {
    const sepInput = input.split(",");
    let  result = 0;
    for (let i of sepInput){
        result += parseInt(i);        
    }
    return result;
}

console.log(sumNumberString(input));

export {};

