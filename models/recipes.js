const db = require('../data/config')

function find() {
  return db('recipes')
}

module.exports = {
  find,
}