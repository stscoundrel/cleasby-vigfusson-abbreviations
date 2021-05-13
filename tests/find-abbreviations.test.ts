import { findAbbreviations } from '../src';

describe('Abbreviation finder', () => {
  test('Finds abbreviations in content', () => {
    // From definition of 'vit-stola'
    const content = 'adj. ‘wit-stolen,’ insane, Fas. iii. 300: freq. in mod. usage, = wild, frantic; cp. ham-stola.';
    const expected = [
      'adjective.',
      'compare.',
      'frequent, frequently.',
      'modern.',
    ];

    const result = findAbbreviations(content);

    expect(result).toEqual(expected);
  });

  test('Does not list same abbreviation twice', () => {
    const content = 'adj. cp. freq. mod. adj. cp.';
    const expected = [
      'adjective.',
      'compare.',
      'frequent, frequently.',
      'modern.',
    ];

    const result = findAbbreviations(content);

    expect(result).toEqual(expected);
  });
});
