// Objects in JavaScript

// A collection of key-value pairs

// E.g. a house, a bike, a country, a student, a class, a tree, a person, animal, mountain, a table, a computer, a calculator, a book, a phone, shoe, etc

// a house: doors, windows, roof, beds, bathrooms, kitchen
// a student: uniform, books, pens, grade, teacher
// a person: age, skin color, first name, last name, height, weight, etc.

// How do we create objects in javascript?


// typeof 
const num = 12;
if(typeof num === "number") {
  console.log(num / 2);
} else {
  console.log(num);
}

// Object creation ways:

// 1. Object Literals

const person = {
  age: 20,
  firstName: "Isabella",
  lastName: "Manishimwe",
  skinColor: "brown"
};
console.log(person);

const house = {
  tableColor: "blue",
  numberOfDoors: 3,
  numberOfWindows: 4,
  manufacturedIn: "January 10, 2015"
}

console.log(house, typeof house);


// Exercise: create an object called country with these properties: name (Rwanda), president (Paul Kagame), population (15000000), capital city (Kigali). Log the object to the console.


// 2. Object constructor
const forest = new Object();
forest.numberOfTrees = 1000;
forest.hasAnimal = true;
forest.animals = ["lion", "giraffe", "elephant"];
console.log(forest);

const car = new Object({
  manufacturedYear: 2020,
  brand: 'Toyota',
  driver: 'Patrick'
});

console.log(car);

// Exercise: Using Object constructor: create an object called table with these properties: numberOfLegs, color, isAvailable, and owner. Then, print it to the screen.



// ACCESSING VALUES IN OBJECTS

const studyHall = {
  numberOfComputers: 20,
  numberOfStudents: 7,
  teacher: "Thomas Richard",
  hasTVScreen: false,
  subjects: ["HTML", "CSS", "JavaScript"],
}

console.log(typeof studyHall);

// Dot Notation
// subjects:
console.log(studyHall.subjects.length);
for(let i = 0; i < studyHall.subjects.length; i++) {
  console.log(`I love to study ${studyHall.subjects[i]}`);
}
console.log(studyHall.teacher);

if(studyHall.hasTVScreen) {
  console.log("The students are smart")
} else {
  console.log("The students have a long way to go");
}

console.log(studyHall.teacher.length);

studyHall.subjects.pop();
console.log(studyHall.subjects);
console.log(studyHall);

// Bracket Notation

const club = {
  players: ["neymar", "messi", "ronaldo"], 
  coach: "Jose Morinho",
  city: "London",
  president: "Patrick"
}

console.log(club["players"]);
console.log(club["president"]);
