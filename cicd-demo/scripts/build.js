const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, 'src'), { recursive: true });

fs.copyFileSync('index.html', path.join(dist, 'index.html'));
['tasks.js', 'main.js'].forEach((f) =>
  fs.copyFileSync(path.join('src', f), path.join(dist, 'src', f))
);
console.log('Build completado en dist/');
