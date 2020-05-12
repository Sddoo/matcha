const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, "public", req.url === '/' ? 'index.html' : req.url);
    let ext = path.extname(filePath);
    let contentType = "text/html";

    switch (ext) {
        case ".css":
            contentType = "text/css";
            break;
        case ".js":
            contentType = "text/javascript";
            break;
        case ".svg":
            contentType = "image/svg+xml";
            break;
        default:
            contentType = "text/html";
            break;
    }
    if (ext === ".css")
        contentType = "text/css";
    else if (ext === ".js")
        contentType = "text/javascript";
    else if (ext === ".svg")
        contentType = "image/svg+xml";

    res.writeHead(200, {
        "Content-type": contentType
    });
    fs.readFile(filePath, (err, data) => {
        res.end(data);
    })
});

server.listen(3000, () => {
    console.log("Server started on port 3000");
});

