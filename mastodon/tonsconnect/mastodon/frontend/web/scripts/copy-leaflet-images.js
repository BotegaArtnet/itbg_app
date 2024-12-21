const fs = require('fs');
const path = require('path');

const leafletPath = path.resolve(__dirname, '../node_modules/leaflet/dist/images');
const publicPath = path.resolve(__dirname, '../public/images');

// Create the public/images directory if it doesn't exist
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}

// Copy marker images
const images = ['marker-icon.png', 'marker-icon-2x.png', 'marker-shadow.png'];

images.forEach(image => {
  fs.copyFileSync(
    path.join(leafletPath, image),
    path.join(publicPath, image)
  );
  console.log(`Copied ${image} to public/images/`);
}); 