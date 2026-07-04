import { existsSync, readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const docsDir = path.resolve('docs');
const indexPath = path.join(docsDir, 'index.html');
const cnamePath = path.join(docsDir, 'CNAME');
const nojekyllPath = path.join(docsDir, '.nojekyll');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(existsSync(indexPath), 'docs/index.html is missing. Run npm run build.');
assert(existsSync(cnamePath), 'docs/CNAME is missing. The custom domain will not be published from docs/.');
assert(existsSync(nojekyllPath), 'docs/.nojekyll is missing. GitHub Pages may process the static app as Jekyll.');

const index = readFileSync(indexPath, 'utf8');
assert(!index.includes('/src/main.tsx'), 'docs/index.html still points at the Vite source entry.');
assert(index.includes('./assets/'), 'docs/index.html does not reference built assets with relative paths.');

const assetsDir = path.join(docsDir, 'assets');
assert(existsSync(assetsDir), 'docs/assets is missing.');

const assets = await readdir(assetsDir);
assert(assets.some((asset) => asset.endsWith('.js')), 'docs/assets is missing the built JavaScript bundle.');
assert(assets.some((asset) => asset.endsWith('.css')), 'docs/assets is missing the built CSS bundle.');

console.log('Pages build output is ready in docs/.');
