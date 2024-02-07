// Coding challenge #31-a: Create a function 
// that will return the number of words in a text

// const countText = (text: string): number => {
//     let word: string = text.trim();
//     if(!text.trim()){
//         return 0;
//     }
//     let wordArr: any = [];
//     wordArr = word.split(/\s+/)
//     return wordArr.length;
// }

// console.log(countText("   Most important thing in programming   ")); // Output : 5
// console.log(countText("Problem Solving!!!"));
// console.log(countText(""));

// Two bugs :
// 1. "" empty strings.
// 2. Extra spaces in a middle of a sentence.


// Website Solution 1:

function countWords(text: any){
    var words = 0;

    if(text.length > 0 && !isSeparator(text[0])){
        words++;
    }

    for(let i = 1; i< text.length ; i++){

        var currChr = text[i];
        var prevChr = text[i - 1];

        if(!isSeparator(currChr && isSeparator(prevChr))){
           words++; 
        }
    }
    return words;
}

function isSeparator(c: any){
    var seperators: any = [" ","\t", "\n", "\r", ",", ";", ".", "!", "?" ];
    return seperators.includes(c);
}

console.log(countWords(""));
console.log("           ");
console.log("Javascript!!!   ");
console.log("     Javascript");
console.log("   Javascript is cool   ");
console.log("  I like to learn Javascript with codeguppy");






export {}
  