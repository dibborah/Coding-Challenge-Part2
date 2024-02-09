// Coding challenge #32: Create a function 
// that will capitalize the first letter of each 
// word in a text

// First the solution of returning the number of words in passed text

const isSeparator = (text:any): boolean => {
    const separator:any = ["", " ", "\n", "\r", "\t", "?", ".", "!"];
    return text.includes(separator)
}

const countWords = (text:string): number => {
    let words = 0;
    let wasSeparator = true;

    // character a words + 1
    // once character increases the consecutive number should not be increase word count

    // First if empty

    // 0 => j

    for(let i = 0 ; i < text.length; i++ ){
        if(isSeparator(text[i])){
            wasSeparator = true;
        }
        if(wasSeparator){
            words++;
            wasSeparator = false;
        }
    }

    return words;
};


console.log(countWords(""));
console.log(countWords("Ja v"));
// console.log(countWords("Javascript is my favourite language"));
// console.log(countWords("   Javascript is my favourite language   "));
// console.log(countWords("   Javascript is    my favourite    language   "));


export {};