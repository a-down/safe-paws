const router = require("express").Router();
const { Services, Products} = require("../../models");

// The `/api/pets/` endpoint

// models, pets, staff, services,  staff-services

router.get("/", async (req, res) => {
  const services = await Services.findAll().catch((err) => res.status(500).json(err))
  res.json(services);
});

router.get("/:id", async (req, res) => {
  const service = await Services.findByPk(req.params.id).catch((err) => res.status(500).json(err));
  res.json(service);
});

router.post("/Services/", async (req, res) => {
  // create a new category
  const servicesdata = req.body;
  const Services = await Services.create(ServicesData);
  return res.json(Services);
});

router.put("/Services/:id", async (req, res) => {
  // update a category by its `id` value
  const servicesData = req.body;
  const services = await services.findOne({ _id: req.params.id });
  services.update(servicesData, { _id: req.params.id });
  await services.reload();
  res.json(services);
});

router.delete("/Services/:id", async (req, res) => {
  // delete a category by its `id` value
  const services = await services.findOne({ _id: req.params.id });
  services.destroy();
  return res.json(services);
});

module.exports = router;
