// @packages
import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

// @resolvers
import { resolvers } from './resolvers';

// @schemas
import { schemas } from './schemas';

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: schemas,
  resolvers,
});
