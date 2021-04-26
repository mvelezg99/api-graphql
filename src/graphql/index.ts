// @packages
import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

// @resolvers
import { resolvers } from './resolvers';

// @schemas
import rootSchema from './schemas/schema.graphql';

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [rootSchema],
  resolvers,
});
