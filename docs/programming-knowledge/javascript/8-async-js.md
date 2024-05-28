---
sidebar_position: 9
title: 'Asynchronous Javascript'
metaTitle: 'Asynchronous Javascript'
metaDescription: 'Asynchronous Javascript'
---

## Difference between the Asynchronous and Synchronous Code

- synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing.
- Asynchronous code doesn't have to wait – program can continue to run. This is done to keep the site or app responsive, reducing waiting time for the user.

## What is a Promise?

- [Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

- Example 1:

```js
const randomBool = Boolean(Math.round(Math.random())); // returns either 0 or 1

function performOperation() {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => console.log('pending'), 1000);
    setTimeout(() => {
      clearInterval(interval);
      if (randomBool) resolve('Successful Operation');
      else reject(new Error('Something went wrong....'));
    }, 4000);
  });
}

(async function() {
  try {
    const result = await performOperation();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
```

- Example 2 (Use of finally block):

```js
const promise = () => {
  return new Promise((resolve, reject) => {
    reject(new Error('Something went wrong...'));
  });
};

const resolver = async promise => {
  try {
    await promise();
  } catch (err) {
    console.log(err);
  } finally {
    return 'Returned Value.';
  }
};

(async function() {
  const test = await resolver(promise);
  console.log(test);
})();
```

* Example 3 (Fulfill all promises - Promise.all())

```js
const startTransaction = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res(true)
      },3000)
})       
} 
const initPayment = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res(true)
      },2000)
})
}
const launchVerification = ()=>{
    return new Promise((res) => {
      setTimeout(()=>{
            res(true)
      },2000)
})
}

(async function() {
    try{
          const result = await Promise.all([startTransaction(),initPayment(),launchVerification()])
          console.log(result)
            
    }catch(err){
        console.log(err)
    }
})();
```

* Example 4 (Fulfill the fastest - Promise.race() )

```js
const taskA = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res('a')
      },100)
})       
} 
const taskB = ()=>{
   return new Promise((res)=>{
      setTimeout(()=>{
            res('b')
      },2000)
})
}
const taskC = ()=>{
    return new Promise((res) => {
      setTimeout(()=>{
            res('c')
      },10000)
})
}

(async function() {
    try{
          const result = await Promise.race([taskA(),taskB(),taskC()])
          console.log(result)
    
    }catch(err){
        console.log(err)
    }
})();
```


## What is async/await?

- [Async/await](https://javascript.info/async-await)
- [How to Use Fetch with async/await](https://dmitripavlutin.com/javascript-fetch-async-await/)
- Example

```js
const userApi = 'https://randomuser.me/api/';
try {
  const response = await fetch(userApi);
  const userData = await response.json();
  const firstUser = userData.results[0].name.first;
  const secondUser = userData.results[0].name.last;
  console.log(`${firstUser} and ${secondUser} are friends`);
} catch (e) {
  console.log('Error:', e);
}
```

## Promise Chaining

- [Introduction to the JavaScript promise chaining](https://www.javascripttutorial.net/es6/promise-chaining/)
- Example

```js
const userApi = 'https://randomuser.me/api/';
fetch(userApi)
  .then(response => response.json())
  .then(json => {
    const firstUser = json.results[0].name.first;
    fetch(userApi)
      .then(response => response.json())
      .then(json => {
        const secondUser = json.results[0].name.first;
        console.log(`${firstUser} and ${secondUser} are friends`);
      });
  })
  .catch(err => console.log(err));
```

### Closures

- https://www.youtube.com/watch?v=3a0I8ICR1Vg

## Additional Resources:

- [Async Javascript Tutorial For Beginners (Callbacks, Promises, Async Await)](https://www.youtube.com/watch?v=_8gHHBlbziw)
- [Understanding the Event Loop, Callbacks, Promises, and Async/Await in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)
