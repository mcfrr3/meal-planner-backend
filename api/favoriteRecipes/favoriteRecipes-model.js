const db = require('../../data/db-config');

const favRecipesTable = 'favorite_recipe';
const userTable = 'user';
const recipeTable = 'recipe';

exports.getAll = () => {
  return db(`${recipeTable} as r`)
    .join(`${favRecipesTable} as fr`, 'r.recipeId', 'fr.recipeId')
    .join(`${userTable} as u`, 'fr.userId', 'u.userId');
}

exports.getBy = filter => {
  return db(`${recipeTable} as r`)
    .join(`${favRecipesTable} as fr`, 'r.recipeId', 'fr.recipeId')
    .join(`${userTable} as u`, 'fr.userId', 'u.userId')
    .where(filter);
}

exports.add = newFavoriteRecipe => {
  // WIP
  // return db(`${favRecipesTable}`).insert(newFavoriteRecipe)
}