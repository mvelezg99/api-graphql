// @resolvers
import { characterResolver } from './character';
import { gameResolver } from './game';

export const resolvers = [characterResolver, gameResolver];
