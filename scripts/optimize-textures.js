const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeTexture(inputPath, outputDir, sizes) {
    const filename = path.basename(inputPath, path.extname(inputPath));

    // Criar diretório de saída se não existir
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`\n🎨 Optimizing: ${filename}`);
    console.log('─'.repeat(50));

    // Multi-Resolution (Opção B)
    for (const [name, size] of Object.entries(sizes)) {
        const outputPath = path.join(outputDir, `${filename}-${name}.webp`);

        await sharp(inputPath)
            .resize(size, size, { fit: 'cover' })
            .webp({ quality: 85, effort: 6 })
            .toFile(outputPath);

        const stats = fs.statSync(outputPath);
        const sizeKB = (stats.size / 1024).toFixed(1);

        console.log(`✅ Created ${name.padEnd(6)}: ${filename}-${name}.webp (${sizeKB} KB)`);
    }
}

// Configuração - Opção B: Multi-Resolution
const config = {
    'public/images/illustrations/paper-craft.png': {
        sm: 512,   // Mobile
        md: 1024,  // Tablet
        lg: 1920   // Desktop
    }
};

// Executar otimização
(async () => {
    console.log('\n🚀 Starting texture optimization (Multi-Resolution Strategy)...\n');

    for (const [input, sizes] of Object.entries(config)) {
        if (!fs.existsSync(input)) {
            console.error(`❌ Error: File not found: ${input}`);
            continue;
        }

        await optimizeTexture(input, 'public/images/textures', sizes);
    }

    console.log('\n' + '═'.repeat(50));
    console.log('✅ Optimization complete!');
    console.log('═'.repeat(50));

    // Mostrar comparação de tamanhos
    console.log('\n📊 Size Comparison:');
    console.log('─'.repeat(50));

    const originalStats = fs.statSync('public/images/illustrations/paper-craft.png');
    const originalMB = (originalStats.size / (1024 * 1024)).toFixed(2);
    console.log(`Original:  ${originalMB} MB`);

    let totalOptimized = 0;
    ['sm', 'md', 'lg'].forEach(size => {
        const optimizedPath = `public/images/textures/paper-craft-${size}.webp`;
        if (fs.existsSync(optimizedPath)) {
            const stats = fs.statSync(optimizedPath);
            totalOptimized += stats.size;
        }
    });

    const totalKB = (totalOptimized / 1024).toFixed(1);
    const reduction = ((1 - totalOptimized / originalStats.size) * 100).toFixed(1);

    console.log(`Optimized: ${totalKB} KB (all 3 sizes)`);
    console.log(`Reduction: ${reduction}% 🎉`);
    console.log('─'.repeat(50));
})();
