// // Reverse a string

// let str1 = "dibya";
// let str2;

// const reverseString = (str1) => {
//     let revStr:any = [];
//     for(let i of str1){
//         revStr.unshift(i);
//     }
//     console.log(revStr);
// };

// reverseString(str1);

const reverseString = (s) => {
    let str2 = "";
    for (let i = s.length - 1; i >= 0; i--) {
      str2 += s[i];
    }
    console.log(str2);
    
  };
  
  reverseString("missisippi");
  
  export {};
  