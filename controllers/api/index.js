const router = require('express').Router();
const bookingsRoutes = require('./bookings.js');
// const projectRoutes = require('./projectRoutes');

// router.use('/users', userRoutes);
router.use('/bookings', bookingsRoutes);

module.exports = router;