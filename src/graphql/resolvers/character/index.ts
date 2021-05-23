// @packages
import { IResolvers } from 'graphql-tools';

// @resolvers
import {
  getCharacters,
  getCharacter,
  getGamesFromCharacter,
} from './character.resolvers';

export const characterResolver: IResolvers = {
  Query: {
    getCharacters,
    getCharacter,
  },
  Character: {
    games: getGamesFromCharacter,
  },
};
