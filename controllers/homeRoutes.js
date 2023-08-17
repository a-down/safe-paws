const router = require('express').Router();
const randomPets = require('../utils/randomPets')
const setDays = require('../utils/setDays')
const withAuth = require('../utils/auth')
const { User, Pets, Services, Staff, Bookings } = require('../models')


// RENDER PROFILE PAGE IF LOGGED IN
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {include: [{model: Pets}]})
    const user = userData.get({ plain: true });

    const serviceData = await Services.findAll().catch((err) => res.status(500).json(err))
    const services = serviceData.map((service) => service.get({plain: true}))

    const bookingData = await Bookings.findAll({
      where: {user_id: req.session.user_id},
      include: [{model: User}, {model: Pets}, {model: Services}, {model: Staff}]
    })
    let bookings = bookingData.map((booking) => booking.get({plain: true}))

    console.log(bookings)
    // console.log(user)

    res.render('profile', { user, bookings })

  } catch (err) {
    res.status(500).json({message: 'Something went wrong. Please try again.'})
  }
})


// RENDER LOGIN/SIGNUP PAGE
router.use('/login', async (req, res) => {
  res.render('login')
})


// RENDER NEW BOOKING PAGE IF LOGGED IN
router.use('/booking', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {include: [{model: Pets}]})
    const user = userData.get({ plain: true });

    const serviceData = await Services.findAll().catch((err) => res.status(500).json(err))
    const services = serviceData.map((service) => service.get({plain: true}))

    res.render('booking', { user, services })

} catch (err) {
  res.status(500).json({message: 'Something went wrong. Please try again.'})
}
})


// RENDER STAFF PAGE
router.use('/staff', async (req, res) => {
  res.render('staff')
})


// RENDER HOMEPAGE IF ANY OTHER ROUTE IS PROVIDED
router.use('/*', async (req, res) => {
  try {
    const petData = await Pets.findAll().catch((err) => res.status(500).json(err))
    const pets = petData.map((pet) => pet.get({plain: true}))
    // console.log(pets)

    let petsArr = randomPets(pets)
    // console.log(petsArr)

    res.render('homepage', {pets: petsArr});

  } catch (err) {
    res.status(500).json({message: 'Something went wrong. Please try again.'})
  }
})

module.exports = router;