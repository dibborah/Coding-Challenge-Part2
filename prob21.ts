// Coding challenge #20
// Rotate an array to the left 1 position

const arr = [1, 2, 3];
console.log(arr);

function rotateArray(arr){
    let removed = arr.shift();
    arr.push(removed);
    console.log(arr);
}

rotateArray(arr);

export {};