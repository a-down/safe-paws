const router = require('express').Router();
const withAuth = require('../utils/auth')



router.get('/profile', async (req, res) => {
  res.render('profile')
})

router.use('/login', async (req, res) => {
  res.render('login')
})

router.use('/booking', async (req, res) => {
  res.render('booking')
})

router.use('/staff', async (req, res) => {
  res.render('staff')
})

router.use('/', async (req, res) => {
  res.render('homepage');
})

module.exports = router;