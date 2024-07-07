---
sidebar_position: 10
---

# JavaScript

# What are truthy & falsy values in JavaScript?
* Truthy: Any value that is non-falsy is a truthy value
* Falsy:
   * A set of unique values that evaluate to false.
   * Falsy values include:
      * 0
      * Empty strings like " " or ' '
      * null (means there is no value at all)
      * undefined (means no value assigned to a declared variable)
      * NaN (Not a Number)
      * false

# What are the differences between const, let, and var?
## var:
The var keyword is used in pre-ES6 versions of JS.
```var status = 'Passed';```

## let:
```
let status = 'Passed';
let empNumber;
```
* If no value is assigned to a variable that is declared using the let keyword, it will automatically have a value of undefined.
* You cannot redefine a variable that has already been declared using let keyword.

## const:
```
const color = 'Blue';
```
* Constant variables must be assigned a value at the time of declaration. If we declare a const variable without a value, it will result in SyntaxError.
* A const variable cannot be reassigned as it is a constant. If we try to reassign a const variable, it will result in a TypeError. Please note that it is applicable only for primitive data types (i.e. Strings, Numbers, Boolean, Null, Undefined & Symbol)
* You can mutate a const variable if it is an object
* A const variable cannot be re-declared with the same name.

# What is the difference between '==' & '===' equality in JS?**

In JavaScript, the `==` (double equals) and `===` (triple equals) operators are used for comparison, but they behave differently. Here's the difference between them:

1. **Loose Equality (`==`):**
   - The `==` operator performs type coercion, meaning it converts the operands to the same type before making the comparison.
   - If the operands are of different types, JavaScript will attempt to convert one or both of them to a common type.
   - After the conversion, it performs a value comparison.
   - Example:
     ```javascript
     5 == '5'; // true (string '5' is coerced to a number)
     ```

2. **Strict Equality (`===`):**
   - The `===` operator, also known as strict equality, does not perform type coercion.
   - It checks both the value and the type of the operands.
   - If the operands are of different types, the comparison evaluates to `false` without any type conversion.
   - Example:
     ```javascript
     5 === '5'; // false (number 5 is not equal to string '5' in both value and type)
     ```

In summary:
- Use `==` when you want to perform loose equality with type coercion.
- Use `===` when you want to perform strict equality without type coercion.

It is generally recommended to use `===` for equality comparisons in JavaScript, as it avoids unexpected type coercion issues. It provides a more predictable behavior and helps prevent subtle bugs in your code.

# What is the difference between synchronous & asynchronous code in JavaScript?**

synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn't have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user.

In JavaScript, synchronous and asynchronous refer to the way code execution is handled and how tasks are processed. These concepts are particularly important when dealing with operations that may take time, such as network requests, file I/O, or other asynchronous tasks. Here's the difference between synchronous and asynchronous in the context of JavaScript:

1. **Synchronous:**
   - **Execution Flow:** In a synchronous program, code is executed sequentially, one statement at a time. Each statement waits for the previous one to complete before moving on to the next.
   - **Blocking Nature:** Synchronous code is blocking, meaning that the program is paused or blocked during the execution of a time-consuming task, such as fetching data from a server. This can lead to a potential delay in responsiveness.

   **Example:**
   ```javascript
   console.log('Start');
   const result = getData();  // Synchronous function that may take time
   console.log(result);
   console.log('End');
   ```

2. **Asynchronous:**
   - **Execution Flow:** In an asynchronous program, code does not wait for time-consuming tasks to complete. Instead, it continues with the next statement, and a callback or a promise handles the result of the asynchronous task when it's ready.
   - **Non-Blocking Nature:** Asynchronous code is non-blocking, allowing the program to continue its execution while waiting for asynchronous tasks to finish. This helps improve the responsiveness of applications.

   **Example using Callbacks:**
   ```javascript
   console.log('Start');
   getDataAsync((result) => {
     console.log(result);
   });
   console.log('End');
   ```

   **Example using Promises:**
   ```javascript
   console.log('Start');
   getDataAsync()
     .then((result) => {
       console.log(result);
     })
     .catch((error) => {
       console.error(error);
     })
     .finally(() => {
       console.log('End');
     });
   ```

**Key Differences:**

- **Execution Flow:**
  - **Synchronous:** Executes code sequentially, blocking the program during time-consuming tasks.
  - **Asynchronous:** Executes code non-sequentially, allowing the program to continue while waiting for asynchronous tasks to complete.

- **Blocking Nature:**
  - **Synchronous:** Blocking; each statement waits for the previous one to complete.
  - **Asynchronous:** Non-blocking; code continues execution while asynchronous tasks are in progress.

- **Handling Asynchronous Tasks:**
  - **Synchronous:** Requires explicit handling of asynchronous tasks (e.g., callbacks, event listeners).
  - **Asynchronous:** Provides built-in mechanisms like Promises, async/await to handle asynchronous tasks more conveniently.

- **Responsiveness:**
  - **Synchronous:** May lead to slower responsiveness, especially in web applications.
  - **Asynchronous:** Improves responsiveness by allowing other tasks to continue while waiting for asynchronous operations.

- **Examples of Asynchronous Tasks:**
  - **Synchronous:** Basic arithmetic operations, simple function calls.
  - **Asynchronous:** Fetching data from an API, reading files, handling user input events.

In modern JavaScript, asynchronicity is commonly managed using Promises and async/await syntax, making it easier to work with asynchronous code and improving code readability. This is particularly important in web development where responsiveness is crucial for a positive user experience.
