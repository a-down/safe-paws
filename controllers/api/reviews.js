const router = require("express").Router();
const { Reviews, Products } = require("../../models");

// The `/api/pets/` endpoint

// models, pets, staff, services,  staff-services

router.get("/Reviews/", async (req, res) => {
  // find all categories
  const Reviews = await Reviews.findAll();
  // be sure to include its associated Products
  res.json(Reviews);
});

router.get("/Reviews/:id", async (req, res) => {
  // find one category by its `id` value
  const Reviews = await Reviews.findByPK({ _id: req.params.id });
  // be sure to include its associated Products
  res.json(Reviews);
});

router.post("/Reviews/", async (req, res) => {
  // create a new category
  const Reviewsdata = req.body;
  const Reviews = await Reviews.create(ReviewsData);
  return res.json(Reviews);
});

router.put("/Reviews/:id", async (req, res) => {
  // update a category by its `id` value
  const ReviewsData = req.body;
  const Reviews = await Reviews.findOne({ _id: req.params.id });
  Reviews.update(ReviewsData, { _id: req.params.id });
  await Reviews.reload();
  res.json(Reviews);
});

router.delete("/Reviews/:id", async (req, res) => {
  // delete a category by its `id` value
  const Reviews = await Reviews.findOne({ _id: req.params.id });
  Reviews.destroy();
  return res.json(Reviews);
});

module.exports = router;