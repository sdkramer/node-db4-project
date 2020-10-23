exports.seed = async function(knex) {
  await knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, amount: 4},
    { recipe_id: 1, ingredient_id: 2, amount: 2.5},
    { recipe_id: 1, ingredient_id: 3, amount: 4},
    { recipe_id: 2, ingredient_id: 1, amount: 3},
    { recipe_id: 2, ingredient_id: 2, amount: 2.3},
    { recipe_id: 2, ingredient_id: 3, amount: 2},
   
  ])
  };