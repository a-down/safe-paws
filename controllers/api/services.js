const router = require("express").Router();
const { Services, Products, Staff, StaffServices} = require("../../models");


// GET ALL SERVICES
router.get("/", async (req, res) => {
  const data = await Services.findAll({
    include: 
    [{model: Staff,
      through: StaffServices,
      as: 'service_staff'
    }]})
  .catch((err) => res.status(500).json(err));
  res.status(200).json(data);
});


// GET SERVICE BY ID
router.get("/:id", async (req, res) => {
  const service = await Services.findByPk(req.params.id, {include: 
    [{model: Staff,
      through: StaffServices,
      as: 'service_staff'
    }]})
  .catch((err) => res.status(500).json(err));
  res.status(200).json(service);
});




// NOT DONE YET
router.post("/Services/", async (req, res) => {
  // create a new category
  const servicesdata = req.body;
  const Services = await Services.create(ServicesData);
  return res.json(Services);
});

// NOT DONE YET
router.put("/Services/:id", async (req, res) => {
  // update a category by its `id` value
  const servicesData = req.body;
  const services = await services.findOne({ _id: req.params.id });
  services.update(servicesData, { _id: req.params.id });
  await services.reload();
  res.json(services);
});

// NOT DONE YET
router.delete("/Services/:id", async (req, res) => {
  // delete a category by its `id` value
  const services = await services.findOne({ _id: req.params.id });
  services.destroy();
  return res.json(services);
});

module.exports = router;
