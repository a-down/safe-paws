const router = require("express").Router();
const sequelize = require('sequelize');
const { User, Products, Pets } = require("../../models");

// models, pets, staff, services,  staff-services

router.get('/', async (req, res) => {
  const users = await User.findAll({include: [{model: Pets}]}).catch((err) => res.status(500).json(err));
  res.status(200).json({users});
});

// NEEDS TRY CATCH
router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id, {include: [{model: Pets}]}).catch((err) => res.status(500).json(err));
  res.status(200).json(user);
});

router.post("/", async (req, res) => {
  await User.create(req.body).catch((err) => res.status(500).json(err));
  return res.json({message: 'New user created', newUser: req.body});
});

// NEEDS TRY CATCH
router.put("/:id", async (req, res) => {
  await User.update(req.body, {where: {id: req.params.id}} ).catch((err) => res.status(500).json(err));
  res.status(200).json({message: 'User updated', updatedData: req.body});
});

// NEEDS TRY CATCH
router.delete("/user/:id", async (req, res) => {
  // delete a category by its `id` value
  const user = await user.findOne({ _id: req.params.id });
  user.destroy();
  return res.json(user);
});

module.exports = router;
