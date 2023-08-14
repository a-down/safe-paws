const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/categories/', async (req, res) => {
  
  // find all categories
  const categories = await Category.findAll()
  // be sure to include its associated Products
  res.json(categories)
  
});

router.get('/categories/:id',async (req, res) => {
  // find one category by its `id` value
  const category = await Category.find({_id:req.params.id})
  // be sure to include its associated Products
  res.json(category)
});

router.post('/categories/', (req, res) => {
  // create a new category
  const tempNewCategory = req.body
  const category = 
});

router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
  res.send('put/')
});

router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
  res.send('delete/'+ req.params.id)
});

module.exports = router;
