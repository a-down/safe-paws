const router = require("express").Router();
const { staff, Product } = require("../../models");

// The `/api/pets/` endpoint

// models, pets, staff, services,  staff-services

router.get("/staff/", async (req, res) => {
  // find all categories
  const staff = await staff.findAll();
  // be sure to include its associated Products
  res.json(staff);
});

router.get("/staff/:id", async (req, res) => {
  // find one category by its `id` value
  const staff = await staff.find({ _id: req.params.id });
  // be sure to include its associated Products
  res.json(staff);
});

router.post("/staff/", async (req, res) => {
  // create a new category
  const staffdata = req.body;
  const staff = await staff.create(staffData);
  return res.json(staff);
});

router.put("/staff/:id", async (req, res) => {
  // update a category by its `id` value
  const staffData = req.body;
  const staff = await staff.findOne({ _id: req.params.id });
  staff.update(staffData, { _id: req.params.id });
  await staff.reload();
  res.json(pet);
});

router.delete("/staff/:id", async (req, res) => {
  // delete a category by its `id` value
  const staff = await staff.findOne({ _id: req.params.id });
  staff.destroy();
  return res.json(staff);
});

module.exports = router;
