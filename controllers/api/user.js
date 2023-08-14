const router = require("express").Router();
const sequelize = require('sequelize');
const { User, Products } = require("../../models");

// models, pets, staff, services,  staff-services

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({users});
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  const user = await User.findByPk(req.params.id);
  // be sure to include its associated Products
  res.status(200).json(user);
});

router.post("/", async (req, res) => {
  // create a new category
  const userdata = req.body;
  const user = await user.create(staffData);
  return res.json(user);
});

router.put("/user/:id", async (req, res) => {
  // update a category by its `id` value
  const userData = req.body;
  const user = await user.findOne({ _id: req.params.id });
  user.update(userData, { _id: req.params.id });
  await user.reload();
  res.json(user);
});

router.delete("/user/:id", async (req, res) => {
  // delete a category by its `id` value
  const user = await user.findOne({ _id: req.params.id });
  user.destroy();
  return res.json(user);
});

module.exports = router;
