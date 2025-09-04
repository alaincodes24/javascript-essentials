// Functions: a reusable block of code to perform a task

// TODO: calculating age based on year of birth // calculateAge
// TODO: greet a person based on the time of the day // greetBasedOnDayTime
// TODO: calculate a bmi index of a person // calculateBMI
// eat, create, find, ask, dance, sing, jump, learn, etc.

// function declaration 

function calculateAge(birthYear) {
 // perform task and give output/result
 const age = 2025 - birthYear;
 console.log(age);
}

// function runs when it is called.

/*
1. When it is explicitly called within the code
2. When the event occurs (e.g. user can click a button)
3. Self-invoked
*/

calculateAge(2000);
calculateAge(2010);
calculateAge(1992);

function sayHi(name) {
  console.log(`Hi, ${name}`);
}

sayHi("Patrick");
sayHi("Yvonne");
sayHi("Bonane");

// calculate bmi index

function calculateBMI(weight, height) {
  const index = weight / height**2;
  console.log(index);
}

calculateBMI(65, 1.70);
calculateBMI(80, 1.50);


// Exercise:

/*
Write a function called toCelsius, which will take fahrenheit as a parameter and convert fahrenheit to celsius.

Formula: celsius = (5/9) * (fahrenheit-32)

Print the result to the screen.

Call the function with 77
call the function with 82
*/

const name = "Patrick";
const isLoggedIn = true;
let firstName = null;

console.log(typeof name);
console.log(typeof isLoggedIn);
console.log(typeof firstName);


// we want to calculate subtotal, tax, final total, 
function calculateCartTotal(item1Price, item2Price, taxRate) {
 const subtotal = item1Price + item2Price;
 const tax = subtotal * taxRate;
 const finalTotal = subtotal + tax;
 console.log(subtotal, tax, finalTotal);
}


//  with: item1 = 25.99, item2 = 15.50, taxRate = 0.08


// calling/invoking a function

calculateCartTotal(25.99, 15.50, 0.08);
calculateCartTotal(2000, 5000, 0.07);

// function should `return` a value


function sum(num1, num2) {
  const sum = num1 + num2;
  return sum;
}


// return serves two purposes:
/*
1. function returns a value to the caller
2. stops the execution
*/
const result = sum(5, 7);
sum(15, 70);
sum(50, 17);

console.log(result - 5);
console.log(`The sum of 5 and 7 is ${sum(5, 7)}`);

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const fullName = getFullName("Patrick", "Iradukunda");
console.log(fullName);
console.log(`My name is ${fullName}`);
console.log(`My name is ${getFullName("Isabella", "Manishimwe")}`);


// local variables: global scope, function scope, block scope

// HOISTING
const c = 100;
console.log(c);
function getModulus() {
  const a = 12;
  const b = 4;
  console.log(a, b, c);
  return a % b;
}

// console.log(a, b);

const modulus = getModulus();
console.log(modulus);


// Arrow Functions (ES6)

function divide(a, b) {
  return a / b;
}

console.log(divide(12, 4));

const division = (a, b) => {
  return a / b;
}

console.log(division(4, 2));

const getAge = () => 20;

// const addFiveToNumber = (x) => {
//   const y = x + 5;
//   return y;
// }

const addFiveToNumber = x => x + 5;

console.log(addFiveToNumber(12));


/*
Exercise 8: Time Converter
Create a function called convertMinutesToHours that takes minutes as a parameter and converts it to hours and remaining minutes. Print in the format "X hours and Y minutes".

Test with: 150 minutes
Test with: 90 minutes
Test with: 45 minutes
*/

function convertMinutesToHours(minutes) {
  const x = minutes / 60;
  const arr = (x + "").split(".");
  const hours = arr[0];
  let mins = 0; 
  if(arr.length > 1) {
    mins = ('0.' + arr[1]) * 60;
  }
  console.log(`${hours} hours and ${mins} minutes`);
}

convertMinutesToHours(150);
convertMinutesToHours(90);
convertMinutesToHours(45);
convertMinutesToHours(2400);
convertMinutesToHours(170);
