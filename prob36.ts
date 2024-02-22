// Create a function to convert
// a CSV text to a “bi-dimensional” array

// Example usage
const csv = `Name,Age,Email
John,25,john@example.com
Alice,30,alice@example.com
Bob,35,bob@example.com`;

// const getWords(text)
// text => line

// const separatorWhenSpace = (text: string) => {
//   const separator: any = [" ", "\t"];
//   return separator.includes(text);
// };

// const separatorWhenComma = (text: string) => {
//   const separator: any = [","];
//   return separator.includes(text);
// };

// const csvToArray = (text: string): string[] => {
//   const arr: any = [];
//   for (let i = 0; i < text.length; i++) {
//     if (separatorWhenSpace(text)) {
//       arr.push(text[i]);
//     }
//   }
//   return arr;
// };

// console.log(csvToArray(csv));

// checkout push in main branch

// Coding challenge #32: Create a function
// that will capitalize the first letter of each
// word in a text

const isSeparator = (text: string): boolean => {
  const separators: any = [" ", ",", "\t", "\n"];
  return separators.includes(text);
};

const testText = "javascript is my favourite language not as a programming language but as a general language";

// const capitalizeWords = (text: string): string => {
//   let arr =  '';
//   for (let i = 0; i < text.length; i++) {
//     let curr = text[i];
//     const prevCurr = i > 0 ? text[i - 1] : " ";
//     if(!isSeparator(curr) && isSeparator(prevCurr)) {
//       curr = curr.toUpperCase();
//     }
//     arr += curr;
//   }
//   return arr;
// };

// console.log(capitalizeWords(testText));



// Coding challenge #31-a: Create a function
// that will return the number of words in a text

const getWordsNumber = (text:string): number => {

  return 0;
}

// Coding challenge #34: Create a function that will
// return an array with words inside a text
