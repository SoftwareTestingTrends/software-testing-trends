---
sidebar_position: 5
title: 'Rest Parameter and Spread Operator'
metaTitle: 'Rest Parameter and Spread Operator'
metaDescription: 'Rest Parameter and Spread Operator'
---

Rest and spread are powerful syntax additions to the JavaScript language (ES6)and use the three dots (...)

## Rest parameter:

- The three dots (...) in JavaScript used as an argument in a function definition are known as rest parameter
- Rest parameter has to be the last argument in the function.
- The rest operator always returns an array and allows to use array methods like Array.find e.t.c. on the returned array
- Define the first few arguments for the function, and the rest of the arguments (parameters, object keys, array items) in the function call will be collected and returned as an array.

In below example, notice that a and b are numbers but c is an array of all the remaining arguments.

```javascript
function printAnArgument(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(c[0]);
  console.log(c.length);
}

printAnArgument(1, 2, 3, 4, 5);
```

**output:**

```
1
2
[ 3, 4, 5 ]
3
4
```

- Rest parameters help gather any number of arguments into an array and to do what user want with them.

**Example:**

```javascript
function add(...args) {
  let result = 0;
  for (arg of args) result = result + arg;
  return result;
}

console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5, 6, 7, 8));
```

**output:**

```
3
6
36
```

## Spread operator:

- The spread operator allows expanding elements.
- Any iterable can be spread (array / string / object)

```javascript
const arr = ['Science', 'Biology', 'Chemistry'];
const newArr = ['Computer Science', ...arr];
console.log(newArr);
```

**output:**

```
[ 'Computer Science', 'Science', 'Biology', 'Chemistry' ]
```

- Spread operator can be used as the first argument.

```javascript
const arr = ['Science', 'Biology', 'Chemistry'];
const newArr = [...arr, 'Computer Science'];
console.log(newArr);
```

**output:**

```
[ 'Science', 'Biology', 'Chemistry', 'Computer Science' ]
```

- Allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.

```javascript
function sumValues(a, b, c) {
  return a + b + c;
}

const arr = [1, 2, 3];
sumValues(...arr);
```

- Spread operator can be used to copy an array. This allows performing actions on new array without affecting the original array.

```javascript
const arrOrig = [1, 2, 3];
const arrNew = [...arrOrig];
```

- Using Spread with Strings - Converts a string into array of characters

```
const str = 'Ambreen';
const newStr = [...str];
console.log(newStr);
```

**output:**

```
[ 'A', 'm', 'b', 'r', 'e', 'e', 'n' ]
```

- Using Spread with Objects

Note: This is not a part of the ES6 spec, so you might need to use an extra plugin in your transpiler for this code to work.

```javascript
const course1 = {
  Student1: 'Ambreen',
  Student2: 'Mariam',
  Student3: 'Abdul',
  Student4: 'Karim',
  Student5: 'David',
};

const course2 = {
  Student6: 'Andy',
  Student7: 'Kamran',
  Student8: 'Tim',
  Student9: 'Ferris',
  Student10: 'Mark',
};

let students = { ...course1, ...course2 };

console.log(students);
```

**output:**

```
{ Student1: 'Ambreen',
  Student2: 'Mariam',
  Student3: 'Abdul',
  Student4: 'Karim',
  Student5: 'David',
  Student6: 'Andy',
  Student7: 'Kamran',
  Student8: 'Tim',
  Student9: 'Ferris',
  Student10: 'Mark' }
```

**Note:**
If there are some common properties in the 2 objects, the order of precedence is from left to right, meaning that `course2` will override any keys that are also in `course1`.

- Example: Using spread operator to calculate max/min score of students

```javascript
const studentsMarks = [50, 23, 37, 33, 57, 67, 40, 99, 78, 88];
const maxMarks = Math.max(...studentsMarks);
const minMarks = Math.min(...studentsMarks);
console.log(maxMarks);
console.log(minMarks);
```

output:

```
99
23
```
