const router = require('express').Router();
const withAuth = require('../utils/auth')
const { User, Pets } = require('../models')



router.get('/profile', async (req, res) => {
  const userData = await User.findByPk(1, {include: [{model: Pets}]})
  const user = userData.get({ plain: true });
  console.log(user)
  res.render('profile', user)
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

router.use('/*', async (req, res) => {
  res.render('homepage');
})

module.exports = router;