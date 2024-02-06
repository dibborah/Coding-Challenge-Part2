// Coding challenge #31-a: Create a function 
// that will return the number of words in a text

const countText = (text: string): number => {
    let word: string = text.trim();
    if(!text.trim()){
        return 0;
    }
    let wordArr: any = [];
    wordArr = word.split(/\s+/)
    return wordArr.length;
}

console.log(countText("   Most important thing in programming   ")); // Output : 5
console.log(countText("Problem Solving!!!"));
console.log(countText(""));





// Two bugs :
// 1. "" empty strings.
// 2. Extra spaces in a middle of a sentence.
export {}
  