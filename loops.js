// repetitive tasks

// for loop

for (let i = 0; i <= 10; i++) {
	console.log(i);
}

// 0 2 4 6 8 10

// initialization: 10
// condition: i >= 0
// expression: i = i - 1

for (let i = 10; i >= 0; i--) {
	console.log(i);
}

// Write a for loop that prints "Good morning" 4 times

for (let i = 0; i <= 4; i++) {
	console.log("Good morning");
}

// while loop

// do while loop

// hello world 7
// initialization: i = 0; condition: i i < 7; i ++

for (let i = 0; i <= 7; i++) {
	console.log("Hello world");
}

/**
 * 🔹 For Loop Exercises:

1. Print numbers from 1 to 10.

2. Print the multiplication table of 5 (5 × 1, 5 × 2, … 5 × 10).

3. Print only even numbers between 1 and 20.

4. Print numbers from 10 down to 1 (reverse order).

5. Find the sum of numbers from 1 to 50.

 */

// Q1.

for (let i = 1; i <= 10; i++) {
	console.log(i);
}
console.log("==========");
// Q2

for (let i = 1; i <= 10; i++) {
	console.log(5 * i);
}

// for(counter; condition; step) {
// }

// print numbers from 1 to 5

for (let i = 1; i <= 5; i = i + 2) {
	console.log(i);
}

// Q3.

// 1 and 20: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// for(let i = 2; i <= 20; i = i + 2) {
//   console.log(i);
// }

for (let i = 1; i <= 20; i++) {
	// print i if i is even
	if (i % 2 === 0) {
		console.log(i);
	}
}

// Q4.

for(let i = 10; i >= 1; i--) {
  console.log(i);
}

// Q5.


// accumulator: 
let sum = 0;
for(let i = 1; i <= 50; i++) {
  sum = sum + i;
}

console.log(sum);

// while loop

// while (condition) {
//   // code to run when the condition is true
// }

for(let i = 1; i <= 3; i++) {
  console.log(i);
}

let i = 1;
while(i <= 7) {
  console.log(i);
  i = i + 2;
}



// Common Shortcuts

let f = 12;
// add 5 to f and print the result

// f = f - 5;
f *= 5; // f = f * 5
console.log(f);

// Write a simple program that keeps asking the user their password until it's correct
