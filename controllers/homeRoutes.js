const router = require('express').Router();
const randomPets = require('../utils/randomPets')
const withAuth = require('../utils/auth')
const { User, Pets, Services } = require('../models')



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
  const userData = await User.findByPk(1, {include: [{model: Pets}]})
  const user = userData.get({ plain: true });

  const serviceData = await Services.findAll().catch((err) => res.status(500).json(err))
  const services = serviceData.map((service) => service.get({plain: true}))
  
  res.render('booking', { user, services })
})

router.use('/staff', async (req, res) => {
  res.render('staff')
})

router.use('/*', async (req, res) => {
  const petData = await Pets.findAll().catch((err) => res.status(500).json(err))
  const pets = petData.map((pet) => pet.get({plain: true}))
  console.log(pets)

  let petsArr = randomPets(pets)
  console.log(petsArr)

  res.render('homepage', {pets: petsArr});
})

module.exports = router;