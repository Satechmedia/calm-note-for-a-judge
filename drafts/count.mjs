// Counts Unicode code points and bytes of a text file and checks the 1..1000 rule.
import { readFileSync } from 'node:fs';
const path = process.argv[2] ?? 'out/entry.txt';
const bytes = readFileSync(path);
const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
const points = [...text].length;
const ok = points >= 1 && points <= 1000 && text.trim() !== '';
console.log(`${path}: ${points} code points, ${bytes.length} bytes, valid=${ok}`);
process.exit(ok ? 0 : 1);
