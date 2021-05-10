// @packages
import { IResolvers } from 'graphql-tools';

// @resolvers
import { getCharacters } from './character.resolvers';

export const characterResolver: IResolvers = {
  Query: {
    getCharacters,
  },
};
