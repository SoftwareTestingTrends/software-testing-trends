---
sidebar_position: 8
title: 'Fetch API'
metaTitle: 'Fetch API'
metaDescription: 'Fetch API'
---
## Why use Fetch?

- Generally used with external API's
- Easily get data from local or remote sources.
- It is a replacement for XMLHttpRequest.
- It is a web API that can be used to create requests.
- It is asynchronous and uses Promises.
- Fetch can be used to GET, POST, PUT, or DELETE data
- Error handling is simple
- Fetch Syntax:

```js
fetch(url, { options });
```

## Reading data from local text file

```text
//example.txt file
You'll be successful. Keep working!
```

```js
fetch('example.txt')
  .then(response => response.text())
  .then(text => console.log(text));
```

## Reading data from a local JSON File
```json
//people.json
[
    {
        "name": "John",
        "age": 20
    }, 
    {
        "name": "Mary",
        "age": 24
    }, 
    {
        "name": "Bob",
        "age": 32
    }
]
```

```js
fetch('people.json')
    .then( response => response.json())
    .then( json => {
        json.forEach( person => {
            console.log(person.name);
        })
    })

```

## Reading data from an API using Promises
**Get Request:**

- To handle promises returned by fetch(), we chain .then() methods
- The .json() method converts a returned promise to a JSON object.
- Format
```javascript
fetch('https://api-url-goes-here.com/endpoint')
  .then(
    response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    },
    networkError => {
      console.log(networkError.message);
    }
  )
  .then(jsonResponse => {
    return jsonResponse;
  });
```

- Example

```js
fetch("https://jsonplaceholder.typicode.com/photos/10") 
.then(res => res.json()) 
.then(json => { 
    console.log(json)
    const div = document.createElement('div');
    const img = document.createElement('img');
    div.innerHTML = json.title;
    img.src = json.url; 
    document.body.appendChild(div);
    document.body.appendChild(img);
}).catch(err => console.error(err));
```

**Post Request:**
Fetch POST call takes two arguments

1. An endpoint of the API
2. An object that contains information needed for the POST request

```javascript
fetch('https://api-url-goes-here.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({ id: '200' }),
})
  .then(
    response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    },
    networkError => {
      console.log(networkError.message);
    }
  )
  .then(jsonResponse => {
    return jsonResponse;
  });
```
## Reading data from an API using async await format

**async/await Get Request:**
- Format
```javascript
const getData = async () => {
  try {
    const response = await fetch('https://api-url-goes-here.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
};
```
- Example
```js
async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
     let html = "";
    
    posts.slice(0,5).forEach( post => {  //to get first 5 posts
        const title = post.title;
        const body = post.body;
        html += `
            <div class='post'>
                <h3>${title}</h3>
                <p>${body}</p>
            </div>
        `;
    });
    document.body.innerHTML = html;
}

getPosts();
```

**async/await Post Request:**
* Example:
```javascript
const getData = async () => {
  try {
    const response = await fetch('https://api-url-goes-here.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({ id: 200 }),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
};
```

* Example:
```js
async function submitPost() {
    let title = "Sample Title";
    let body = "Sample Body";

    const options = {
        method: "POST",
        body: JSON.stringify({ title: title, body: body }),
        headers: new Headers({
        "Content-Type": "application/json"
        })
    };

    const postPromise = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        options
    );
  
    if(postPromise.ok) {
        const post = await postPromise.json();
        console.log('post', post);
    } else {
        console.log('error');
    }
}

submitPost();
```

