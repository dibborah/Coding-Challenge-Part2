// Create a function to convert
// a CSV text to a “bi-dimensional” array

// My Solution

// Example usage
// const exampleCSV = `Name,Age,Email
// John,25,john@example.com
// Alice,30,alice@example.com
// Bob,35,bob@example.com`;

// // const isSeparator = (text: string): boolean => {
// //   const separator: any = [","];
// //   return separator.includes(text);
// // };

// const newLineSeparator = (text: string): boolean => {
//   const separators: any = ["\n"];
//   return separators.includes(text);
// };
// const commaSeparator = (text: string): boolean => {
//   const separators: any = [","];
//   return separators.includes(text);
// }
// const csvToArraySingleDimension = (csv: string) => {
//   let arr: any = [];
//   let doNotEnter = true;
//   let startWord = 0;
//   for (let i = 0; i <= csv.length; i++) {
//     let c = i < csv.length ? csv[i] : "\n";
//     if (!newLineSeparator(c) && doNotEnter) {
//       startWord = i;
//       doNotEnter = false;
//     }
//     if (newLineSeparator(c) && !doNotEnter) {
//       arr.push(csv.substring(startWord, i));
//       doNotEnter = true;
//     }
//   }
//   return arr;
// };

// console.log(csvToArraySingleDimension(exampleCSV));

// const resultArray = csvToArraySingleDimension(exampleCSV);

// const csvToArrayBiDimension = (csv: Array<string>) => {
//   let arr_ = csvToArraySingleDimension(exampleCSV);
//   let parentArray: any = [];
//   arr_.map((item: any, index: number)=> {
//     return (item, index) => {
//         for(let i = 0; i <= item.length;i++) {
//           let c = i < item.length ? item[i] : ",";
//           let startWord;
//           let doNotEnter = true;
//           if(!commaSeparator(c) && doNotEnter){
//             startWord = i
//             doNotEnter = false;
//           }
//           if(commaSeparator(c) && !doNotEnter) {
//             parentArray.push(startWord, i);
//             doNotEnter= true;
//           }
//         }
//         return parentArray;
//     }
//   })
// };

// console.log(csvToArrayBiDimension(resultArray));

// Solution by ChatGPT

// const csvText  = `Name, Age, City
// John, 30, New York
// Alice, 25, Los Angeles`;

// Example usage

const csvText = `Name,Age,Email
John,25,john@example.com
Alice,30,alice@example.com
Bob,35,bob@example.com`;

function csvToArray(csvText, delimiter=',') {
  // Split the CSV text into an array of lines
  const lines = csvText.split('\n');

  // Initialize the result array
  const result: any = [];

  // Iterate over each line in the CSV text
  lines.forEach(line => {
      // Split the line into an array of values using the specified delimiter
      const values = line.split(delimiter);

      // Add the array of values to the result array
      result.push(values);
  });

  return result;
}

const csvArray = csvToArray(csvText);

console.log(csvArray);

export {};
