export default function handler(req, res) {
  const gifs = [
    '/pcubed.gif',
    '/prainbow.gif',
    '/pspeed.gif'
  ];

  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

  // 302 redirect to static GIF
  res.writeHead(302, { 
    'Location': randomGif,
    'Content-Type': 'image/gif'   // ensure correct header
  });
  res.end();
}