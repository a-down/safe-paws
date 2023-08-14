const router = require("express").Router();
const { Pets, Products, User } = require("../../models");

// The `/api/pets/` endpoint

// models, pets, staff, services,  staff-services

router.get("/", async (req, res) => {
  const pets = await Pets.findAll({include: [{model: User}]}).catch((err) => res.status(500).json(err));
  res.status(200).json(pets);
});

router.get("/:id", async (req, res) => {
  const pet = await Pets.findByPk(req.params.id, {include: [{model: User}]}).catch((err) => res.status(500).json(err));
  res.status(200).json(pet);
});

router.post("/", async (req, res) => {
  await Pets.create(req.body).catch((err) => res.status(500).json(err));
  return res.status(200).json({message: 'New pet created', newUser: req.body});
});

router.put("/:id", async (req, res) => {
  await Pets.update(req.body, {where: {id: req.params.id}} ).catch((err) => res.status(500).json(err));
  res.status(200).json({message: 'Pet updated', updatedData: req.body});
});

router.delete("/:id", async (req, res) => {
  await Pets.destroy({where: {id: req.params.id}}).catch((err) => res.status(500).json(err));
  return res.status(200).json({message: 'Pet removed'});
});

module.exports = router;
