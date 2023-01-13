import { findAbbreviations, findWorksAndAuthors } from '../src';

describe('Abbreviation finder', () => {
  test('Finds abbreviations in content', () => {
    // From definition of 'vit-stola'
    const content = 'adj. ‘wit-stolen,’ insane, Fas. iii. 300: freq. in mod. usage, = wild, frantic; cp. ham-stola.';

    const expected = new Map();
    expected.set('adj.', 'adjective.');
    expected.set('cp.', 'compare.');
    expected.set('freq.', 'frequent, frequently.');
    expected.set('mod.', 'modern.');

    const result = findAbbreviations(content);

    expect(result).toEqual(expected);
  });

  test('Recognises abbrs that were hidden by "or" structure in 1.0.0', () => {
    // From definition of 'hval-reið'
    const content = 'f. = hvalreki, Lv. 58.';

    const expected = new Map();
    expected.set('f.', 'feminine.');
    expected.set('v.', 'vide.');

    const result = findAbbreviations(content);

    expect(result).toEqual(expected);
  });

  test('Finds works & authors in content', () => {
    // From definition of 'ráða'
    const content = 'to plan, plot, contrive, or cause one’s death, put to death, betray, Germ. verra’ben; Regin þik réð, hann þik ráða mun, Fm. 22; þú rétt hann, Fas. i. 202; þær ætluðu at konungr mundi hafa rúðit hann, Fms. iv. 312; hann réð Plóg svarta föður-bana sinn, xi. 353; ef kona drepr bónda sinn eða ræðr hann fyrir íllsku sakir, Js. 27; ráða e-m bana, bana-ráð, Nj. 21, 52, Fb. i. 410, Skv. 1. 51:—ráða e-n af, to put out of the way, put to death, Gullþ. 14, Fms. i. 204, Al. 128; sá ótti er nú af ráðinn ok endaðr, Fs. 9; ek hygg at Þóroddr ætli nú af at ráða hingat-kvámur þínar, Eb. 144; ráða e-n frá, to despatch, Ld. 294; ráða e-n af dögum, to put to death; ráða e-n frá ríki, Fms. iii. 18; ráða e-n ofan, to overthrow, Bárð. 164.';
    const expected = new Map();

    expected.set('Al.', 'Alexanders Saga. (G. I.)');
    expected.set('Bárð.', 'Bárðar Saga. (D. V.)');
    expected.set('Eb.', 'Eyrbyggja Saga. (D. II.)');
    expected.set('Fas.', 'Fornaldar Sögur. (C. II.)');
    expected.set('Fb.', 'Flateyjar-bók (E. I.)');
    expected.set('Fm.', 'Fafnis-mál. (A. II.)');
    expected.set('Fms.', 'Fornmanna Sögur. (E. I.)');
    expected.set('Fs.', 'Forn-sögur. (D. II.)');
    expected.set('Gullþ.', 'Gull-Þóris Saga. (D. II.)');
    expected.set('Js.', 'Járnsíða. (B. III.)');
    expected.set('Ld.', 'Laxdæla Saga. (D. II.)');
    expected.set('Nj.', 'Njála. (D. II.)');
    expected.set('Skv.', 'Sigurðar-kviða. (A. II.)');

    const result = findWorksAndAuthors(content);

    expect(result).toEqual(expected);
  });

  test('Finds compound abbreviations (Issue #64)', () => {
    const content = 'Lorem ipsum dolor sit compd. dolor sit compds.';
    const expected = new Map();

    expected.set('compd.', 'compound.');
    expected.set('compds.', 'compounds.');

    const result = findAbbreviations(content);

    expect(result).toEqual(expected);
  });

  test('Finds "Ormul" abbreviations (Issue #67)', () => {
    const content = 'Lorem ipsum Ormul. dolor sit';
    const expected = new Map();

    expected.set('Ormul.', 'Ormulum.');
    expected.set('l.', 'line.');

    const result = findAbbreviations(content);

    expect(result).toEqual(expected);
  });
});
