// Coding challenge #32: Create a function 
// that will capitalize the first letter of each 
// word in a text

// First the solution of returning the number of words in passed text

const isSeparator = (text:any): boolean => {
    const separators:any = [" ", "\n", "\r", "\t", "?", ".", "!"];
    return separators.includes(text);
}

const capitalizeWords = (text:string): any=> {
    let words = 0;
    let wasSeparator;

    // character a words + 1
    // once character increases the consecutive number should not be increase word count

    // First if empty

    // 0 => j

    for(let i = 0 ; i < text.length; i++ ){
        // console.log(text[i], "Some Character");            
        if(isSeparator(text[i])){
            wasSeparator = true;
            continue;
        }
        if(wasSeparator){
            // words++;
            text[i].toUpperCase();
            // console.log("Word is increased by 1");            
            wasSeparator = false;
        }
    }

    return text;
};


// console.log(countWords(""));// 0
// console.log(countWords("Ja v"));// 2
// console.log(countWords("Javascript is my favourite language"));// 5

// console.log(countWords(" Ja v hihhdc"));// 3
// console.log("Answer =>",countWords("   Javascript is my favourite language   "));// 5
// console.log(countWords("   Javascript is    my favourite    language   "));// 5

console.log(capitalizeWords("Javascript is my favourite language"));


export {};