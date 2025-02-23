export const javascriptQuizzes = [
  {
    id: 'js1',
    title: 'JavaScript Basics',
    questions: [
      {
        question: 'How do you declare a variable in JavaScript?',
        options: ['var x;', 'variable x;', 'v x;', 'let x;'],
        correctAnswers: [0, 3],
        explanation: 'In JavaScript, you can declare variables using var, let, or const.'
      },
      {
        question: 'Which data type is NOT primitive in JavaScript?',
        options: ['String', 'Number', 'Object', 'Boolean'],
        correctAnswers: [2],
        explanation: 'Objects are non-primitive types in JavaScript.'
      },
      {
        question: 'What is the correct way to write a function in JavaScript?',
        options: [
          'function myFunc() {}',
          'def myFunc() {}',
          'func myFunc() {}',
          'myFunc = function() {}'
        ],
        correctAnswers: [0, 3],
        explanation: 'Functions in JavaScript can be declared with "function" or assigned as an expression.'
      },
      {
        question: 'Which keyword is used to define a constant variable?',
        options: ['let', 'var', 'const', 'define'],
        correctAnswers: [2],
        explanation: 'The "const" keyword is used to declare constant variables in JavaScript.'
      },
      {
        question: 'What does `typeof null` return?',
        options: ['null', 'undefined', 'object', 'number'],
        correctAnswers: [2],
        explanation: '`typeof null` incorrectly returns "object" due to a historical bug in JavaScript.'
      }
    ]
  },
  {
    id: 'es6-1',
    title: 'ES6 Features',
    questions: [
      {
        question: 'Which new keyword was introduced in ES6 for declaring variables?',
        options: ['var', 'let', 'int', 'dim'],
        correctAnswers: [1],
        explanation: 'ES6 introduced "let" and "const" for variable declarations.'
      },
      {
        question: 'What is the purpose of arrow functions in ES6?',
        options: [
          'To make functions shorter',
          'To define a class',
          'To loop through arrays',
          'To declare variables'
        ],
        correctAnswers: [0],
        explanation: 'Arrow functions provide a shorter syntax for writing functions in JavaScript.'
      },
      {
        question: 'Which ES6 feature allows for default values in function parameters?',
        options: ['Rest parameters', 'Spread operator', 'Default parameters', 'Destructuring'],
        correctAnswers: [2],
        explanation: 'Default parameters allow you to set default values for function arguments.'
      },
      {
        question: 'How do you import a module in ES6?',
        options: [
          'require("module")',
          'import module from "module";',
          'include module;',
          'fetch("module")'
        ],
        correctAnswers: [1],
        explanation: 'ES6 introduced "import" for module imports instead of "require".'
      },
      {
        question: 'What is the spread operator used for?',
        options: [
          'Expanding an array or object',
          'Creating a loop',
          'Declaring a function',
          'Comparing values'
        ],
        correctAnswers: [0],
        explanation: 'The spread operator (...) is used to expand arrays or object properties.'
      }
    ]
  },
  {
    id: 'react-1',
    title: 'React Components',
    questions: [
      {
        question: 'What is a React component?',
        options: [
          'A function or class that returns JSX',
          'A JavaScript object',
          'An HTML element',
          'A React library'
        ],
        correctAnswers: [0],
        explanation: 'A React component is a function or class that returns JSX to render UI.'
      },
      {
        question: 'How do you pass data to a component in React?',
        options: ['Using state', 'Using props', 'Using functions', 'Using events'],
        correctAnswers: [1],
        explanation: 'Props are used to pass data from one component to another in React.'
      },
      {
        question: 'What hook is used to manage component state in React?',
        options: ['useEffect', 'useState', 'useReducer', 'useContext'],
        correctAnswers: [1],
        explanation: 'The useState hook is used to manage state in functional components.'
      },
      {
        question: 'Which syntax is used to define a functional component in React?',
        options: [
          'function MyComponent() { return <div></div>; }',
          'class MyComponent extends React.Component { render() { return <div></div>; }}',
          'React.createComponent(MyComponent)',
          'MyComponent() => { return <div></div>; }'
        ],
        correctAnswers: [0, 1],
        explanation: 'React supports both functional and class components.'
      },
      {
        question: 'What is JSX?',
        options: [
          'JavaScript XML',
          'A templating language',
          'A styling framework',
          'A JavaScript function'
        ],
        correctAnswers: [0],
        explanation: 'JSX is a syntax extension of JavaScript that looks like HTML but compiles to JavaScript.'
      }
    ]
  },
  {
    id: 'react-2',
    title: 'State & Props in React',
    questions: [
      {
        question: 'What is state in React?',
        options: [
          'A way to store dynamic data in a component',
          'A method to pass data between components',
          'A React function',
          'A Redux store'
        ],
        correctAnswers: [0],
        explanation: 'State is used to store dynamic data inside a component in React.'
      },
      {
        question: 'How do you update state in a React functional component?',
        options: ['Using this.setState()', 'Directly modifying state', 'Using useState()', 'Calling an API'],
        correctAnswers: [2],
        explanation: 'The useState hook is used to update state in functional components.'
      },
      {
        question: 'Which of the following is true about props in React?',
        options: [
          'Props are immutable',
          'Props can only be used in class components',
          'Props can be changed within the component',
          'Props are the same as state'
        ],
        correctAnswers: [0],
        explanation: 'Props are immutable and cannot be changed within a component.'
      },
      {
        question: 'What is the correct way to pass props to a child component?',
        options: [
          '<ChildComponent propName="value" />',
          '<ChildComponent.propName = "value" />',
          'ChildComponent({propName: "value"})',
          '<ChildComponent {propName} />'
        ],
        correctAnswers: [0],
        explanation: 'Props are passed using attributes in JSX: <ChildComponent propName="value" />.'
      },
      {
        question: 'How do you access props in a functional component?',
        options: [
          'this.props',
          'props.propName',
          'useProps()',
          'state.props'
        ],
        correctAnswers: [1],
        explanation: 'In functional components, props are accessed directly as "props.propName".'
      }
    ]
  },
  {
    id: 'algorithms-1',
    title: 'Algorithms Quiz',
    questions: [
      {
        question: 'What is the time complexity of the binary search algorithm?',
        options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
        correctAnswers: [1],
        explanation: 'Binary search has a time complexity of O(log n).'
      },
      {
        question: 'Which algorithm is used to find the shortest path in a graph?',
        options: ['Merge Sort', 'Dijkstra\'s Algorithm', 'Quick Sort', 'Selection Sort'],
        correctAnswers: [1],
        explanation: 'Dijkstra\'s Algorithm is used to find the shortest path in a graph.'
      },
      {
        question: 'What is the worst-case time complexity of Quick Sort?',
        options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
        correctAnswers: [2],
        explanation: 'The worst-case time complexity of Quick Sort is O(n^2).'
      },
      {
        question: 'Which of the following is a divide-and-conquer algorithm?',
        options: ['Bubble Sort', 'Merge Sort', 'Selection Sort', 'Insertion Sort'],
        correctAnswers: [1],
        explanation: 'Merge Sort is an example of a divide-and-conquer algorithm.'
      },
      {
        question: 'What is a key property of a hash table?',
        options: ['Key-value pairs', 'Sorted order', 'Unique values', 'Static size'],
        correctAnswers: [0],
        explanation: 'Hash tables store data in key-value pairs.'
      }
    ]
  },
  {
    id: 'python-1',
    title: 'Python Basics Quiz',
    questions: [
      {
        question: 'What is the correct way to declare a variable in Python?',
        options: ['var x = 10', 'x = 10', 'int x = 10', 'x : int = 10'],
        correctAnswers: [1],
        explanation: 'In Python, variables are declared using the syntax "x = 10".'
      },
      {
        question: 'Which of the following is a valid Python data type?',
        options: ['Integer', 'List', 'Dictionary', 'All of the above'],
        correctAnswers: [3],
        explanation: 'All of the above are valid data types in Python.'
      },
      {
        question: 'What is the output of print(2 * 3 + 1)?',
        options: ['5', '6', '7', 'None of the above'],
        correctAnswers: [2],
        explanation: 'The correct output is 7, as multiplication happens before addition.'
      },
      {
        question: 'Which Python keyword is used to define a function?',
        options: ['def', 'function', 'define', 'func'],
        correctAnswers: [0],
        explanation: 'Functions in Python are defined using the keyword "def".'
      },
      {
        question: 'How do you add an item to a list in Python?',
        options: ['list.append(item)', 'list.add(item)', 'list.push(item)', 'list.insert(item)'],
        correctAnswers: [0],
        explanation: 'The "append()" method adds an item to a list in Python.'
      }
    ]
  }
];
