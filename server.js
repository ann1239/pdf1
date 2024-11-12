const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));

let currentPage = 1;

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Send the current page to newly connected users
    socket.emit('update_page', { page: currentPage });
    
    // Handle page change events from the presenter
    socket.on('page_change', (data) => {
        currentPage = data.page;
        io.emit('update_page', { page: currentPage });
    });
    
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server with additional logging
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
