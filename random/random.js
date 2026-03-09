export default function handler(req, res) {
  const gifs = [
    'pcubed.gif',
    'prainbow.gif',
    'pspeed.gif'
  ];

  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
  res.writeHead(302, { Location: randomGif });
  res.end();
}