// Print the squares of numbers from 1 to 10. (e.g., 1² = 1, 2² = 4)

for(let i = 1; i <= 10; i++) {
  console.log(i**2);
}

// Keep asking the user to enter a number until they type a number greater than 100.

// let num = 0;

// while(num <= 100) {
//   num = prompt("Enter a number");
// }

// console.log("You entered the correct number");

// Keep asking the user to type 'yes' until they do, then print 'Finally! n'.

// let answer = "no";
// let rightAnswer = "yes";

// while(answer !== rightAnswer) {
//   answer = prompt("Submit your answer");
// }

// console.log("Finally 🎉");


let number = 0;
let secretNumber = 8;

while(number !== secretNumber) {
  number = Number(prompt("Guess the number"));
}

console.log("Correct 🎉");