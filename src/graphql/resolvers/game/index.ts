// @packages
import { IResolvers } from 'graphql-tools';

// @resolvers

export const gameResolver: IResolvers = {
  Query: {
    gameHello: () => 'Game World!',
  },
};
