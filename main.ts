// Entry for the make.fun bounty ai-judge-relax-01 (Node 22, standard library only, no network).
// It writes one fixed text to $MAKEFUN_OUTPUT_DIR/entry.txt, or /output/entry.txt when that is unset.
// The text is a constant, so every run writes the same bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One paragraph per element; paragraphs are joined by a blank line and no line end follows the last.
const RELAXING_TEXT_PARAGRAPHS = [
  'The kiln was shut off at noon. It will cool all night.',
  'The potter has swept the floor, hung her apron on its nail, and gone up to bed.',
  'The shed smells of warm clay. The bricks give back their heat a little at a time. Now and then, from inside, comes one small clear tick: glaze cooling on a bowl. Then nothing for a long while.',
  'Outside, frost comes down over the field. The cat is asleep by the kiln door, where the floor is warm.',
  'The firing is over. Six bowls sit in a row in the dark, still warm, and the door stays shut till morning.',
];

const RELAXING_TEXT = RELAXING_TEXT_PARAGRAPHS.join('\n\n');

// The gate's rule: 1 to 1,000 Unicode code points, not only white space.
const MAX_CODE_POINTS = 1000;
const length = [...RELAXING_TEXT].length;
if (length < 1 || length > MAX_CODE_POINTS || RELAXING_TEXT.trim() === '') {
  throw new Error(`entry text breaks the length rule: ${length} code points`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), RELAXING_TEXT, 'utf8');
