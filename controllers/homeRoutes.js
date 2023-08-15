const router = require('express').Router();



router.use('/profile', async (req, res) => {
  res.render('profile')
})

router.use('/login', async (req, res) => {
  res.render('login');
})

router.use('/', async (req, res) => {
  res.render('homepage');
})

module.exports = router;