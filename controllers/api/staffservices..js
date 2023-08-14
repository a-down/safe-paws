const router = require("express").Router();
const { StaffServices, Products } = require("../../models");

// The `/api/pets/` endpoint

// models, pets, staff, services,  staff-services

router.get("/staffservices/", async (req, res) => {
  // find all categories
  const staffservices = await staffservices.findAll();
  // be sure to include its associated Products
  res.json(staff);
});

router.get("/staffservices/:id", async (req, res) => {
  // find one category by its `id` value
  const staffservices = await staffservices.findByPK({ _id: req.params.id });
  // be sure to include its associated Products
  res.json(staffservices);
});

router.post("/staffservices/", async (req, res) => {
  // create a new category
  const staffservicesdata = req.body;
  const staffservices = await staffservices.create(staffData);
  return res.json(staffservices);
});

router.put("/staffservices/:id", async (req, res) => {
  // update a category by its `id` value
  const staffservicesData = req.body;
  const staffservices = await staffservices.findOne({ _id: req.params.id });
  staffservices.update(staffservicesData, { _id: req.params.id });
  await staffservices.reload();
  res.json(staffservices);
});

router.delete("/staffservices/:id", async (req, res) => {
  // delete a category by its `id` value
  const staffservices = await staffservices.findOne({ _id: req.params.id });
  staffservices.destroy();
  return res.json(staffservices);
});

module.exports = router;
