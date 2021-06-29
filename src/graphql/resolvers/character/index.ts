// @packages
import { IResolvers } from 'graphql-tools';

// @resolvers
import {
  getCharacters,
  getCharacter,
  getGamesFromCharacter,
  createCharacter,
} from './character.resolvers';

export const characterResolver: IResolvers = {
  Query: {
    getCharacters,
    getCharacter,
  },
  Mutation: {
    createCharacter,
  },
  Character: {
    games: getGamesFromCharacter,
  },
};
