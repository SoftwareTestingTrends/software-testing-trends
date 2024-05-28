---
sidebar_position: 2
title: "Quick Reference"
metaTitle: "Quick Referencee"
metaDescription: "TQuick Reference"
---

## Data Types in JavaScript

* There are seven fundamental data types in JavaScript:

  Number, String, Boolean, Null, Undefined, Symbol, Object

* The typeof keyword returns the data type of a value.

```javascript
const num = 100;
console.log(typeof num); //output: number 
```

## var, let & const

**var:**

* The var keyword is used in pre-ES6 versions of JS.

```javascript
var status = 'Passed';
```

**let:** 

```javascript
let status = 'Passed';
let empNumber;
```

* If no value is assigned to a variable that is declared using the let keyword, it will automatically have a value of undefined.
* You cannot redefine a variable that has already been declared using let keyword.

**const:** 

```javascript
const color = 'Blue';
```

* Constant variables must be assigned a value at the time of declaration. If we declare a const variable without a value, it will result in SyntaxError.
* A const variable cannot be reassigned as it is a constant. If we try to reassign a const variable, it will result in a TypeError. Please note that it is applicable only for primitive data types (i.e. Strings, Numbers, Boolean, Null, Undefined & Symbol)
* You can mutate a const variable if it is an object
* A const variable cannot be re-declared with the same name.

