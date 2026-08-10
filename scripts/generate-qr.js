const fs = require('fs');
const path = require('path');
const https = require('https');

// Target URL for Tanveer Hussain's Founder Profile
const targetUrl = encodeURIComponent('https://www.digitalcraftify.com/founder');
const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&margin=10&color=000000&bgcolor=ffffff&data=${targetUrl}`;

const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

console.log("Fetching scannable high-resolution QR code image for https://www.digitalcraftify.com/founder ...");

https.get(qrApiUrl, (res) => {
  if (res.statusCode !== 200) {
    console.error("Failed to download QR code, status code:", res.statusCode);
    return;
  }

  const fileStream = fs.createWriteStream(path.join(publicDir, 'founder-qr.png'));
  const fileStream2 = fs.createWriteStream(path.join(imagesDir, 'founder-qr.png'));

  res.pipe(fileStream);
  res.pipe(fileStream2);

  fileStream.on('finish', () => {
    console.log("REAL SCANNABLE QR Code saved successfully to public/founder-qr.png and public/images/founder-qr.png!");
  });
}).on('error', (err) => {
  console.error("Error downloading QR code:", err.message);
});
