const express = require('express');

// Declare routers here

const server = express();

server.use(express.json());
// Use routers here

module.exports = server;