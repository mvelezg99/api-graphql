# GraphQL API
***
### What is GraphQL?
[GraphQL](https://graphql.org/learn/) itself is defined as a query language for construct APIs giving the client flexibility and freedom to consult exactly for what they need and nothing more, becoming a good alternative for the rest APIs (not in all the cases).

And [***Graph***](https://graphql.org/learn/thinking-in-graphs/) is because GraphQL models your business domain as a graph by defining a *schema* that basically define nodes and connections between them.

### When to use it?
You could use GraphQL to create any API, but in some cases it would just be an unnecessary additional workload.

For example; if you need to create an API that will be consumed by only one web application and will have a few endpoints (Login, register, and two forms to create something in your database) GraphQL would not be the best choice, because that work could be done faster and easier with a REST API.

But if you have to construct an API that would be consumed by different clients and each client has to consume the same information but in a different way or access only to certain parts of that information, implementing GraphQL would be a great idea, because you can create your queries and the clients could access to them and request only for the needed data, for instance; you have an API for books, and is consumed by three clients:
* A mobile app where you can find books by author or genre, but it would return only the title, the author and the genre of the book
* An admin web application to add, edit or consult all the information of the books
* A web application similar to the mobile application where you can find books, but you have more filters and the API would return the author, genre, release year, rating, comments, etc.

So, as you can see, if you construct a REST API you would have to create an endpoint for each request or implement some additional logic to receive the data to be returned, but with GraphQL you could just create a query and the client that consumes the API would request the needed data.

### How to use it?
To implement GraphQL in your applications, the first thing you should do is run your API on a server, and you could implement this in the programming language of your preference, using the libraries and patterns you want. For example I used NodeJS + Express to run my server.

Then you could use a graph data communication layer like [Apollo](https://www.apollographql.com/), so you can easily connect your backend API with your frontend clients, using [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and [Apollo Client](https://www.apollographql.com/docs/tutorial/client/).

Finally you can use a GraphQL package or library depending on your programming language, for example I used [GraphQL.js](https://www.npmjs.com/package/graphql).

After you have all the setup ready, the first thing you want to do is defining your [schema](https://graphql.org/learn/schema/) that is basically all the types, [queries and mutations](https://graphql.org/learn/queries/) that your model will have. For example the CRUD operations that you want to build like consult a value from your database or create a new record.

```ts
type Query {
    getUsers: [User]
    getUser(id: ID!): User
}

type Mutation {
    createUser(user: NewUser!): String
}
```

That was an example of a simple schema where you define your queries and mutations, and you should also define your types:

```ts
type User {
  id: ID
  name: String
  email: String
  gender: String
}

type NewUser {
    name: String!
    email: String!
    gender: String!
}
```

After you get this done, you have to create your [resolvers](https://graphql.org/learn/execution/#root-fields-resolvers) which are esentially the functions that are executed when the client make your queries and mutations.

Here is an example of the resolvers of the queries `getUser` and `createUser` using **JavaSript** and the **GraphQL.js** library:

```js
export const userResolvers = {
    Query: {
        getUser: (_parent, args) => data.users.find(user => user.id === args.id)
    },
    Mutation: {
        createUser: (_parent, args) => {
            const newUser = {
                id: data.users.length.toString(),
                ...args.user
            }
            data.users.push(newUser);
            return 'User created succesfully!'
        }
    }
};
```

Now, you have this running on your server and you can consume your GraphQL API executing the queries and mutations that you made, like this:

```gql
query {
  getUser(id: "1") {
    id
    name
    email
    gender
  }
}
```

and then your API would return:
```json
{
  "data": {
    "getUser": {
      "id": "1",
      "name": "Miguel",
      "email": "mvelezg99@email.com",
      "gender": "MALE"
    }
  }
}
```

But note that you can define what attributes you want to obtain, so for example you can ask for only the name and the email, and you do not have to construct a new query for that:

```gql
query {
  getUser(id: "1") {
    name
    email
  }
}
```
```json
{
  "data": {
    "getUser": {
      "name": "Miguel",
      "email": "mvelezg99@email.com",
    }
  }
}
```

---
#### Thanks for reading
That is all for my part, and now that you know the basics try to create your own GraphQL API!
I hope you liked it and you learned something new today, you can also use my [git repo](https://github.com/mvelezg99/api-graphql/tree/workshop) in the branch `workshop` as the baseline for your project 🤩.
