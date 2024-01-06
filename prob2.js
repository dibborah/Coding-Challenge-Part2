//Coding challenge #2: Print the odd numbers less than 100

for(let i = 1;i<101;i++){
    //This way
    // if (i%2 !== 0) {
    //     console.log(i);       
    // }
    //Or this way
    (i%2 !== 0) && console.log(i);

    //Also this way
    // (i%2 !== 0) ? console.log(i) : null 
}