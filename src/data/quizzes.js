export const javascriptQuizzes = [
  {
    id: 'js1',
    title: 'JavaScript Basics',
    questions: [
      {
        question: 'How do you declare a variable in JavaScript?',
        options: ['var x;', 'variable x;', 'v x;', 'let x;'],
        correctAnswers: [0, 3], // Both var and let are correct
        explanation: 'In JavaScript, you can declare variables using var, let, or const.',
      },
      {
        question: 'Which of the following is NOT a valid JavaScript data type?',
        options: ['String', 'Number', 'Float', 'Boolean'],
        correctAnswers: [2], // "Float" is not a native JS type
        explanation: 'JavaScript has types like String, Number, and Boolean, but "Float" is not a separate type.',
      },
      {
        question: 'What will `console.log(typeof null)` print?',
        options: ['"null"', '"undefined"', '"object"', '"number"'],
        correctAnswers: [2], // typeof null returns "object"
        explanation: 'Due to a legacy bug in JavaScript, `typeof null` returns "object".',
      },
      {
        question: 'Which keyword is used to define a function in JavaScript?',
        options: ['def', 'function', 'func', 'define'],
        correctAnswers: [1], // "function" is correct
        explanation: 'Functions in JavaScript are declared using the "function" keyword.',
      },
      {
        question: 'Which of the following statements is TRUE about "const" variables?',
        options: [
          'They cannot be reassigned.',
          'They can be redeclared in the same scope.',
          'They are automatically hoisted to the top of the scope.',
          'They can only store numbers.',
        ],
        correctAnswers: [0], // "const" variables cannot be reassigned
        explanation: '"const" variables cannot be reassigned after they are declared.',
      },
      {
        question: 'What will be the output of `console.log(2 + "2")` in JavaScript?',
        options: ['4', '"22"', 'Error', 'NaN'],
        correctAnswers: [1], // JavaScript converts 2 into a string and concatenates
        explanation: 'JavaScript performs type coercion and converts the number to a string, resulting in "22".',
      },
    ],
  },
  {
      id: 'es6-1',
      title: 'ES6 Features',
      questions: [
        {
          question: 'Which keyword is used to create a constant variable in ES6?',
          options: ['let', 'var', 'const', 'static'],
          correctAnswers: [2],
          explanation: 'The "const" keyword is used to declare variables whose values cannot be reassigned.',
        },
        {
          question: 'What is the output of `[1, 2, 3].map(x => x * 2)`?',
          options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', 'Error'],
          correctAnswers: [1],
          explanation: 'The .map() function applies a transformation to each element, doubling the values.',
        },
        {
          question: 'Which new loop was introduced in ES6 to iterate over iterable objects?',
          options: ['for', 'forEach', 'for...in', 'for...of'],
          correctAnswers: [3],
          explanation: 'The "for...of" loop is introduced in ES6 for iterating over iterable objects like arrays and strings.',
        },
        {
          question: 'Which ES6 feature allows function parameters to have default values?',
          options: ['Rest parameters', 'Default parameters', 'Spread operator', 'Arrow functions'],
          correctAnswers: [1],
          explanation: 'Default parameters allow function parameters to have predefined values if no argument is passed.',
        },
        {
          question: 'What does the spread operator (...) do in JavaScript?',
          options: [
            'Copies an object or array',
            'Joins two arrays into one',
            'Spreads elements of an iterable',
            'All of the above',
          ],
          correctAnswers: [3],
          explanation: 'The spread operator is used for copying, merging, and spreading elements in arrays/objects.',
        },
      ],
    },
    {
      id: 'react-1',
      title: 'React Components',
      questions: [
        {
          question: 'What is the correct syntax to create a functional component in React?',
          options: [
            'function MyComponent() { return <div>Hello</div>; }',
            'const MyComponent = () => { return <div>Hello</div>; }',
            'Both A and B',
            'class MyComponent extends Component { render() { return <div>Hello</div>; } }',
          ],
          correctAnswers: [2],
          explanation: 'Both function declarations and arrow functions can be used to create functional components.',
        },
        {
          question: 'What is the purpose of React.Fragment?',
          options: [
            'To group multiple elements without adding extra nodes to the DOM',
            'To replace the main <div> in a component',
            'To create reusable component structures',
            'To define global styles',
          ],
          correctAnswers: [0],
          explanation: 'React.Fragment allows grouping multiple elements without adding an extra node to the DOM.',
        },
        {
          question: 'Which of the following is a valid way to pass props to a component?',
          options: [
            '<MyComponent name="John" />',
            '<MyComponent props={{name: "John"}} />',
            '<MyComponent {name="John"} />',
            'None of the above',
          ],
          correctAnswers: [0],
          explanation: 'Props are passed as attributes in JSX like `<MyComponent name="John" />`.',
        },
        {
          question: 'What is the purpose of "key" prop in React lists?',
          options: [
            'It improves performance by helping React identify which items changed',
            'It makes the list items bold',
            'It acts as a unique identifier in the database',
            'It changes the order of elements dynamically',
          ],
          correctAnswers: [0],
          explanation: 'The "key" prop helps React efficiently update and render list items by identifying changes.',
        },
        {
          question: 'Which hook is used to handle side effects in functional components?',
          options: ['useEffect', 'useState', 'useContext', 'useReducer'],
          correctAnswers: [0],
          explanation: 'useEffect is used for handling side effects like fetching data or updating the DOM.',
        },
      ],
    },
    {
      id: 'react-2',
      title: 'State & Props in React',
      questions: [
        {
          question: 'What is the difference between state and props in React?',
          options: [
            'State is immutable, while props can be changed',
            'Props are passed from parent to child, while state is managed within the component',
            'Props can only be used in class components',
            'State and props are the same',
          ],
          correctAnswers: [1],
          explanation: 'Props are passed from parent to child, while state is managed internally within a component.',
        },
        {
          question: 'Which React hook is used to declare a state variable in a functional component?',
          options: ['useState', 'useEffect', 'useReducer', 'useMemo'],
          correctAnswers: [0],
          explanation: 'useState is the primary hook for declaring state variables in functional components.',
        },
        {
          question: 'How do you update state in a React class component?',
          options: [
            'this.state = { count: 2 }',
            'this.setState({ count: 2 })',
            'setState({ count: 2 })',
            'count = 2',
          ],
          correctAnswers: [1],
          explanation: 'State in class components is updated using "this.setState({ newState })".',
        },
        {
          question: 'Can a child component modify its props directly?',
          options: ['Yes', 'No', 'Only if using useState', 'Only in class components'],
          correctAnswers: [1],
          explanation: 'Props are read-only in React and cannot be modified by child components.',
        },
        {
          question: 'What happens when a state variable changes in React?',
          options: [
            'The entire application re-renders',
            'Only the component that owns the state re-renders',
            'Nothing changes until props change',
            'React calls useEffect immediately',
          ],
          correctAnswers: [1],
          explanation: 'Only the component that owns the state re-renders when its state changes.',
        },
      ],
    },
  ];
  

