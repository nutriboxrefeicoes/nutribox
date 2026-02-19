const fs = require('fs');
const path = require('path');

const textures = [
    'public/images/illustrations/paper-craft.png',
    'public/images/illustrations/dark-green-matte-stone.png'
];

console.log('\n📊 Texture Performance Baseline');
console.log('═'.repeat(60));

textures.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log(`\n❌ File not found: ${file}`);
        return;
    }

    const stats = fs.statSync(file);
    const sizeKB = (stats.size / 1024).toFixed(2);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

    // Estimativas de tempo de carregamento
    // 3G: ~400 KB/s, 4G: ~3 MB/s
    const load3G = (stats.size / (400 * 1024)).toFixed(1);
    const load4G = (stats.size / (3000 * 1024)).toFixed(1);

    console.log(`\n📁 ${path.basename(file)}`);
    console.log('─'.repeat(60));
    console.log(`   Size:        ${sizeKB} KB (${sizeMB} MB)`);
    console.log(`   3G Load:     ~${load3G}s`);
    console.log(`   4G Load:     ~${load4G}s`);
});

console.log('\n' + '═'.repeat(60));
