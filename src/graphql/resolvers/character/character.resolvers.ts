// @json
import data from '../../../data/data.json';

// @types
import {
  Character,
  Characters,
  CreateCharacterArgs,
  getCharacterArgs,
} from './character.types';
import { Games } from '../game/game.types';

export const getCharacters = (): Characters => {
  const characters = data.characters as Characters;
  return characters;
};

export const getCharacter = (
  _parent: unknown,
  args: getCharacterArgs
): Character => {
  const character = data.characters.find(
    (character) => character._id === args._id
  ) as Character;
  return character;
};

export const getGamesFromCharacter = (parent: Character): Games => {
  const games = data.games.filter((game) => parent.games.includes(game._id));
  return games;
};

export const createCharacter = (
  _parent: unknown,
  args: CreateCharacterArgs
): string => {
  const newCharacter = {
    _id: data.characters.length.toString(),
    ...args.character,
  };

  data.characters.push(newCharacter);
  return 'Character created succesfully!';
};
