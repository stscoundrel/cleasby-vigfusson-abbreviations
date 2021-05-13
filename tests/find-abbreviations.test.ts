import { findAbbreviations, findWorksAndAuthors } from '../src';

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

  test('Finds works & authors in content', () => {
    // From definition of 'ráða'
    const content = 'to plan, plot, contrive, or cause one’s death, put to death, betray, Germ. verra’ben; Regin þik réð, hann þik ráða mun, Fm. 22; þú rétt hann, Fas. i. 202; þær ætluðu at konungr mundi hafa rúðit hann, Fms. iv. 312; hann réð Plóg svarta föður-bana sinn, xi. 353; ef kona drepr bónda sinn eða ræðr hann fyrir íllsku sakir, Js. 27; ráða e-m bana, bana-ráð, Nj. 21, 52, Fb. i. 410, Skv. 1. 51:—ráða e-n af, to put out of the way, put to death, Gullþ. 14, Fms. i. 204, Al. 128; sá ótti er nú af ráðinn ok endaðr, Fs. 9; ek hygg at Þóroddr ætli nú af at ráða hingat-kvámur þínar, Eb. 144; ráða e-n frá, to despatch, Ld. 294; ráða e-n af dögum, to put to death; ráða e-n frá ríki, Fms. iii. 18; ráða e-n ofan, to overthrow, Bárð. 164.';
    const expected = [
      'Alexanders Saga. (G. I.)',
      'Bárðar Saga. (D. V.)',
      'Eyrbyggja Saga. (D. II.)',
      'Fornaldar Sögur. (C. II.)',
      'Flateyjar-bók (E. I.)',
      'Fafnis-mál. (A. II.)',
      'Fornmanna Sögur. (E. I.)',
      'Forn-sögur. (D. II.)',
      'Gull-Þóris Saga. (D. II.)',
      'Járnsíða. (B. III.)',
      'Laxdæla Saga. (D. II.)',
      'Njála. (D. II.)',
      'Sigurðar-kviða. (A. II.)',
    ];

    const result = findWorksAndAuthors(content);

    expect(result).toEqual(expected);
  });
});
