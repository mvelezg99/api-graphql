// @types
import { Characters } from './characters.types';

export const getCharacters = (): Characters => {
  return [
    {
      id: 1,
      name: 'Link',
      race: 'Hylian',
    },
    {
      id: 2,
      name: 'Zelda',
      race: 'Hylian',
    },
  ];
};
