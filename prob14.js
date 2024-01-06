// Coding challenge #13: Find the maximum number in an array of numbers 

// const arr = [5,56,78,2,99];
// const arr = [500,56,78,2,99];
const arr = [500,56,780,2,99];

const maxNum = (anyArray) => {
    let num = anyArray[0];
    for(let i = 0; i<anyArray.length;i++){
        if (anyArray[i]> num) {
            num = anyArray[i];          
        }
    }
    return num;
}

const result = maxNum(arr);
console.log(result);