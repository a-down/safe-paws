const router = require("express").Router();
const { Pet, Product } = require("../../models");

// The `/api/pets/` endpoint

// models, pets, staff, services,  staff-services

router.get("/pets/", async (req, res) => {
  // find all categories
  const pets = await Pet.findAll();
  // be sure to include its associated Products
  res.json(pets);
});

router.get("/pets/:id", async (req, res) => {
  // find one category by its `id` value
  const pet = await Pet.find({ _id: req.params.id });
  // be sure to include its associated Products
  res.json(pet);
});

router.post("/pets/", async (req, res) => {
  // create a new category
  const petdata = req.body;
  const pet = await Pet.create(petData);
  return res.json(pet);
});

router.put("/pets/:id", async (req, res) => {
  // update a category by its `id` value
  const petData = req.body;
  const pet = await Pet.findOne({ _id: req.params.id });
  pet.update(petData, { _id: req.params.id });
  await pet.reload();
  res.json(pet);
});

router.delete("/pets/:id", async (req, res) => {
  // delete a category by its `id` value
  const pet = await Pet.findOne({ _id: req.params.id });
  pet.destroy();
  return res.json(pet);
});

module.exports = router;
