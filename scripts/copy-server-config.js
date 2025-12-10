const fs = require('fs');
const path = require('path');

// Server configuration files to copy
const configFiles = [
  { src: '.htaccess', dest: 'out/.htaccess' },
  { src: 'nginx.conf', dest: 'out/nginx.conf' },
  { src: 'vercel.json', dest: 'out/vercel.json' },
];

// Directory where config files are stored
const configDir = path.join(__dirname, '..', 'server-config');
const outDir = path.join(__dirname, '..', 'out');

// Create out directory if it doesn't exist
if (!fs.existsSync(outDir)) {
  console.log('⚠️  out/ directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

// Copy each config file
configFiles.forEach(({ src, dest }) => {
  const srcPath = path.join(configDir, src);
  const destPath = path.join(__dirname, '..', dest);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Copied ${src} to ${dest}`);
  } else {
    console.log(`⚠️  ${src} not found in server-config/ directory`);
  }
});

console.log('\n✅ Server configuration files copied successfully!');


