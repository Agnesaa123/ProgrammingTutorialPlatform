// /src/data/exercises.js
export const javascriptExercises = [
  {
    id: 'ex1',
    title: 'Hello World Function',
    description: 'Create a function that returns "Hello World!"',
    solution: 'function hello() { return "Hello World!"; }'
  },
  {
    id: 'ex2',
    title: 'Sum of Two Numbers',
    description: 'Create a function that takes two numbers and returns their sum.',
    solution: 'function sum(a, b) { return a + b; }'
  },
  {
    id: 'ex3',
    title: 'Even or Odd',
    description: 'Create a function that takes a number and returns "Even" or "Odd" based on the input.',
    solution: 'function isEvenOrOdd(num) { return num % 2 === 0 ? "Even" : "Odd"; }'
  },
  {
    id: 'ex4',
    title: 'Reverse a String',
    description: 'Create a function that reverses a string.',
    solution: 'function reverseString(str) { return str.split("").reverse().join(""); }'
  },
  {
    id: 'ex5',
    title: 'Palindrome Check',
    description: 'Create a function that checks if a string is a palindrome.',
    solution: 'function isPalindrome(str) { return str === str.split("").reverse().join(""); }'
  },
  {
    id: 'ex6',
    title: 'Find the Largest Number',
    description: 'Create a function that finds the largest number in an array.',
    solution: 'function findLargest(arr) { return Math.max(...arr); }'
  },
  
];