const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');


// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { username: req.body.username } });
//     if (!userData) {
//       res.status(404).json({ message: 'Login failed. Please try again!' });
//       return;
//     }
//     const validPassword = await bcrypt.compare(
//       req.body.password,
//       userData.password
//     );
//     if (!validPassword) {
//       res.status(400).json({ message: 'Login failed. Please try again!' });
//       return;
//     }

//     req.session.save(()=> {
//       req.session.user_id = userData.id;
  
//       res.json({ user: userData, message: 'You are now logged in!'})
//     })
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const dbUserData = await User.create({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });

//     req.session.save(() => {
//       req.session.loggedIn = true;

//       res.status(200).json(dbUserData);
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.json({message: 'here'}).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;