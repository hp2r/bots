import { DirectionTypes } from './types/directions';

type Alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const caesarCipher = (
  string: string,
  shift: number,
  direction: DirectionTypes = DirectionTypes.LEFT
) => {
  const alphabet: Alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let encodedText: string = '';

  if (shift > 26) {
    shift = shift % 26;
  }

  let i: number = 0;
  while (i < string.length) {
    if (alphabet.indexOf(string[i]) !== -1) {
      const alphabetIndex: number = alphabet.indexOf(string[i]);

      if (alphabet[alphabetIndex + shift]) {
        encodedText += alphabet[alphabetIndex + shift];
      } else {
        encodedText += alphabet[alphabetIndex + shift - 26];
      }
    }
    i++;
  }

  return encodedText;
};