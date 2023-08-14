const router = require("express").Router();
const { Staff, Products, Services, StaffServices } = require("../../models");


// GET ALL STAFF
router.get("/", async (req, res) => {
  const staff = await Staff.findAll({
    include: 
      [{model: Services,
        through: StaffServices,
        as: 'staff_service'},
    ]})
  .catch((err) => res.status(500).json(err))
  res.status(200).json(staff);
});


// GET STAFF BY ID
router.get("/:id", async (req, res) => {
  const staff = await Staff.findByPk(req.params.id, {
    include: 
      [{model: Services,
        through: StaffServices,
        as: 'staff_service'},
    ]})
  .catch((err) => res.status(500).json(err));
  res.status(200).json(staff);
});





// NOT DONE YET
router.post("/staff/", async (req, res) => {
  // create a new category
  const staffdata = req.body;
  const staff = await staff.create(staffData);
  return res.json(staff);
});


// NOT DONE YET
router.put("/staff/:id", async (req, res) => {
  // update a category by its `id` value
  const staffData = req.body;
  const staff = await staff.findOne({ _id: req.params.id });
  staff.update(staffData, { _id: req.params.id });
  await staff.reload();
  res.json(staff);
});


// NOT DONE YET
router.delete("/staff/:id", async (req, res) => {
  // delete a category by its `id` value
  const staff = await staff.findOne({ _id: req.params.id });
  staff.destroy();
  return res.json(staff);
});

module.exports = router;
