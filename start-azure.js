const { execSync } = require('child_process');
const path = require('path');

console.log('Building React app...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

console.log('Starting server...');
require('./server.js');
