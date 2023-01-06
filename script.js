// 283k = 10C = 50F
// line 3 assigns a variable (kelvin) which is constant to the value 293.

const kelvin = 0;

// the variable (celsius) is being assigned a value by subtracting a number from the variable kelvin.
let celsius = kelvin - 273;

// converts the celsius' value to fahrenheit and rounds the product returning the highest number.
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = (Math.floor(fahrenheit));
console.log(`The temperature is ${fahrenheit} degress Fahrenheit.`);

// converting celsius to the newton scale.


let newton = celsius * (33/100);
newton = (Math.floor(newton));
console.log(`The temperature is ${newton} Newton.`);
