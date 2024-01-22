// Coding challenge #27a

// Create a function that will receive an array of
// numbers as argument and will return a new
// array with distinct elements

// console.log((Math.random() * 100) + 3);

// const ar = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];

const getDistinctElements = (ar) => {
  const ar2:any = [];
  for (let i = 0; i < ar.length; i++) {
    if(!isInArray(ar[i], ar2)){
        ar2.push(ar[i]);
    }
  }
  return ar2;
};

const isInArray = (n, ar) => {
    // console.log(ar.length);    
    for(let i = 0; i < ar.length; i++){// I didn't understood this line
        if(ar[i] === n){
            return true;
        }
    }
    return false
}

let ws = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
console.log(ws);
console.log("hiii problem");



