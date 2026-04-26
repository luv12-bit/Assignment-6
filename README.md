# My Basic Node.js Server Project

This is my submission for Assignment 6. I built a simple web server from scratch using Node.js without any extra frameworks like Express.

## How to Run the Server

1. Make sure you have Node.js installed on your computer.
2. Open your terminal or command prompt in this folder.
3. Run the following command:
   ```bash
   node server.js
   ```
4. Open your web browser and visit: `http://localhost:3000/home`

## What I Learned From This Assignment

Building this project taught me several important things about how the web works:

1. **The HTTP Module**: I learned how to use the built-in `http` module to create a server that listens for requests. I now understand the importance of status codes (like 200 for success and 404 for not found).
2. **Routing**: I figured out how to use `if/else` statements to check the `req.url` and decide which page to show the user.
3. **File Handling**: I learned how to use the `fs` module to read HTML and CSS files and send them to the browser. It's interesting how everything is asynchronous!
4. **Content-Types**: I learned that the browser needs to know if it's getting HTML or CSS, so I have to set the `Content-Type` header correctly in my code.
5. **Static Files**: Serving the `style.css` file separately was a good lesson in how websites load multiple assets.

I enjoyed making the pages look a bit nicer with CSS, though I kept it simple so I could focus on the Node.js logic!
