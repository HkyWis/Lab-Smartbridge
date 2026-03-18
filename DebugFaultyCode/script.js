// ===== Syntax Error Fix =====
// Faulty: missing closing parenthesis
// console.log("Hello World"
console.log("Hello World"); // Fixed

// ===== Runtime Error Fix =====
let a;
// console.log(a.toUpperCase()); // Error
a = "hello";
console.log(a.toUpperCase()); // Fixed

// ===== Example 1: Logic Error Fix =====
let num = "10";
// console.log(num + 5); // Outputs "105"
num = Number(num);
console.log(num + 5); // Outputs 15, Fixed

// ===== Example 2: Function Error Fix =====
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Fixed

// ===== Example 3: Array Access Error Fix =====
let fruits = ["apple", "banana"];
// console.log(fruits[2].toUpperCase()); // Error
if(fruits[2]) {
    console.log(fruits[2].toUpperCase());
} else {
    console.log("No fruit at index 2"); // Fixed
}

// ===== Example 4: Loop Debugging =====
for(let i = 0; i < 3; i++) {
    console.log(`Loop iteration ${i+1}`); // Fixed, prints 1,2,3
}

// ===== Example 5: Conditional Fix =====
let score = 85;
if(score >= 80) {
    console.log("Grade: A"); // Correct output
} else if(score >= 70) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
