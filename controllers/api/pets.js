const router = require("express").Router();
const { Pets, Products } = require("../../models");

// The `/api/pets/` endpoint

// models, pets, staff, services,  staff-services

router.get("/", async (req, res) => {
  const pets = await Pets.findAll().catch((err) => res.status(500).json(err));
  res.status(200).json(pets);
});

router.get("/:id", async (req, res) => {
  const pet = await Pets.findByPk(req.params.id).catch((err) => res.status(500).json(err));
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
