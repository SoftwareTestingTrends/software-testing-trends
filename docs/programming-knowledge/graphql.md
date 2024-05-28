---
sidebar_position: 10
title: "GraphQL"
metaTitle: "GraphQL"
metaDescription: "GraphQL"
---

## What is GraphQL?
- A query language for API originally built by Facebook
- Allows to combine multiple queries into one request

## What do you need to run a GraphQL API?
* A GraphQL server that serves your API
* A GraphQL client that connects to our API

## GraphQL Type System
- Schema
The schema defines a set of types
- Queries
Queries allow you to get information about specific fields from objects.
- Resolvers
    * Resolvers are responsible for getting the data.
    * Provides the instructions for turning a GraphQL operation into data.
    * Resolvers are the functions that responds to queries and mutations.

## What is GraphQL Schema?
- Defines a set of types.
- Defines the query type

## Data Types in Schema
- Scalar Types
    - Int
    - Float
    - String
    - Boolean
    - Null
    - List
    - Object
    - ID (a unique identifier for each entry in GraphQL)
- Custom Types
```
type Stock {
  id: ID
  price: Float
  closingPrice: Float
  name: String
}
```
- Enumeration Type


## GraphiQL 
GraphiQL is a "graphical interactive in-browser GraphQL IDE."

### What you can do inside GraphiQL?
* Querying Data - Fileds can be selcted by clicking control + space (macOS)
* Checking docs for the data
* __type, __schema
* Creating, updating, deleting data (mutation)

## Operation Types
* Query - allows to query information/data
* Mutation - allows to create/update data
* Subscription - notifies changes in data in real time 

## Handling Data
* **Aliases** 
    - Used to request data for same fields with different argument 
```
{
  repo1: repository(name: "Learning-Grid", owner: "arkhangelsk") {
    createdAt
    id
    description
    homepageUrl
    
  }
  repo2: repository(name: "tech-journal", owner: "arkhangelsk"){
    createdAt
    id
    description
    homepageUrl
  }
}
```

* **Fragments**
    -  Used to request recurring fields and avoid duplication
    -  Useful when populating data into user interface components that use the same data.

```
{
  repo1: repository(name: "Learning-Grid", owner: "arkhangelsk") {
	...repoFields
    
  }
  repo2: repository(name: "tech-journal", owner: "arkhangelsk"){
   ...repoFields
  }
}

fragment repoFields on Repository {
  id
  createdAt
  description
}
```

* **Nested Fields**
The set of fields requested in an operation can be nested within another field.
```
query { 
  viewer { 
    login
    id
    repositories(first: 20) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
}
```
## Naming a query
- You can give a readable and descriptive name to a query. It allows an easy reference when you are looking for a particular query in your codebase
- Query name can be quite helpful for debugging and server-side logging.

Note: Both the query keyword and the query name can be omitted but it's better to include them to make your code less ambiguous.

```
query FirstTwentyRepos{ 
  viewer { 
    login
    id
    repositories(first: 20) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
}
```

## Defining a variable
* You can make your queries much more flexible and dynamic by passing variables using query variables panel.
```
query OrgSTT($login: String!){
  organization(login: $login){
    id
    name
  }
}

//Query Variable:
{ "login": "softwaretestingtrends" }
```

## Defining multiple variables:
```
query OrgSTT($login: String!, $number: Int!){
  organization(login: $login){
    id
    name
    memberStatuses(first: $number) {
      edges {
        node {
          id
        }
      }
    }
  }
}

//Query Variable:
{
  "login": "softwaretestingtrends", 
  "number": 5
}
```

## Mutations
* used for making data modifications
* similar to PUT & DELETE requests in REST
* data is sent as payload in a mutation 

## What is required to make a graphql query:
* Schema definition -> schema defines the query type.
* A resolver for each endpoint.

Schema Example:
Construct a schema, using GraphQL schema language
```js
import { buildSchema} from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

export default schema;
```

Resolver Example:
```js
const app = express();
const root = { hello: () => "Hi, I'm Ambreen." };

app.use('/graphql', graphqlHTTP(
    {
        schema: schema,
        rootValue: root,
        graphiql: true,
    }
))
```
Mutation Example (List of types inside another):
```js
import { buildSchema} from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID,
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
        contacts : [ Contact ]
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Contact {
        firstName : String
        lastName: String
    }
    
    type Query {
        getFriend(id: ID) : Friend
    }

    input FriendInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        email: String
        contacts: [ ContactInput ]
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput) : Friend
    }
`)

export default schema;
```
GraphQL Query:
```
mutation {
  createFriend(input: {
    firstName: "Ambreen"
    lastName: "Khan"
    gender: FEMALE
    contacts: [ {firstName: "Robin", lastName: "Hudson"},
    						{firstName: "James", lastName: "Tiley"}
    ]
    })
  	{
      id
      contacts {
        firstName
        lastName
      }
    }
   
  }

```

### Practice Time
#### Github API:
* Github API Explorer: https://developer.github.com/v4/explorer/
* Github API: 
    * https://github.blog/2016-09-14-the-github-graphql-api/
    * https://docs.github.com/en/free-pro-team@latest/graphql

#### Yelp
* https://www.yelp.com/developers/graphql/guides/intro

#### Public GraphQL Apis
* https://github.com/APIs-guru/graphql-apis
* https://github.com/chentsulin/awesome-graphql

## References:
* https://circleci.com/blog/introduction-to-graphql/