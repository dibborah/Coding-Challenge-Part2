// Create a function to convert
// a CSV text to a “bi-dimensional” array

// Example usage
const csv = `Name,Age,Email
John,25,john@example.com
Alice,30,alice@example.com
Bob,35,bob@example.com`;

// const getWords(text)
// text => line

const separatorWhenSpace = (text: string) => {
  const separator = [" ", "\t"];
  return separator.includes(text);
};

const separatorWhenComma = (text: string) => {
  const separator = [","];
  return separator.includes(text);
};

const csvToArray = (text: string): string[] => {
  const arr: any = [];
  for (let i = 0; i < text.length; i++) {
    if (separatorWhenSpace(text)) {
      arr.push(text.substring)
    }
  }
  return [text];
};

// checkout push in main branch
