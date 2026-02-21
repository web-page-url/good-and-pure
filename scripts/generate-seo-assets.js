const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImage = path.join(__dirname, '../public/img/seo-img/good-and-pure-img.jpg');
const faviconSource = path.join(__dirname, '../public/icons/fav-icon.jpg');
const outputDir = path.join(__dirname, '../public/icons');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const faviconSizes = [
    { name: 'favicon-16x16.png', width: 16, height: 16 },
    { name: 'favicon-32x32.png', width: 32, height: 32 },
    { name: 'favicon-48x48.png', width: 48, height: 48 },
    { name: 'favicon-96x96.png', width: 96, height: 96 },
    { name: 'apple-touch-icon.png', width: 180, height: 180 },
    { name: 'android-chrome-192x192.png', width: 192, height: 192 },
    { name: 'android-chrome-512x512.png', width: 512, height: 512 },
    { name: 'mstile-144x144.png', width: 144, height: 144 },
    { name: 'mstile-150x150.png', width: 150, height: 150 },
    { name: 'mstile-310x310.png', width: 310, height: 310 },
];

const ogSizes = [
    { name: 'og-image.jpg', width: 1200, height: 630, format: 'jpeg' },
    { name: 'twitter-card.jpg', width: 1200, height: 675, format: 'jpeg' },
    { name: 'whatsapp-thumb.jpg', width: 300, height: 300, format: 'jpeg' },
    { name: 'instagram-profile.jpg', width: 110, height: 110, format: 'jpeg' },
    { name: 'facebook-cover.jpg', width: 820, height: 312, format: 'jpeg' },
    { name: 'linkedin-banner.jpg', width: 1584, height: 396, format: 'jpeg' },
    { name: 'teams-thumb.jpg', width: 100, height: 100, format: 'jpeg' },
];

async function generateImages() {
    console.log('🚀 Starting SEO Image Generation...');

    // Generate Favicons from fav-icon.jpg
    console.log('📦 Processing Favicons...');
    for (const size of faviconSizes) {
        try {
            await sharp(faviconSource)
                .resize(size.width, size.height, {
                    fit: 'contain',
                    background: { r: 255, g: 255, b: 255, alpha: 0 }
                })
                .png()
                .toFile(path.join(outputDir, size.name));
            console.log(`✅ Generated Favicon: ${size.name}`);
        } catch (error) {
            console.error(`❌ Error generating ${size.name}:`, error.message);
        }
    }

    // Generate OG images from original source
    console.log('🖼️ Processing OG Images...');
    for (const size of ogSizes) {
        try {
            await sharp(inputImage)
                .resize(size.width, size.height, {
                    fit: 'cover'
                })
                .jpeg({ quality: 90 })
                .toFile(path.join(outputDir, size.name));
            console.log(`✅ Generated OG: ${size.name}`);
        } catch (error) {
            console.error(`❌ Error generating ${size.name}:`, error.message);
        }
    }

    // Create root favicon.ico from favicon source
    try {
        await sharp(faviconSource)
            .resize(32, 32)
            .toFile(path.join(path.join(__dirname, '../public'), 'favicon.ico'));
        console.log('✅ Generated Root: favicon.ico');
    } catch (error) {
        console.error('❌ Error generating favicon.ico:', error.message);
    }

    console.log('✨ All SEO assets updated successfully!');
}

generateImages();
