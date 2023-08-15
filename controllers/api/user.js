const router = require("express").Router();
const session = require('express-session');
const { User, Products, Pets } = require("../../models");


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
      username: req.body.username,
      email: 'aseva@email.com',
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

module.exports = router;
