// @json
import data from '../../../data/data.json';

// @types
import { Characters } from './character.types';

export const getCharacters = (): Characters => {
  const characters = data.characters as Characters;
  return characters;
};
