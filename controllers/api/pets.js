const router = require("express").Router();
const { Pets, Products, User } = require("../../models");


// GET ALL PETS
router.get("/", async (req, res) => {
  const pets = await Pets.findAll({include: [{model: User}]}).catch((err) => res.status(500).json(err));
  res.status(200).json(pets);
});


// GET PET BY ID
router.get("/:id", async (req, res) => {
  const pet = await Pets.findByPk(req.params.id, {include: [{model: User}]}).catch((err) => res.status(500).json(err));
  res.status(200).json(pet);
});


// POST NEW PET
router.post("/", async (req, res) => {
  await Pets.create(req.body);
  return res.status(200).json({message: 'New pet created', newUser: req.body});
});


// UPDATE PET BY ID
router.put("/:id", async (req, res) => {
  await Pets.update(req.body, {where: {id: req.params.id}} ).catch((err) => res.status(500).json(err));
  res.status(200).json({message: 'Pet updated', updatedData: req.body});
});


// DELETE PET BY ID
router.delete("/:id", async (req, res) => {
  await Pets.destroy({where: {id: req.params.id}}).catch((err) => res.status(500).json(err));
  return res.status(200).json({message: 'Pet removed'});
});

module.exports = router;
