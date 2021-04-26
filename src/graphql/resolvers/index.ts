// @packages
import { IResolvers } from 'graphql-tools';

// @resolvers
import { getCharacters } from './characters';

export const resolvers: IResolvers = {
  Query: {
    hello: () => 'Hello World!',
    getCharacters,
  },
};
