---
sidebar_position: 1
title: "APIs"
metaTitle: "Rest API's"
metaDescription: "Rest API's"
---

## What is an API?
* API - Application programming interface
* An API specifies how software components should interact.

## What is JSON?
* JSON - JavaScript Object notation
* It is based on JS object literals
* It is data representation format
* lightweight format for storing and transporting data
* Often used to exchange data between client and server
* "Self-describing" and easy to understand

### JSON Data Types
* Strings
* Number
* Boolean
* Array
* Object
* Null

### JSON rules
* It must contain key/value pairs
* Must use double quotes for keys and strings
* data must be a valid JSON data type
* data must be seperated by commas
* Curly brackets holds objects and square brackets hold arrays
```js
const user = {
    name: "Tylor",
    age: 30
}
const json = JSON.stringify(user)
console.log(json)
//Output:
{"name":"Tylor","age":30}
```

## Public API's
[Free Public APIs](https://thetechjournal.netlify.app/apis/Free-Public-APIs)

## Making API Calls
[Making an HTTP Request or REST API call in NodeJS](https://thetechjournal.netlify.app/apis/Making-an-HTTP-Request-or-REST-API-call-in-Node-JS)

## Create API's
[DreamFactory API](https://github.com/dreamfactorysoftware/dreamfactory)

## Mocking API Calls
* [Mocky](https://designer.mocky.io/)
