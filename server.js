const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuration
const PORT = 3000;

/**
 * Helper function to serve HTML files
 * @param {string} filePath - Path to the file to serve
 * @param {number} statusCode - HTTP status code
 * @param {http.ServerResponse} res - Response object
 */
const serveFile = (filePath, statusCode, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // If there's an error reading the file, send a 500 error
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Server Error');
        } else {
            // Determine content type based on file extension
            const ext = path.extname(filePath);
            let contentType = 'text/html';
            
            if (ext === '.css') {
                contentType = 'text/css';
            }

            res.writeHead(statusCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
};

// Create the server
const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(`Requested URL: ${url}`);

    // Simple routing logic
    if (url === '/' || url === '/home') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        serveFile(filePath, 200, res);
    } 
    else if (url === '/about') {
        const filePath = path.join(__dirname, 'public', 'about.html');
        serveFile(filePath, 200, res);
    } 
    else if (url === '/contact') {
        const filePath = path.join(__dirname, 'public', 'contact.html');
        serveFile(filePath, 200, res);
    } 
    // Handle static CSS file
    else if (url === '/style.css') {
        const filePath = path.join(__dirname, 'public', 'style.css');
        serveFile(filePath, 200, res);
    } 
    // Handle additional routes or 404
    else if (url === '/services') {
        // Example of an additional route as per "Enhance your server" requirement
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Our Services</h1><p>We provide custom Node.js solutions.</p><a href="/home">Back Home</a>');
    }
    else {
        // 404 Not Found
        const filePath = path.join(__dirname, 'public', '404.html');
        serveFile(filePath, 404, res);
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server.');
});
