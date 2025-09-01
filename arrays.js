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

const itemQuantities = [12, 50, 70, 12, 4]; // zero-indexed
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
numbers.pop(); // destructive methods
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

const people = [];
people.push("bonane", "patrick", "shadrack");


// people[0] = "bonane";
// people[2] = "patrick";
// people[3] = "shadrack";

people.shift();
people.shift();
people.shift();

people.unshift("kaboss");
people.unshift("delyce");
people.unshift("tom", "jack", "helen");

console.log(people);

const shoeBrands = ["nike", "yeezy", "adidas", "puma", "jordan"];

console.log(shoeBrands);
shoeBrands.splice(2, 3, "bodaboda");
console.log(shoeBrands);

// slice(start, end)

const usaPresidents = ["trump", "biden", "obama", "bush"];
const lastPresidents = usaPresidents.slice(0, 2);
console.log(lastPresidents);

// concat()

const footballClubs = ["man utd", "real madrid", "chelsea", "liverpool"];
const footballCoaches = ["Ruben", "Xabi", "Enzo", "Arne"];

const clubsAndCoaches = footballClubs.concat(footballCoaches);
console.log(footballClubs);
console.log(footballCoaches);
console.log(clubsAndCoaches);

// destructuring:

const newArray = [...footballClubs, ...footballCoaches];
console.log(newArray);

const capitalCities = ["kigali", "cairo", "bujumbura"];
console.log(capitalCities.length);

// manipulating: push, pop, shift, unshift, slice, splice

capitalCities.push("paris");
capitalCities.unshift("moscow");
capitalCities.pop();
capitalCities.shift();
const newArr = capitalCities.slice(0, 2);

console.log(newArr);
console.log(capitalCities);
capitalCities.splice(1, 0, "nairobi"); // []
console.log(capitalCities);


// loops

console.log(capitalCities[0]);
console.log(capitalCities[1]);
console.log(capitalCities[2]);
console.log(capitalCities[capitalCities.length - 1]);


// for loop

for(let i = 0; i < capitalCities.length; i++) {
  console.log(capitalCities[i]);
}

// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28

for(let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}


/** 
push(): Adds an element to the end of the array. 
pop(): Removes the last element from the array.
shift(): Removes the first element from the array.
unshift(): Adds an element to the beginning of the array.
splice(): Adds or removes elements at a specified position.
slice(): Creates a new array containing a portion of the original array.
length: A property that returns the number of elements in the array.
 */











