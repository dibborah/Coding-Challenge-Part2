// Calculate 10! 

// Mistakes I commited while solving the factorial problem

// primary mistake :
// When my first approach of solving the problem failed
// I should have looked for other approaches 
// For example if : 
// i-- failed I know that i++ is working
// So I should have looked for ways or approached that 
// Could solve the problem with what is currently working like i++
// And if that failed after my DIFFERENT && MANY attempts 
// then and only then I should have look for other possibilities of
// solving the problem like i-- || others

// Secondary mistake :
//The first mistake I did in solving the problem is that 
// I forgot that in multiplication the sequence at which we 
// multiply problem doesn't effect the outcome || solution
// so 10! = 10*9*8*7*6*5*4*3*2*1 === 1*2*3*4*5*6*7*8*9*10

console.log("factorial !");
let prod = 1
for(let i = 1; i<= 10;i++){
    prod *= i
}
console.log(prod);