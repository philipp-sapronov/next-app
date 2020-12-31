import { UK, RU } from '../constants/languages';

export const isValidLanguage = (l: string) => {
  return l === UK || l === RU;
};
