const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 5000;

app.use(express.static(path.join(__dirname)));

io.on("connection", (socket) => {
  socket.on("send name", (user) => {
    io.emit("send name", user);
  });

  socket.on("send message", (chat) => {
    io.emit("send message", chat);
  });
});

server.listen(port, () => {
  console.log(`Server is listening at the port: ${port}`);
});
