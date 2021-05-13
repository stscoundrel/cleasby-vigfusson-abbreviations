import { getAbbreviationMapping } from './mappings/abbr-mapping';
import { getWorksAndAuthorsMapping } from './mappings/works-and-authors';

export const findAbbreviations = (content: string) : string[] => {
  const result: string[] = [];
  const abbrMap = getAbbreviationMapping();

  abbrMap.forEach((value, key) => {
    if (content.includes(key)) {
      result.push(value);
    }
  });

  return result;
};

export default {
  getAbbreviationMapping,
  getWorksAndAuthorsMapping,
  findAbbreviations,
};
