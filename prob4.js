// Print all the multiplication tables with numbers from 1 to 10 

// Note: Best way is below // #3rd way // Shortest way

//3rd way --> Using Callbacks --> Best Answer

for(let i=1;i<11;i++){
    printTable(i);
}
function printTable(n){
    for(let i=1;i<11;i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}

//1st way 
// for(let i=1; i<11;i++){
//     if (i===1) {
//         for(let i=1;i<11;i++){
//             console.log(`1*${i} = ${1*i}`);
//         }        
//     }
//     if (i===2) {
//         for(let i=1;i<11;i++){
//             console.log(`2*${i} = ${2*i}`);
//         }        
//     }
//     if (i===3) {
//         for(let i=1;i<11;i++){
//             console.log(`3*${i} = ${3*i}`);
//         }        
//     }
//     if (i===4) {
//         for(let i=1;i<11;i++){
//             console.log(`4*${i} = ${4*i}`);
//         }        
//     }
//     if (i===5) {
//         for(let i=1;i<11;i++){
//             console.log(`5*${i} = ${5*i}`);
//         }        
//     }
//     if (i===6) {
//         for(let i=1;i<11;i++){
//             console.log(`6*${i} = ${6*i}`);
//         }        
//     }
//     if (i===7) {
//         for(let i=1;i<11;i++){
//             console.log(`7*${i} = ${7*i}`);
//         }        
//     }
//     if (i===8) {
//         for(let i=1;i<11;i++){
//             console.log(`8*${i} = ${8*i}`);
//         }        
//     }
//     if (i===9) {
//         for(let i=1;i<11;i++){
//             console.log(`9*${i} = ${9*i}`);
//         }        
//     }
//     if (i===10) {
//         for(let i=1;i<11;i++){
//             console.log(`10*${i} = ${10*i}`);
//         }        
//     }
// }

// 2nd way
// for(let i=1; i<11;i++){
//     for(let j=1; j<11;j++){
//         if (i===1) {
//             console.log(`1*${j} = ${1*j}`);
//         }
//         else if(i===2){
//             console.log(`2*${j} = ${2*j}`);
//         }
//         else if(i===3){
//             console.log(`3*${j} = ${3*j}`);
//         }
//         else if(i===4){
//             console.log(`4*${j} = ${4*j}`);
//         }
//         else if(i===5){
//             console.log(`5*${j} = ${5*j}`);
//         }
//         else if(i===6){
//             console.log(`6*${j} = ${6*j}`);
//         }
//         else if(i===7){
//             console.log(`7*${j} = ${7*j}`);
//         }
//         else if(i===8){
//             console.log(`8*${j} = ${8*j}`);
//         }
//         else if(i===9){
//             console.log(`9*${j} = ${9*j}`);
//         }
//         else if(i===10){
//             console.log(`10*${j} = ${10*j}`);
//         }
//     }  
// }

//3rd way --> Using Callbacks

// for(let i=1;i<11;i++){
//     printTable(i);
// }
// function printTable(n){
//     for(let i=1;i<11;i++){
//         console.log(`${n} * ${i} = ${n*i}`);
//     }
// }