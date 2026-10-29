/**
 * ATBU Developers Club (ATBUDEVS) — Official Web Server
 * Production-hardened HTTP static server optimized for Render and local development.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.pdf': 'application/pdf',
  '.md': 'text/markdown; charset=utf-8',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Parse URL and clean query strings
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Health check endpoint for Render / Uptime monitors
  if (pathname === '/health' || pathname === '/healthz') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-store');
    res.end(JSON.stringify({ status: 'ok', service: 'atbudevs-website', uptime: process.uptime() }));
    return;
  }

  if (pathname === '/') {
    pathname = '/index.html';
  }

  const filePath = path.join(PUBLIC_DIR, pathname);

  // Security check: prevent directory traversal attacks
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>404 — Page Not Found | ATBUDEVS</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #080C14; color: #FFF; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center; }
    h1 { font-size: 3rem; margin-bottom: 0.5rem; color: #ADF7B6; }
    p { color: rgba(255,255,255,0.7); margin-bottom: 1.5rem; }
    a { display: inline-block; background: #ADF7B6; color: #06130B; font-weight: 700; padding: 0.65rem 1.5rem; border-radius: 9999px; text-decoration: none; }
  </style>
</head>
<body>
  <div>
    <h1>404</h1>
    <p>The page or asset you requested could not be found.</p>
    <a href="/">Return to Home &rarr;</a>
  </div>
</body>
</html>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Set production security and caching headers
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

    if (pathname === '/index.html') {
      res.setHeader('Cache-Control', 'no-cache, must-revalidate');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

function startServer(portToTry) {
  server.listen(portToTry, '0.0.0.0', () => {
    const actualPort = server.address().port;
    console.log(`\n======================================================`);
    console.log(`🚀 ATBUDEVS Website Production Server is RUNNING!`);
    console.log(`📡 Port:        ${actualPort}`);
    console.log(`📡 URL:         http://localhost:${actualPort}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV || 'production'}`);
    console.log(`📡 Health URL:  http://localhost:${actualPort}/health`);
    console.log(`======================================================\n`);
  });
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE' && !process.env.PORT) {
    const nextPort = PORT + 1;
    console.warn(`Port ${PORT} in use, trying ${nextPort}...`);
    startServer(nextPort);
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});

startServer(PORT);
