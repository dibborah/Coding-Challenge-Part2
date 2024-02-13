// Coding challenge #32: Create a function 
// that will capitalize the first letter of each 
// word in a text

// First the solution of returning the number of words in passed text

const isSeparator = (text:any): boolean => {
    const separators:any = [" ", "\n", "\r", "\t", "?", ".", "!"];
    return separators.includes(text);
}

const capitalizeWords = (text:string): any => {
    var text2 = "";
    for(var i = 0; i < text.length; i++){
        var currChr = text[i];
        var prevChr = i > 0 ? text[i - 1] : " ";
        
        if(!isSeparator(currChr) && isSeparator(prevChr)){
            currChr = currChr.toUpperCase();    
        }
        text2 += currChr;
    }
    return text2;
};

console.log(capitalizeWords("Javascript is my favourite language"));// 5
// console.log(capitalizeWords("   Javascript is my favourite language   "));



// console.log(countWords(""));// 0
// console.log(countWords("Ja v"));// 2
// console.log(countWords("Javascript is my favourite language"));// 5

// console.log(countWords(" Ja v hihhdc"));// 3
// console.log("Answer =>",countWords("   Javascript is my favourite language   "));// 5
// console.log(countWords("   Javascript is    my favourite    language   "));// 5

console.log(capitalizeWords("Javascript is my favourite language"));


export {};