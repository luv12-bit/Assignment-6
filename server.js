const http = require('http');
const fs = require('fs');
const path = require('path');

// I am setting the port to 3000
const port = 3000;

// This creates the server
const server = http.createServer((req, res) => {
    // Printing the URL to see what is being requested
    console.log('Request for: ' + req.url);

    // Routing logic using if/else
    if (req.url === '/' || req.url === '/home') {
        // Read the home page file
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading home page');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } 
    else if (req.url === '/about') {
        // Read the about page file
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading about page');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } 
    else if (req.url === '/contact') {
        // Read the contact page file
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading contact page');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } 
    else if (req.url === '/style.css') {
        // Serve the CSS file so the pages look nice
        fs.readFile(path.join(__dirname, 'public', 'style.css'), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('CSS not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });
    } 
    else {
        // This is for routes that do not exist
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Page not found');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

// Start listening on the port
server.listen(port, () => {
    console.log('Server is running at http://localhost:' + port);
});
