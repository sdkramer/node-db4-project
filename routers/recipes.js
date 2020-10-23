const express = require('express')
const Recipe = require('../models/recipes')

const router = express.Router()

router.get('/recipes', async (req, res, next) => {
  try {
const recipes = await Recipe.find()
res.json(recipes)
  } catch(err) {
    next(err)
  }
})


module.exports = router