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

// const car = new Object({
//   manufacturedYear: 2020,
//   brand: 'Toyota',
//   driver: 'Patrick'
// });

// console.log(car);

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


// let's create an object: country


// object literals
const country = {
  president: "Paul Kagame",
  name: "Rwanda",
  population: 12000000
};

const school = {};

school.principal = "Rwangombwa";
school.numberOfStudents = 200;

console.log(school);

// new Object constructor
const road = new Object();
road.length = 20;
road.color = "black";
road.year = 2020;

console.log(road);


// creating many objects

// const shop1 = {
//   location: "Kigali",
//   owner: "Patrick",
//   products: ["shoes", "socks", "pants", "shirts"]
// }

// const shop2 = {
//   location: "Rwamagana",
//   owner: "Phocas",
//   products: ["tomatoes", "harts", "potatoes"]
// }

// classes are Pascal-cased
class Shop {
  constructor(location, owner, products) {
    this.location = location;
    this.owner = owner;
    this.products = products;
  }
}

const shop1 = new Shop("Kibuye", "Yvonne", ["clothes", "shoes", "belts"]);
const shop2 = new Shop("Kigali", "Shadrack", ["smartphones", "TVs", "computers", "Laptop chargers"]);
console.log(shop1);
console.log(shop2);

// Create a class called Company and create 3 companies from the class

// - services, location, CEO, size

class Company {
  constructor(services, location, CEO, size) {
    this.services = services;
    this.location = location;
    this.CEO = CEO;
    this.size = size;
  }
}

const amazon = new Company(["web dev", "online shopping", "consultancy"], "San Francisco", "Andy Jassy", 1500000);
const apple = new Company(["iphones", "ipads", "iMac"], "California", "Tim Cook", 164000);
const alibaba = new Company(["online shopping", "cloud computing"], "Hangzhou", "Jack Ma", 125000);

console.log(amazon, apple, alibaba);

// object: properties, methods

// car: color, driver, tyres, registration, numberOfPeople => properties
// car: brake, speed up, stop, ignite, reverse, etc. => methods

// person: methods => speak, dance, walk, sing, smile, pray, eat, sayHi, 
// person: properties => skinColor, weight, height, age, etc.

const car = {
  color: "blue",
  driver: "Patrick",
  tyres: 4,
  brake: function() {
    console.log("The car is breaking....");
  },
  reverse: function() {
    console.log("Make way, the car is reversing");
  },
  getDescription: function() {
    console.log(`My name is ${this.driver} and I drive a ${this.color} car`)
  },
  getDriver: function() {
    return this.driver;
  },
  displayDriver: function() {
    console.log(`The driver is ${this.getDriver()}`);
  }
}

// Dot notation, Bracket notation
console.log(car.driver);
car.brake();
car.reverse();
car.getDescription();
car.displayDriver();

class Motobike {
  constructor(tyres) {
    this.tyres = tyres;
  }

  drive(year) {
    console.log(`This bike drives with ${this.tyres} tyres and was made in ${year}`);
  }
}

const bike = new Motobike(10);
console.log(bike);
bike.drive(2025);
