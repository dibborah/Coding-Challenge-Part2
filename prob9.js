
// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit

// 32F  = 1C

let celsius;

// Me and taking google help seeing the formula
const celsiusToFahrenheit = (celsius) => {
    // const fahrenheit = (celsius * 9/5)+32;
    // return fahrenheit;
    return (celsius * 9/5) + 32;// 9/5 can also be written as 1.8
}

const result = celsiusToFahrenheit(1);
console.log(result);



