// Coding challenge #31-a: Create a function 
// that will return the number of words in a text

// const countText = (text: string): number => {
//     let word: string = text.trim();
//     if(!text.trim()){
//         return 0;
//     }
//     let wordArr: any = [];
//     wordArr = word.split(/\s+/);
//     return wordArr.length;
// }

// console.log(countText("   Most important ? thing in !! programming   ")); // Output : 5
// console.log(countText("Problem Solving!!!"));
// console.log(countText(""));

// Two bugs :
// 1. "" empty strings.
// 2. Extra spaces in a middle of a sentence.

// Website Solution 1:

// function isSeparator(c: any){
//     var seperators: any = [" ","\t", "\n", "\r", ",", ";", ".", "!", "?" ];
//     return seperators.includes(c);
// }

// function countWords(text: any){
//     var wasSeparator = true;
//     var words = 0;

//     for(var c of text){
        
//         // if current character is not seperator then advance and
//         // set that the previous character was seperator
        
//         if(isSeparator(c)){
//             wasSeparator = true;
//             continue;
//         }
        
//         // if current character is not separator
//         // ... but if previous was separat
        
//         if(wasSeparator){
//             words++;
//             console.log(c, "c", words, "Words");        
//             wasSeparator = false;
//         }
//     }
//     return words;
// }

// console.log(countWords("Javascript is cool"));

// console.log(countWords(""));
// console.log(countWords("           "));
// console.log(countWords("Javascript!!!   "));
// console.log(countWords("     Javascript"));
// console.log(countWords("   Javascript is cool   "));
// console.log(countWords("  I like to learn Javascript with codeguppy  "));
// console.log(countWords("  I like    to learn Javascript      with codeguppy  "));



export {};
  