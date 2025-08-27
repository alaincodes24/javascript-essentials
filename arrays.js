// ARRAYS


// Primitive data types: number, string, boolean, null, undefined, symbol
const num1 = 100;
const name = "Isabella";
const isDrunk = false;
const isLoggedIn = null;
let student;
console.log(student);

// fruits: orange, mango, apple, berries

const fruit1 = "orange";
const fruit2 = "mango";
const fruit3 = "apple";
const fruit4 = "berries";


console.log(fruit1, fruit2, fruit3, fruit4);

// Non-primitive data type: arrays and objects

// a collection of items

// arrays: a collection/list of items

const fruits = ["orange", "mango", "apple", "berries"];
console.log(fruits);

const students = ["yvonne", "alice", "patrick", "shadrack"];
console.log(students);

const itemQuantities = [12, 50, 70, 12, 4];
console.log(itemQuantities);

const countries = [];

// Arrays Manipulation 

// check the length

console.log(fruits.length);
console.log(itemQuantities.length);
console.log(countries.length);

// add items - push()

// add "Rwanda" to countries array

console.log(countries);
countries.push("Rwanda");
countries.push("Burundi");
countries.push("DRC");
countries.push("USA");
console.log(countries);

console.log("Rwanda"[0]);

// check position of item in an array -> index
console.log(countries[0]);
console.log(countries[countries.length - 1]); 

// remove items from array -> pop()

const numbers = [10, 12, 14, 16, 18, 20, 22];
console.log(numbers.length); // 7

console.log(numbers);
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);

// collection of items: mixed items
let age;
const temperature = 26;
const mixed = [];
mixed.push(5);
mixed.push("yvonne");
mixed.push(true);
mixed.push(age);
mixed.push(temperature);
console.log(mixed);









