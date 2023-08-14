const router = require("express").Router();
const { Bookings, Products } = require("../../models");

// The `/api/pets/` endpoint

// models, pets, staff, services,  staff-services

router.get("/Bookings/", async (req, res) => {
  // find all categories
  const Bookings = await Bookings.findAll();
  // be sure to include its associated Products
  res.json(Bookings);
});

router.get("/Bookings/:id", async (req, res) => {
  // find one category by its `id` value
  const Bookings = await Bookings.findByPK({ _id: req.params.id });
  // be sure to include its associated Products
  res.json(Bookings);
});

router.post("/Bookings/", async (req, res) => {
  // create a new category
  const Bookingsdata = req.body;
  const Bookings = await Bookings.create(BookingsData);
  return res.json(Bookings);
});

router.put("/Bookings/:id", async (req, res) => {
  // update a category by its `id` value
  const BookingsData = req.body;
  const Bookings = await Bookings.findOne({ _id: req.params.id });
  Bookings.update(BookingsData, { _id: req.params.id });
  await Bookings.reload();
  res.json(Bookings);
});

router.delete("/Bookings/:id", async (req, res) => {
  // delete a category by its `id` value
  const Bookings = await Bookings.findOne({ _id: req.params.id });
  Bookings.destroy();
  return res.json(Bookings);
});

module.exports = router;