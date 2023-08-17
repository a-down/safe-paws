const userSeeds = require('./users-seed.json')
const { User, Pets, Services, Staff, StaffServices, Bookings } = require('../models')
const petsSeeds = require('./pets-seed.json')
const servicesSeeds = require('./services-seed.json')
const staffSeeds = require('./staff-seed.json')
const bookingsSeeds = require('./booking-seed.json')
const sequelize = require('./connection/config');
const staffServicesSeeds = require('./staff-services-seed.json')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await User.bulkCreate(userSeeds)
  await Pets.bulkCreate(petsSeeds)
  await Services.bulkCreate(servicesSeeds)
  await Staff.bulkCreate(staffSeeds)
  await StaffServices.bulkCreate(staffServicesSeeds)
  await Bookings.bulkCreate(bookingsSeeds)


  process.exit(0);
};

seedAll();