## Hoisting
* In JavaScript, all declarations are moved to the top of the current scope (to the top of the current script or the current function). This is known as Hoisting.
* Variables and constants declared with let or const are not hoisted.
* JavaScript only hoists declarations, not initializations. (Actually, it does hoist, but it is in a TDZ (Temporal Dead Zone) so we can not access it.

## Template Strings/Template Literals:

* JavaScript Template literals are the Literals or Strings allowing Expression in between them.
* The delimiter of a template literal is the backtick ``` character
* An expression inside the literal is enclosed in curly braces {} with a preceding dollar sign $

```javascript
function getDate(){
    const year = new Date().getFullYear();
    //return "The year is: " + year;    //This is ES5 format

    //Using ES6 format:
    return `This year is: ${year}`;
}

console.log(getDate());
```

## Thruthy & Falsy Values

* **Truthy:** Any value that is non-falsy is a truthy value
* **Falsy:** Falsy values include: 0, Empty strings like " " or ' ', null (means there is no value at all), undefined (means no value assigned to a declared variable), NaN (Not a Number)

## Short-circuit evaluation

```javascript
let signInName = username || 'Guest';
```
In above example || statements check the left-hand condition first, so the variable signInName will be assigned the value of username if is truthy (or available), and it will be assigned the value of 'Guest' if the username is falsy. This concept is known as short-circuit evaluation.

## Ternary Operator:

```javascript
let isPass = true;

isPass? console.log('You Passed the exam!') : console.log('oh, you failed. Try Again!');
```

## Function Declarations:

```javascript
function getStatus(){
  console.log('Passed!');
}

getStatus();  //output: Passed!
```

```javascript
function getStatus(name){
  console.log(name + ', You have Passed!');
}

getStatus('Ambreen');  //output: Ambreen, You have Passed!
```

## Default Parameters in ES6:

```javascript
function greeting (name = 'Guest') {
  console.log(`Hi ${name}!, Welcome to Software Testing Trends.`)
}

greeting('Ambreen') // Output: Hi Ambreen!, Welcome to Software Testing Trends.!
greeting() // Output: Hi Guest!, Welcome to Software Testing Trends.
``` 

NOTE: 
* When a value of undefined is passed as the value, it is considered invalid and the default value is assigned to the parameter. 
* If null is passed as the value, it is considered valid and null is assigned to the parameter.

**Learn more:** https://www.sitepoint.com/es6-default-parameters/

## Function Expressions:

```javascript
const exerciseDay = function(day){
  if (day === 'Wednesday'){
    return 'Get Ready for exercise class...';
  } else {
    return 'Enjoy, just relax...';
  }
}

console.log(exerciseDay('Tuesday'));
```

## Arrow Functions:
* Arrow functions provide a concise syntax for writing function expressions.
* They utilize a new token, =>, that looks like a fat arrow.
* Arrow functions are anonymous and simplify function scoping.
* The parenthesis for an argument can be removed if there is a single argument. 
* Curly brackets aren’t required if there is only one expression present in the function body.
* If there is no argument, still we need to have empty parenthesis.
* Arrow functions change the way this binds in functions. This the value of the keyword this inside of an arrow function is its enclosing context.
* The arrow function does not get their own keyword arguments.
* If an arrow function is inside of another function, the arguments keyword can be accessed that will list the outer functions arguments.
* Arrow functions should never be used as methods in objects as it will result in the incorrect value of this.

```javascript
//ES5 Function Syntax
const sum1 = function(a, b){
    return a + b;
}

//ES6 Arrow Function Syntax
const sum2 = (a, b) => a + b;    //Implicit Return

console.log((sum1(2,5)));
console.log((sum2(3,6)));
```

```javascript
//An arrow function with single argument and single exression in function body 
const num1 = number => number * 2; 

//If there is no argument, still we need to have empty parenthesis
const num2 = () => 2+2;
```

```javascript
//An arrow function that iterates over an array of numbers and returns a new array with each value doubled.

const sampleArray = [1,2,3,4,5];
const doubleNumber = arr => arr.map(value*2);
console.log(doubleNumber(sampleArray));
```

```javascript
//Write a function called which doubles an array and then only returns the values that are divisible by 5.

const doubleAndFilter = arr => arr.map(value => value*2).filter(num => num % 5 ===0);

const sampleArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(doubleAndFilter(sampleArr));

```

## Functions are first-class objects

* Functions can be assigned to variables and then reassigned to new variables.
* JavaScript functions can have properties such as .length and .name and methods like .toString()
* Functions can be passed as parameters.

```javascript
const determineGeoLocationOfTheStore = () => {
  console.log('Inside Geolocation Method...')
}

// Write your code below
const geoLoc = determineGeoLocationOfTheStore;

geoLoc();

console.log(geoLoc.name); 

//output:

//"Inside Geolocation Method..."
//"determineGeoLocationOfTheStore"
```

## High-order Function:

* A function that either accepts functions as parameters, returns a function or can do both are called high-order functions.
* When a function is passed as an argument to another function, then function name is mentioned without the parentheses. (as we don't want to call the function at this stage)
* Function parameters can also be anonymous functions.

```
function say(){
    console.log("Never waste your time!");
}

setInterval(say, 1000);
```
In the above example, setInterval is a high order function. 

Anonymous Function Example:
```
setInterval(function() {
    console.log("From inside anonymous function");
}, 1000);
```

**Note:** When the above code is run, it returns a number. You can use clearInterval() function while passing that number to clear the interval and stop the execution.

## Call-back Functions:

* Functions that are passed in as parameters and then invoked are called callback functions as they get called during the execution of the higher-order function.

## Working with Arrays:

* Elements in an array declared with const remain mutable (i.e. the contents of a const array can be changed, but we cannot reassign a new array or a different value to a const array.)
* Use array **.length** property to determine the number of elements in an array.
```javascript
const tasks = ['Task 1', 'Task 2', 'Task 3'];
tasks.length  //output: 3
```
* Use **.push()** method to add items to the end of an array. It can take a single argument or multiple arguments that are separated by commas.
* .push() is also referred to as a destructive array method since it mutates(changes) the initial array.

```javascript
const tasks = ['Task 1', 'Task 2', 'Task 3'];
tasks.push('Task 4', 'Task 5');
```
* Use **.pop()** method to remove the last item of an array. This method returns the value of the last element.
* This method also mutates the original array.

```javascript
const tasks = ['Task 1', 'Task 2', 'Task 3'];
const last = tasks.pop();
```

* Use **shift()** method to remove the first element from an array. This method returns the removed element.

```javascript
const tasks = ['Task 1', 'Task 2', 'Task 3'];
const first = tasks.shift();
```

* Use **unshift()** method to add one or more elements to the beginning of an array. This method returns the new length of the array.

```javascript
const tasks = ['Task 1', 'Task 2', 'Task 3'];
const total = tasks.unshift('Task 0');
console.log(total);  //output: 4
```

* Use **slice()** method to get a portion of an array into a new array object selected from beginning to end (end not included).
* Note that .slice() is non-mutating. It does not change elements from the original array.

```javascript
const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];
const total = tasks.slice(1,3);
console.log(total);  //output: ["Task 2", "Task 3"]
```

* Use **indexOf()** method to get the first index at which a given element can be found in the array. It will return -1 if the element is not present.

```javascript
const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];
const index = tasks.indexOf('Task 3');
console.log(index);  //output: 2
```

## Additional Notes: 

https://softwaretestingtrends.com/es6-quick-reference/


