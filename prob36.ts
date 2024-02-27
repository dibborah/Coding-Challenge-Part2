// Create a function to convert
// a CSV text to a “bi-dimensional” array

// Example usage
const csv = `Name,Age,Email
John,25,john@example.com
Alice,30,alice@example.com
Bob,35,bob@example.com`;

// const isSeparator = (text: string): boolean => {
//   const separator: any = [","];
//   return separator.includes(text);
// };

const newLineSeparator = (text:string): boolean => {
  const separators:any = [" ", ",", ".", "?", "!", "\n", "\t", "\r", "(", ")"];   
  return separators.includes(text);
}
const csvToArray = (csv: string) => {
  let arr: any = [];
  let doNotEnter = true;
  let startWord = 0;
  for (let i = 0; i <= csv.length; i++) {
    let c = i < length ? csv[i] : ",";
    if (!newLineSeparator(c) && doNotEnter) {
      startWord = i;
      doNotEnter = false;
    }
    if (newLineSeparator(c) && !doNotEnter) {
      arr.push(csv.substring(startWord, i));
      doNotEnter = true;
    }
  }
  return arr;
};

console.log(csvToArray("hi boy, who are you"));
console.log(csv);


export {};
