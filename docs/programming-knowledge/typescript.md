---
sidebar_position: 2
title: "TypeScript"
metaTitle: "TypeScript"
metaDescription: "TypeScript"
---

TypeScript is a superset of JavaScript that adds types to JS variables.

## Type Inference
* In TypeScript, when we declare a variable with an initial value, the variable can never be reassigned a value of a different data type.

## Variable with type any
* When a variable is declared without being assigned an initial value, TypeScript will not try to infer the type and will consider a variable to be of type `any`.
* TypeScript won’t give an error if they’re reassigned to a different type later on. 

## Variable Type Declaration (a.k.a Annotation)
* Type annotations are provided by appending a variable with a colon (:) and the type (e.g., number, string, or any).
```ts
let name: string;
name = "Ambreen"
```
## Object Shape
* TypeScript knows the shape of the variable/object.
* An object’s shape describes, what properties and methods an object contains & what it doesn't contain.

## TypeScript Transpiler
* The TepeScript transpilere is accessible on a bash terminal by typing `tsc` followed by a TypeScript file in .ts extension.

## Uisng tsconfig.json
* Sometimes, you don’t want all the default rules that TypeScript is trying to enforce and that's where you use `tsconfig.json`
* The tsconfig.json file is always placed in the root of your project
* Sample tsconfig.json
```ts
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "strictNullChecks": true
  },
  "include": ["**/*.ts"]
}
```
* `compilerOptions` contains the rules for the TypeScript compiler to enforce.
* `target`, the value "es2017" means the project will be using the 2017 version of EcmaScript standards for JavaScript.
* `module`, this project will be using "commonjs" syntax to import and export modules.
* `strictNullChecks`, variables can only have null or undefined values if they are explicitly assigned those values.
* `include` that determines what files the compiler applies the rules to. In this case ["**/*.ts"] means the compiler should check every single file that has a .ts extension.
* Check out [compiler option documentation](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for more details about available options.

## Functions

### Parameter Type Annotations
* In TypeScript, function parameters are given type annotations with the same syntax as variable declarations: a colon next to the name.
* The type annotations ensure that the parameters are of the correct type
* Parameters that we do not provide type annotations for are assumed to be of type any.

### Optional Parameters
* To indicate that a parameter is intentionally optional, we add a ? after its name. 
* A ? after parameter  name indicates that the parameter is allowed to be undefined and doesn’t always have to be provided.
```ts
function greet(name?: string) {
  console.log(`Hello, ${name|| 'Guest'}!`);
}
 
greet(); // Prints: Hello, Guest!
```
### Default Parameters
* If a parameter is assigned a default value, TypeScript will infer the variable type to be the same as the default value’s type.
* Parameters with default values don’t need a ? after their name, since assigning a default value already implies that they’re optional parameters.
```ts
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}
```
### Inferring Return Types
* TypeScript can also infer the types of values returned by functions by looking at the types of the values after a function’s return statements.
```ts
function showGreeting(name: string) {
  return `Hello, ${name}!`;
}
 
const greeting = showGreeting('Ambreen Khan');
```
### Explicit Return Types
* In order to be explicit about what type a function returns, we can add an explicit type annotation after its closing parenthesis.
```ts
function showGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }
 
  return undefined;
  //Typescript Error: Type 'undefined' is not assignable to type 'string'.
};
```

### Void Return Type
* A proper type annotation for a function that doesn't return any value is `void`
```ts
function showGreeting(name:string): void{
  console.log(`Hello, ${name}!`)
}
```

### Documenting Functions
* A documentation comment is denoted with the first line /** and a final line */. It’s common for each line within the comment to start with an asterisk (*)
```ts
/**
* This is a documentation comment
*/
```
* Documentation comments are especially useful for documenting functions. 
* Place a function’s documentation comment in the code directly above the function declaration.
* You can use special tags within the comment to highlight certain aspects of the function such as:   
  * Use `@param` to describe each of the function’s parameters
  * Use `@returns` to describe what the function returns

```ts
/**
   * Returns the sum of two numbers.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The sum of `x` and `y`
   *
   */
  function getSum(x: number, y: number): number {
    return x + y;
  }
}
```
## Complex Types

### Array Type Annotations
* Type annotation for array types is to put [] after the element type
```ts
let names: string[] = ['Ambreen', 'Fawad'];
```
* An alternative method is to use the `Array<T>` syntax, where `T` stands for the type.
```ts
let names: Array<string> = ['Ambreen', 'Fawad'];
```
* TypeScript arrays throw errors when elements of the wrong type are added
```ts
let names: string[] = ['Ambreen'];
names.push(1234) // Type Error!
```

### Multi-dimensional Arrays
* A multi-dimensional array type can be defined by using `[][]`
```ts
let arr: string[][] = [['str1', 'str2'], ['str3', 'str4']];
```
* The empty array ([]) is compatible with any array type
```ts
let names: string[] = []; // No type errors.
let numbers: number[] = []; // No type errors.
names.push('Ambreen');  
numbers.push(50);
```

### Tuples
* TypeScript allows to define arrays with a fixed sequence of types known as tuple
* Tuple types specify both the lengths and the orders of compatible tuples, and will cause an error if either of these conditions are not met.
```ts
let ageRestriction: [string, number, string, boolean] = ['Is', 18 , 'minimum age requirement?' , false];
```
* Tuples and arrays do not have compatible types within TypeScript and we can’t assign an array to a tuple variable, even when the elements are of the correct type
*  Tuples have fixed lengths and we can't add additional elements to the tuple.
```ts
let responses: [boolean, boolean, boolean] = [true, false, false];
responses[3] = false; // results in Type error as the tuple only has 3 elements.
```

### Array Type Inference
* Type inference always returns arrays. When we want tuples, we need to use explicit type annotations.
* The type inference for below variable is `boolean[]` and enables us to add additional elements
```ts
let responses= [true, false, false];
responses[3] = true; // No type error.
```

### Rest Parameters
* Type annotations for a rest parameter are identical to type annotations for arrays.
```ts
function capabilities(option: string, ...otherOptions: string[]){
  /*function implementation*/
}
```

### Spread Syntax
* For a function call that use lots of arguments, tuple can be used to write clean code. These tuple type annotations guarantee that the types of the elements will be valid function parameters
* An array of tuples could be a convenient way to store the arguments for many recurring function calls.
```ts
//original function call
function gpsNavigate(startLatitudeDegrees:number, startLatitudeMinutes:number, startNorthOrSouth:string, startLongitudeDegrees: number, startLongitudeMinutes: number, startEastOrWest:string, endLatitudeDegrees:number, endLatitudeMinutes:number , endNorthOrSouth:string, endLongitudeDegrees: number, endLongitudeMinutes: number,  endEastOrWest:string) {
  /* navigation subroutine here */
}
```

```ts
let sourceDestination: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
let targetDestination: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];
```
```ts
//Simplified version using the spread opeartor
gpsNavigate(...sourceDestination, ...targetDestination);
```

### Custom Types
* Custom types can be used for type annotations during variable declaration or for function parameters.

### ENUMS (Numeric Enums)
* An enum type can be used in a type annotation like any other type.
* Internally TypeScript processes enum types using numbers (a.k.a numeric enums). Enum values are assigned a numerical value according to their listed order. 

```ts
enum Fruit {
  Mango,
  Apple,
  Banana,
  Peach
}
let fruitOnSale: Fruit = Fruit.Mango;

let ordersArray: [Fruit, number][]= [
  [Fruit.Mango, 10], 
  [Fruit.Apple, 5], 
  [Fruit.Banana, 6], 
  [Fruit.Peach, 10]
];
```
### String Enums 
* TypeScript also allows us to use enums based on strings, referred to as string enums. It requires to write the string values explicitly as shown below:
```ts
enum Direction { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }
```
* The convention is that the string value of the enum variable is the capitalized form of the variable name.
* String enums are much more strict & recommended to use over numeric enums. 

### Object Types
* TypeScript places no restrictions on the types of an object’s properties. They can be enums, arrays, and even other object types.
```ts
let student: {name: string, age: number};
student = {name: 'Majeed', age: 28};

let course: {
  courseName: string, 
  teacher: {name: string, age: number}, 
  students: {name: string, age: number}[], 
};

```
### Function Types
```ts
type stringLen = (arg0: string, arg1: string) => number;
let getNameLength: stringLen;
getNameLength = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};
```
### Generic Types
* Generic Types is a way to create collections of types that share certain formal similarities. 
* `Array<T>` is an example of Generic type as we can substitute any type (either pre-defined or custom) in the place of T.
* Writing generic types with `type typeName<T>` allows to use `T` within the type annotation as a type placeholder.  Later, when the generic type is used, We must substitute T with some type of our choosing, for example string. 
* Writing `T` is just a convention. We could also use any other letter or variable name.

### Generic Function
* We can also use generics to create collections of typed functions.
* Writing generic functions with `function functionName<T>` allows to use `T` within the type annotation as a type placeholder. Later, when the function is invoked, `T` is replaced with the provided type.
```ts
//Function declaration without type
function getFilledArray(value, n) {
  return Array(n).fill(value);
}
//Function with generic type. This ensures that value and the returned array have the same type T
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

getFilledArray<string>('test', 3)
getFilledArray<string>(50, 3)
```
