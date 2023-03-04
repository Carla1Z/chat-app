const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 3000;
const NEW_CHAT_MESSAGE = "newMessage";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  const { chatId } = socket.handshake.query;
  socket.join(chatId);

  socket.on(NEW_CHAT_MESSAGE, (data) => {
    io.in(chatId).emit(NEW_CHAT_MESSAGE, data);
  });

  socket.on("disconnect", () => {
    socket.leave(chatId);
  });
});

server.listen(PORT, () => {
  console.log(`Listening in ${PORT}`);
});
