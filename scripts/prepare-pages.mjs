import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const outputDir = path.resolve('docs');
const cnameSource = path.resolve('CNAME');
const cnameTarget = path.join(outputDir, 'CNAME');
const nojekyllTarget = path.join(outputDir, '.nojekyll');

writeFileSync(nojekyllTarget, '');

if (existsSync(cnameSource)) {
  copyFileSync(cnameSource, cnameTarget);
}
