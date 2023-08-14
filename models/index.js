



const User = require('./User');
const Pets = require('./Pets');
const Services = require('./Services');
const Staff = require('./Staff');
const Bookings = require('./Bookings');
const Reviews = require('./Reviews');
const StaffServices = require('./StaffServices')

//user has many pets, pet have one user
User.hasMany(Pets, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Pets.hasOne(User, {
  foreignKey: 'user_id', 
});

//services have many bookings, bookings have one service
Services.hasMany(Bookings, {
  foreignKey: 'service_id',
  onDelete: 'CASCADE',
});

Bookings.hasOne(Services, {
  foreignKey: 'service_id',
});

//pets belong to many bookings, bookings have one pet
Pets.hasMany(Bookings, {
  foreignKey: 'pet_id',
  onDelete: 'CASCADE',
});

Bookings.hasOne(Pets, {
  foreignKey: 'pet_id',
});

//User have many reviews, reviews have on User
User.hasMany(Reviews, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Reviews.hasOne(User, {
  foreignKey: 'user_id',
});

//User have many bookings, bookings have one user
User.hasMany(Bookings, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Bookings.hasOne(User, {
  foreignKey: 'user_id',
});

//staff can have many services, services can have many staff
Staff.belongstoMany(Services, {
  through: {
    model: StaffServices,
    unique: false
  },
  as: 'staff_service'
});

Services.belongstoMany(Staff, {
  through: {
    model: StaffServices,
    unique: false
  },
  as: 'service_staff'
});


{
module.exports = 
  User,
  Pets,
  Services,
  Staff,
  Bookings,
  Reviews,
  StaffServices
};
