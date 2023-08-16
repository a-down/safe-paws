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





// NOT tested
router.post("/staff/", async (req, res) => {
  // create a new category
  try {
    const staff = await Staff.create(req.body)
    res.status(200).json(staff);
  }catch(err){
    res.status(500).json(err)
   }
});


// NOT tested
router.put("/staff/:id", async (req, res) => {
  // update a category by its `id` value
  try{
    const staffData = await Staff.update(req.body,{
      where: {
        id:req.params.id
      }
    })
    res.status(200).json(staffData)
     }catch(err){
      res.status(500).json(err)
     }
});


// NOT tested
router.delete("/staff/:id", async (req, res) => {
  // delete a category by its `id` value
  try{
    const staffData = await Staff.destroy(req.body,{
      where: {
        id:req.params.id
      }
    })
    res.status(200).json(staffData)
     }catch(err){
      res.status(500).json(err)
     }
  
});

module.exports = router;
