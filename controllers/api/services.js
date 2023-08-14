const router = require("express").Router();
const { Services, Products} = require("../../models");

// The `/api/pets/` endpoint

// models, pets, staff, services,  staff-services

router.get("/Services/", async (req, res) => {
  // find all categories
  const Services = await Services.findAll();
  // be sure to include its associated Products
  res.json(Services);
});

router.get("/Services/:id", async (req, res) => {
  // find one category by its `id` value
  const Services = await Services.findByPK({ _id: req.params.id });
  // be sure to include its associated Products
  res.json(Services);
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
