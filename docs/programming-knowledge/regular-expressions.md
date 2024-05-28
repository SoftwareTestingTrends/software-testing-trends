---
sidebar_position: 7
title: "Regular Expressions"
metaTitle: "Regular Expressions"
metaDescription: "Using Regular Expressions"
---

# Regular Expressions
```jsx
let sentence = "The dog chased the cat."
let regex = /the/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
```

## Match a literal with different possibilities

```jsx
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
```

## Ignore Case

```jsx
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```

## Extract Matches

```jsx
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 

console.log(result);
```

## Extract Multiple Matches

```jsx
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let result = twinkleStar.match(starRegex);
```

## Match anything with wildcard period

```jsx
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

console.log(result);
```

## Match single character with multiple possibilities

```jsx
let bgRegex = /b[aiu]g/;

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

console.log(result);
```

## Matching a range of letters

```jsx
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex); 

console.log(result);
```

## Match Numbers & Letters

```jsx
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6h-s]/ig;
let result = quoteSample.match(myRegex); 

console.log(result);
```

## Exclude (aka negate) numbers & characters

```jsx
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig; 
let result = quoteSample.match(myRegex); 

console.log(result);
```

## Match characters that occur one or more time

```jsx
let difficultSpelling = "Mississipspi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);

console.log(result);
```

## Match character that occur zero or more Times

```jsx
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);

console.log(result);
```

## Lazy & Greedy Matches

```jsx
let string = "titanic";
let regexGreedy = /t[a-z]*i/; //output: titani
let regexLazy = /t[a-z]*?i/;  //output: ti
 
string.match(regex);

let text = "<h1>Winter is coming</h1>";
let myRegexGreedy = /<.*?>/;  //Greedy <h1>Winter is coming</h1>
let myRegexLazy = /<.*?>/;    //Lazy <h1>

let result = text.match(myRegex);

console.log(result);
```

## Find one or more occurance of a character (say C)

```jsx
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
```

## Match beginning string pattern

```jsx
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(result); //return true
```

## Match ending string pattern

```jsx
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
console.log(result); //true
```

# Short hand classes:

## Match all letters & numbers (also includes underscore)

```jsx
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);
```

## Match everthing but letters & numbers

```jsx
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);  //output: 6
```

## Match all numbers

```jsx
let numString = "Your sandwich will be $5.00";
let numRegex = /\\d/g; // Change this line
let result = numString.match(numRegex).length;
console.log(result);
```

## Match all non-numbers

```jsx
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\\D/g; // Change this line
let result = numString.match(noNumRegex).length;
console.log(result);
```

## Restrict possible username

```jsx
/*
1) If there are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two characters long. Two-letter names can't have numbers.
*/ 

let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\\d*$/; // Change this line
let result = userCheck.test(username);
```

## Match whitespace characters

```jsx
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);
```

## Match non-whitespace characters

```jsx
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\\S/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);
//["W", "h", "i", "t", "e", "s", "p", "a", "c", "e", "i", "s", "i", "m", "p", "o", "r", "t", "a", "n", "t", "i", "n", "s", "e", "p", "a", "r", "a", "t", ...]
```
# References: 
* https://scrimba.com/learn/regularexpressions/

