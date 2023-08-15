


var path = require('path')
const fs = require('fs')

// var withAuth = require('../utils/auth') -- eventually will need this on most pages but can worry about it later

module.exports = (app) => {
  //return booking.html --- needs auth - send to login if not
  app.get('/booking', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/booking.html'));
  });

  //return login.html
  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
  });

  //return staff.html -viewable w/o auth
  app.get('/staff', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/staff.html'));
  });

  //return profile of user --- needs auth - send to login if not
  app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/profile.html'));
    // res.render('home', {js: ['home.js']}); will we need this syntax for handlebars later on?
  });


  //return homepage (index.html)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
}