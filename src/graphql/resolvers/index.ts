// @resolvers
import { IResolvers } from 'graphql-tools';

const helloWorld = (): string => {
  return 'hello world!';
};

const userResolver: IResolvers = {
  Query: {
    helloWorld,
  },
};

export const resolvers = [userResolver];
