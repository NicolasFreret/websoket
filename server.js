// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*', // ⚠️ attention en production
  },
});

io.on('connection', (socket) => {
  console.log('Client connecté :', socket.id);

  socket.on('chat message', (msg) => {
    console.log('Message reçu :', msg);
    io.emit('chat message', msg); // renvoyer à tous les clients
  });

  socket.on('disconnect', () => {
    console.log('Client déconnecté :', socket.id);
  });
});

server.listen(3001, () => {
  console.log('Serveur Socket.IO en écoute sur http://localhost:3001');
});
