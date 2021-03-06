// @packages
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

// @schemas
import { schema } from './graphql';

const app = express();

app.use(cors());

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
});

server.applyMiddleware({ app });

app.listen(5000, () => {
  console.log(`GraphQL API running on: http://localhost:${5000}/graphql`);
});
