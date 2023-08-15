const router = require('express').Router();

router.use('/', async (req, res) => {
  res.render('homepage');
})

module.exports = router;