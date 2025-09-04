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


// let number = 0;
// let secretNumber = 8;

// while(number !== secretNumber) {
//   number = Number(prompt("Guess the number"));
// }

// console.log("Correct 🎉");


/*

JavaScript Function Exercises
Exercise 1: Area Calculator
Write a function called calculateRectangleArea that takes two parameters: length and width. The function should calculate and print the area of a rectangle.

Call the function with length = 10 and width = 5
Call the function with length = 7.5 and width = 3.2

Exercise 2: Even or Odd Checker
Create a function called checkEvenOdd that takes a number as a parameter and prints whether the number is "even" or "odd".

Test with numbers: 15, 24, 7

Exercise 3: Full Name Generator
Write a function called createFullName that takes two parameters: firstName and lastName. It should print the full name in the format "Hello, [First] [Last]!"

Call with: "Alice", "Johnson"
Call with: "Bob", "Smith"

Exercise 4: Simple Interest Calculator
Create a function called calculateSimpleInterest that takes three parameters: principal, rate, and time. Calculate simple interest using the formula: Interest = (Principal × Rate × Time) / 100

Test with: principal = 1000, rate = 5, time = 2
Test with: principal = 5000, rate = 3.5, time = 4

Exercise 5: Grade Evaluator
Write a function called getGrade that takes a score (0-100) as a parameter and prints the corresponding letter grade:

90-100: "A"
80-89: "B"
70-79: "C"
60-69: "D"
Below 60: "F"
Test with scores: 95, 73, 58

Exercise 6: Circle Circumference
Create a function called calculateCircumference that takes the radius as a parameter and calculates the circumference using the formula: C = 2 × π × r (use 3.14159 for π)

Test with radius = 5
Test with radius = 12.5

Exercise 7: Discount Calculator
Write a function called applyDiscount that takes two parameters: originalPrice and discountPercent. It should calculate and print the final price after applying the discount.

Test with: originalPrice = 100, discountPercent = 20
Test with: originalPrice = 250, discountPercent = 15

Exercise 8: Time Converter
Create a function called convertMinutesToHours that takes minutes as a parameter and converts it to hours and remaining minutes. Print in the format "X hours and Y minutes".

Test with: 150 minutes
Test with: 90 minutes
Test with: 45 minutes

Exercise 9: Password Strength Checker
Write a function called checkPasswordLength that takes a password string as a parameter and prints:

"Strong" if the password is 8 or more characters
"Medium" if the password is 5-7 characters
"Weak" if the password is less than 5 characters
Test with: "password123", "hello", "abc"

Exercise 10: Shopping Cart Total
Create a function called calculateCartTotal that takes three parameters: item1Price, item2Price, and taxRate. Calculate the subtotal, tax amount, and final total. Print all three values.

Formula: tax = subtotal × taxRate, total = subtotal + tax
Test with: item1 = 25.99, item2 = 15.50, taxRate = 0.08
*/