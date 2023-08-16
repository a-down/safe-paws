const router = require("express").Router();
const session = require('express-session');
const bcrypt = require('bcrypt');
const { User, Pets } = require("../../models");


// GET ALL USERS
router.get('/', async (req, res) => {
  const users = await User.findAll({include: [{model: Pets}]}).catch((err) => res.status(500).json(err));
  res.status(200).json({users});
});


// NEEDS TRY CATCH
// GET USER BY ID
router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id, {include: [{model: Pets}]}).catch((err) => res.status(500).json(err));
  res.status(200).json(user);
});


// POST NEW USER
router.post("/", async (req, res) => {
  // await User.create(req.body).catch((err) => res.status(500).json(err));
  // return res.json({message: 'New user created', newUser: req.body});

  try {
    console.log(req.body)

    const newUser = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      address: req.body.address
    });

    req.session.save(() => {
      req.session.loggedIn === true;
      res.status(200).json({message: 'Profile created'})
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// NEEDS TRY CATCH
// UPATE USER BY ID
router.put("/:id", async (req, res) => {
  await User.update(req.body, {where: {id: req.params.id}} ).catch((err) => res.status(500).json(err));
  res.status(200).json({message: 'User updated', updatedData: req.body});
});


// NEEDS TRY CATCH
// DELETE USER BY
router.delete("/user/:id", async (req, res) => {
  // delete a category by its `id` value
  const user = await user.findOne({ _id: req.params.id });
  user.destroy();
  return res.json(user);
});

//login post
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }

    req.session.save(()=> {
      req.session.loggedIn = true;
  
      res.json({ user: userData, message: 'You are now logged in!'})
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
