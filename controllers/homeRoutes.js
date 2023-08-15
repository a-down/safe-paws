const router = require('express').Router();
const getRandomNumber = require('../utils/randomNumber')
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
  const petData = await Pets.findAll().catch((err) => res.status(500).json(err))
  const pets = petData.map((data) => data.get({plain: true}))
  console.log(pets)

  let petsArr

  await () => {

  }

  res.render('homepage', pets);
})

module.exports = router;