
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').insert([
    {title: 'Pancakes', instructions: '1) Mix ingredients. 2)Pour batter.'},
    { title: 'Muffins', instructions: '1) Mix. 2) Pour into muffin tin. 3) Bake.'}
  ])
 
};
