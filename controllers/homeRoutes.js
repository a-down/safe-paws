const router = require('express').Router();
const withAuth = require('../utils/auth')



router.get('/profile', withAuth, async (req, res) => {
  res.render('profile')
})

  router.use('/login', async (req, res) => {
res.render('login')
})

router.use('/', async (req, res) => {
  res.render('homepage');
})

module.exports = router;