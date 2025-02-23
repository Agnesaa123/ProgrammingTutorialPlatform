export const javascriptExercises = [
  // Exercise 1 - Hello World Function
  {
    id: 'ex1',
    title: 'Hello World Function',
    description: 'Create a function that returns "Hello World!"',
    solution: 'function hello() { return "Hello World!"; }'
  },

  // Exercise 2 - ES6 Features: Arrow Functions
  {
    id: 'ex2',
    title: 'ES6 Arrow Function',
    description: 'Convert the following function to an arrow function: function greet(name) { return "Hello " + name; }',
    solution: 'const greet = (name) => { return "Hello " + name; };'
  },

  // Exercise 3 - React Components
  {
    id: 'ex3',
    title: 'Basic React Component',
    description: 'Create a basic React component that renders "Hello React!"',
    solution: 'const HelloReact = () => { return <h1>Hello React!</h1>; };'
  },

  // Exercise 4 - State and Props in React
  {
    id: 'ex4',
    title: 'React State Example',
    description: 'Create a React component with state that tracks a counter and renders it on the screen with a button to increment the counter.',
    solution: 'const Counter = () => { const [count, setCount] = useState(0); return <><h1>{count}</h1><button onClick={() => setCount(count + 1)}>Increment</button></>; };'
  },

 // Exercise 5 - Algorithm: Find Maximum in Array
{
  id: 'ex5',
  title: 'Find Maximum in Array',
  description: 'Write a function that finds the maximum value in an array of numbers.',
  solution: 'function findMax(arr) { return Math.max(...arr); }'
},

// Exercise 6 - Python Basics: Simple Calculator
{
  id: 'ex6',
  title: 'Python Simple Calculator',
  description: 'Write a Python function that takes two numbers and an operator (+, -, *, /) and returns the result of the operation.',
  solution: 'def calculator(a, b, operator):\n  if operator == "+":\n    return a + b\n  elif operator == "-":\n    return a - b\n  elif operator == "*":\n    return a * b\n  elif operator == "/":\n    return a / b\n  else:\n    return "Invalid operator"'
}

];
