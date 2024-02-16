// Coding challenge #34: Create a function that will 
// return an array with words inside a text

// const isSeparator = () => {
//     // separator code
// }
const arrayWords = (text: string): Array<string> => {
    const resultArr = text.split(' ');
    return resultArr;
}

console.log(arrayWords("Testing, my arrayWords ,problem solution"));
