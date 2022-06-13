const express = require('express');

// Declare routers here
const FavoriteRecipesRouter = require('./favoriteRecipes/favoriteRecipes-router');
const authRouter = require('./auth/auth-router')

const server = express();

server.use(express.json());
// Use routers here
server.use('/api/favoriteRecipes', FavoriteRecipesRouter)
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
  res.send({ message: 'up' });
});

module.exports = server;