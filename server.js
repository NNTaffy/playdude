const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const preferredPort = Number(process.env.PORT || 5173);
const shouldUseExactPort = Boolean(process.env.PORT);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

function safeResolve(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split("?")[0]);
  const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  return path.join(root, normalizedPath);
}

function createServer() {
  return http.createServer((req, res) => {
    const requestPath = req.url === "/" ? "/index.html" : req.url;
    let filePath = safeResolve(requestPath);

    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    fs.stat(filePath, (statError, stats) => {
      if (!statError && stats.isFile()) {
        const ext = path.extname(filePath);
        res.writeHead(200, {
          "Content-Type": mimeTypes[ext] || "application/octet-stream"
        });
        fs.createReadStream(filePath).pipe(res);
        return;
      }

      const fallbackPath = path.join(root, "index.html");
      res.writeHead(200, { "Content-Type": mimeTypes[".html"] });
      fs.createReadStream(fallbackPath).pipe(res);
    });
  });
}

function listen(port) {
  const server = createServer();

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE" && !shouldUseExactPort) {
      console.log(`Port ${port} is busy. Trying ${port + 1}...`);
      listen(port + 1);
      return;
    }

    throw error;
  });

  server.listen(port, () => {
    console.log(`PlayDude is running at http://localhost:${port}`);
  });
}

listen(preferredPort);
