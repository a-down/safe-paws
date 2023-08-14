const router = require("express").Router();
const { User, Products } = require("../../models");

// The `/api/pets/` endpoint

// models, pets, staff, services,  staff-services

router.get("/user/", async (req, res) => {
  // find all categories
  const user = await user.findAll();
  // be sure to include its associated Products
  res.json(user);
});

router.get("/user/:id", async (req, res) => {
  // find one category by its `id` value
  const user = await user.findByPK({ _id: req.params.id });
  // be sure to include its associated Products
  res.json(user);
});

router.post("/user/", async (req, res) => {
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
