const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT_IMAGE_DIR = 'public/images';

async function optimizeFile(filePath) {
    const absolutePath = path.resolve(filePath);
    const dir = path.dirname(absolutePath);
    const name = path.parse(absolutePath).name;
    const webpPath = path.join(dir, `${name}.webp`);

    // Skip if already webp
    if (filePath.endsWith('.webp')) return;

    try {
        if (!fs.existsSync(absolutePath)) {
            return;
        }

        const originalStats = fs.statSync(absolutePath);

        // Skip small files (< 10KB) to avoid overhead, unless user wants everything
        // For this request: "convert everything"

        await sharp(absolutePath)
            .webp({ quality: 80 })
            .toFile(webpPath);

        const newStats = fs.statSync(webpPath);
        const reduction = ((originalStats.size - newStats.size) / originalStats.size * 100).toFixed(1);

        console.log(`✅ Optimized: ${path.relative(process.cwd(), filePath)} -> ${path.relative(process.cwd(), webpPath)}`);
        console.log(`   Size: ${(originalStats.size / 1024).toFixed(1)}KB -> ${(newStats.size / 1024).toFixed(1)}KB (${reduction}% reduction)`);

    } catch (error) {
        if (error.message.includes('Input file is missing')) return;
        console.error(`❌ Error optimizing ${filePath}:`, error.message);
    }
}

function getAllImages(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllImages(file));
        } else {
            if (file.match(/\.(png|jpg|jpeg)$/i)) {
                results.push(file);
            }
        }
    });
    return results;
}

async function run() {
    console.log('🚀 Starting Full Recursive Image Optimization...\n');

    if (fs.existsSync(ROOT_IMAGE_DIR)) {
        const allImages = getAllImages(ROOT_IMAGE_DIR);
        console.log(`Found ${allImages.length} images to process.`);

        for (const image of allImages) {
            await optimizeFile(image);
        }
    } else {
        console.error(`Directory not found: ${ROOT_IMAGE_DIR}`);
    }

    console.log('\n✨ Optimization Complete!');
}

run();
