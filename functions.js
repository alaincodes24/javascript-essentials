// Functions: a reusable block of code to perform a task

// TODO: calculating age based on year of birth // calculateAge
// TODO: greet a person based on the time of the day // greetBasedOnDayTime
// TODO: calculate a bmi index of a person // calculateBMI
// eat, create, find, ask, dance, sing, jump, learn, etc.

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

