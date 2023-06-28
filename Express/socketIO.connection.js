const express = require("express");
const { Server } = require("socket.io");

const app = express();
const http = require("http");
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send("base url");
});

server.listen(8080, () => {
    console.log("Server is connected");
});

const webSocket = new Server(server);

webSocket.on("connection", (socket) => {
    socket.emit("isConnect");
    
    socket.on("isConnect", (name) => {
        console.log(`Client ${name} is connected`);
    });
});



// Explanation:

// First, we require the necessary modules: express for creating the web server and handling routes, and socket.io for WebSocket functionality.

// We create an instance of the Express application and a http server using createServer method, passing the Express app as an argument.

// We define a route for the base URL ("/") using app.get(). In this case, it sends a simple response of "base url".

// The server listens on port 8080 using the listen method, and a callback function is provided to log a message once the server is connected and listening.

// We create a new instance of the Socket.IO server, webSocket, by passing the server object.

// The connection event is emitted when a client connects to the WebSocket server. Inside the event handler, we emit an "isConnect" event to the client using socket.emit().

// On the client side, when the "isConnect" event is received, it can send the client's name as a parameter. The server listens to the "isConnect" event using socket.on(), and logs a message indicating that the client is connected, along with the provided name.

// Make sure to install the required dependencies (express and socket.io) using npm before running the code.

// Note: This code assumes that the Socket.IO client-side code is implemented correctly in the client application.



//Disconnect
socket.on('disconnect', () => {
  // Handle disconnection logic here
  console.log('Disconnected from the server');
});
socket.on('connect_error', (error) => {
  // Handle connection error logic here
  console.log('Connection error:', error);
});





