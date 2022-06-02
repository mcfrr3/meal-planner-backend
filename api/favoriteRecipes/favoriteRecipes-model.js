const db = require('../../data/db-config');

const favRecipesTable = 'favorite_recipe';
const userTable = 'users';
const recipeTable = 'recipe';

exports.getAll = () => {
  return db(`${recipeTable} as r`)
    .join(`${favRecipesTable} as fr`, 'r.recipe_id', 'fr.recipe_id')
    .join(`${userTable} as u`, 'fr.user_id', 'u.user_id');
}

exports.getBy = filter => {
  return db(`${recipeTable} as r`)
    .join(`${favRecipesTable} as fr`, 'r.recipe_id', 'fr.recipe_id')
    .join(`${userTable} as u`, 'fr.user_id', 'u.user_id')
    .where(filter);
}

exports.add = async newFavoriteRecipe => {
  // WIP
  // return db(`${favRecipesTable}`).insert(newFavoriteRecipe)
}