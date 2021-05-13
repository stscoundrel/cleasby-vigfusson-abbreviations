# Cleasby & Vigfusson Abbreviations

Map abbreviations to full length words from Cleasby & Vigfusson dictionary.

Cleasby & Vigfusson is full of abbreviations meant to save space in print. While working with online versions of the same source material, there is little use for these abbreviations. This library helps you map them back to their full length equilevants.

Related projects:
[Cleasby & Vigfusson Dictionary](https://github.com/stscoundrel/cleasby-vigfusson-dictionary)
[Cleasby & Vigfusson in Next.js](https://github.com/stscoundrel/cleasby-vigfusson-next)

### Install

`yarn add cleasby-vigfusson-abbreviations`

##### Usage

Find general abbreviations:

```javascript
import { findAbbreviations }  from 'cleasby-vigfusson-abbreviations'

// Find abbreviations from a string.
const content = 'adj. ‘wit-stolen,’ insane, Fas. iii. 300: freq. in mod. usage, = wild, frantic; cp. ham-stola.';
// Returns map of abbreviations to meanings.
const result = findAbbreviations(content);

console.log(result);
//   'adj.' => 'adjective.',
//   'cp.' => 'compare.',
//   'freq.' => 'frequent, frequently.',
//   'mod.' => 'modern.'

```

Or abbreviated works & authors:

```javascript
import { findWorksAndAuthors }  from 'cleasby-vigfusson-abbreviations'

// Find abbreviations from a string.
const content = 'to plan, plot, contrive, or cause one’s death, put to death, betray, Germ. verra’ben; Regin þik réð, hann þik ráða mun, Fm. 22; þú rétt hann, Fas. i. 202; þær ætluðu at konungr mundi hafa rúðit hann, Fms. iv. 312; hann réð Plóg svarta föður-bana sinn, xi. 353; ef kona drepr bónda sinn eða ræðr hann fyrir íllsku sakir, Js. 27; ráða e-m bana, bana-ráð, Nj. 21, 52, Fb. i. 410, Skv. 1. 51:—ráða e-n af, to put out of the way, put to death, Gullþ. 14, Fms. i. 204, Al. 128; sá ótti er nú af ráðinn ok endaðr, Fs. 9; ek hygg at Þóroddr ætli nú af at ráða hingat-kvámur þínar, Eb. 144; ráða e-n frá, to despatch, Ld. 294; ráða e-n af dögum, to put to death; ráða e-n frá ríki, Fms. iii. 18; ráða e-n ofan, to overthrow, Bárð. 164.';

// Returns map of abbreviated works to meanings.
const result = findWorksAndAuthors(content);

console.log(result);
// 'Al.' => 'Alexanders Saga. (G. I.)',
// 'Bárð.' => 'Bárðar Saga. (D. V.)',
// 'Eb.' => 'Eyrbyggja Saga. (D. II.)',
// 'Fas.' => 'Fornaldar Sögur. (C. II.)',
// 'Fb.' => 'Flateyjar-bók (E. I.)',
// 'Fm.' => 'Fafnis-mál. (A. II.)',
// 'Fms.' => 'Fornmanna Sögur. (E. I.)',
// 'Fs.' => 'Forn-sögur. (D. II.)',
// 'Gullþ.' => 'Gull-Þóris Saga. (D. II.)',
// 'Js.' => 'Járnsíða. (B. III.)',
// 'Ld.' => 'Laxdæla Saga. (D. II.)',
// 'Nj.' => 'Njála. (D. II.)',
// 'Skv.' => 'Sigurðar-kviða. (A. II.)'

```

### About Cleasby & Vigfusson Dictionary

"Icelandic-English" dictionary was started by Richard Cleasby and finished by Gudbrand Vigfusson. It was published in 1874, which leads to there being many public domain versions of the book available.