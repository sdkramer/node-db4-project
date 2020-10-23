const db = require('../data/config')

function find() {
  return db('recipes')
}

function findById(id) {
  return db('recipes')
  .where('id', id)
  .first()
}

function findInstructions(id) {

}



module.exports = {
  find,
  findById,
}