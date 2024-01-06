// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

// 1F  = -17.2222

// Me and taking google help seeing the formula
// const fahrenheitToCelsius = (fahrenheit) => {
//     return (fahrenheit -32) * 5/9;
// }
const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit -32) / (9/5);
}

const result = fahrenheitToCelsius(1);
console.log(result);



