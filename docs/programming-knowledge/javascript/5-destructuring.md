---
sidebar_position: 6
title: "Destructuring"
metaTitle: "Destructuring"
metaDescription: "Destructuring"
---

* Extracting values from data stored in objects and arrays.
* Destructuring allows us to unpack values from arrays or properties from objects into distinct variables.

## Object Destructuring:

**Example 1:**
```javascript
const student = {
    firstName: "Ambreen",
    lastName: "Khan"
}

const {firstName, lastName} = student;

console.log(firstName);  //Ambreen
console.log(lastName);   //Khan
```
* You can rename the properties using below syntax
```javascript
const {firstName:first, lastName:last} = student;
```

**Example 2:**
```javascript
const student = {
    name: "Ambreen Khan",
    course: "Test Automation"
}

function displayInfo({name,course}){
    return [name, course];
}

console.log(displayInfo(student));
```
**output:**
```
[ 'Ambreen Khan', 'Test Automation' ]
```

**Example 3:**
* If the names of the keys are known for an object, you can destructure those keys as parameters
```javascript
const student = {
    name: "Ambreen Khan",
    course: "Test Automation"
}

function displayInfo(student){
    return [student.name, student.course];
}

console.log(displayInfo(student));
```
**output:**
```
[ 'Ambreen Khan', 'Test Automation' ]
```
**Example: 4**  
* Here, we are passing a destructured object as a default parameter
* If no parameter is passed, we default to destructured object as a parameter 
* We assign an empty object as a default value to let ES6 know that we are working with destructuring

```javascript
function newStudent({name = {first: "Guest", last:"Guest"}, subject = 'Demo Class'}  = {}){
    return [name.first, name.last, subject];
}

console.log(newStudent());
console.log(newStudent({name: {first:'Ambreen', last:'Khan'}}));
console.log(newStudent({name: {first:'Ambreen', last:'Khan'}, subject:'Data Science'}));
```
**output:**
```
[ 'Guest', 'Guest', 'Demo Class' ]
[ 'Ambreen', 'Khan', 'Demo Class' ]
[ 'Ambreen', 'Khan', 'Data Science' ]
```

## Array Destructuring:

**Example: 1**
```javascript
const arr = [1,2,3,4,5];

const [a,b,c] = arr

console.log(a); //1
console.log(b); //2
console.log(c); //3

```
**Example: 2**
```javascript
function getStudents(stu1, stu2){
    return [stu1, stu2];
}

[student1 , student2] = getStudents('Ambreen','Mariam');

console.log(student1); //Ambreen
console.log(student2); //Mariam
```

### Swapping Values in Array using destructuring
```javascript
function swapArrayValues(a,b){
    return [b,a]
}

console.log(swapArrayValues(98, 77));
```
output:
```
[ 77, 98 ]
```