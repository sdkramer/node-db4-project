
exports.seed = async function(knex) {
await knex('ingredients').insert([
  { ingredient: 'cup of flour'},
  { ingredient: 'egg'},
  { ingredient: 'cup of milk'},
  { ingredient: 'tablespoon of sugar'}
])
};
