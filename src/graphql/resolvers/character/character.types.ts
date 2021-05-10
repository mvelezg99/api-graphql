export type Character = {
  _id: string;
  name: string;
  race: Race;
  gender: Gender;
  games: Array<string>;
};

type Gender = 'MALE' | 'FEMALE';

type Race = 'HYLIAN' | 'GERUDO' | 'FAITY';

export type Characters = Array<Character>;
