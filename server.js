import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const root = fs.existsSync(path.join(projectRoot, "dist")) ? path.join(projectRoot, "dist") : projectRoot;
const port = Number(process.env.PORT || 5173);

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

const server = http.createServer((req, res) => {
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

    const directoryIndex = path.join(filePath, "index.html");
    fs.stat(directoryIndex, (indexError, indexStats) => {
      if (!indexError && indexStats.isFile()) {
        res.writeHead(200, { "Content-Type": mimeTypes[".html"] });
        fs.createReadStream(directoryIndex).pipe(res);
        return;
      }

      const notFoundPath = path.join(root, "404.html");
      const fallbackPath = fs.existsSync(notFoundPath) ? notFoundPath : path.join(root, "index.html");
      res.writeHead(fs.existsSync(notFoundPath) ? 404 : 200, { "Content-Type": mimeTypes[".html"] });
      fs.createReadStream(fallbackPath).pipe(res);
    });
  });
});

server.listen(port, () => {
  console.log(`PlayDude is running at http://localhost:${port}`);
});
