const prompt = require("prompt-sync")();

let a = prompt("Enter a number:");
let b = prompt("Enter another number:");
a = parseFloat(a);

b = parseFloat(b);
function sum(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function sub(a, b) {
  return a - b;
}

function pow(a, b) {
  return a ** b;
}
let c = Math.random() * 100;

console.log(c);

    if (c <= 10) {
      console.log("sum:" + pow(a, b));
      console.log("Mutiply:" + div(a, b));
      console.log("Division:" + mult(a, b));
      console.log("Subtraction:" + sum(a, b));
      console.log("Power:" + sub(a, b));
    }
    
    console.log("sum:" + sum(a, b));
    console.log("Mutiply:" + mult(a, b));
    console.log("Division:" + div(a, b));
    console.log("Subtraction:" + sub(a, b));
    console.log("Power:" + pow(a, b));
 

