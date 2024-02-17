// Coding challenge #34: Create a function that will 
// return an array with words inside a text

// const isSeparator = () => {
//     // separator code
// }

// This is my Solution which has some bugs
// const arrayWords = (text: string): Array<string> => {
//     const resultArr = text.split(/,\s*|\s+|\s,+/g);
//     return resultArr;
// }

// const arrayWords = (text:string): Array<string> => {

//     return [text];
// }

// Soltion by ChatGPT
function extractWords(text) {
    // Use a regular expression to split the text into words
    const words = text.match(/\b\w+\b/g);   
    
    // Return the array of words
    return words || []; // Return an empty array if no words are found
}

// Test the function
const text = "Testing, my arrayWords ,problem (solution of), to an impact";
const wordsArray = extractWords(text);
console.log(wordsArray);

// console.log(arrayWords("Testing, my arrayWords ,problem (solution) to an impact"));


// match method searches for a match in a regular expression