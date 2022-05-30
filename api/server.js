const express = require('express');

// Declare routers here
const FavoriteRecipesRouter = require('./favoriteRecipes/favoriteRecipes-router');

const server = express();

server.use(express.json());
// Use routers here
server.use('/api/favoriteRecipes', FavoriteRecipesRouter)

module.exports = server;