// Rotate an array to the right 1 position

// const arr: number[] = [1, 2, 3];
let arr: Array<number> = [1, 2, 3];
// Expected Result => 3,1,2

const rotateArrayRight = (anyArr:any): void => {
    const digit = anyArr.pop();
    anyArr.unshift(digit);
    console.log(anyArr);
}

rotateArrayRight(arr);

export {};

