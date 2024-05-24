const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const serverless = require("serverless-http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3000;

app.use(express.static(path.join(__dirname)));

io.on("connection", (socket) => {
  socket.on("send name", (user) => {
    io.emit("send name", user);
  });

  socket.on("send message", (chat) => {
    io.emit("send message", chat);
  });
});

module.exports = app;
module.exports.handler = serverless(app);

if (process.env.NODE_ENV !== "production") {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}
