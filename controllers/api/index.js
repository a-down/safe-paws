const router = require('express').Router();
const userRoutes = require('./user');
const staffRoutes = require('./staff');
const servicesRoutes = require('./services');
const petRoutes = require('./pets')
const bookingsRoutes = require('./bookings.js');

// login/logout routes are in /users.js
router.use('/users', userRoutes);
router.use('/staff', staffRoutes);
router.use('/services', servicesRoutes);
router.use('/pets', petRoutes);
router.use('/bookings', bookingsRoutes);


module.exports = router;