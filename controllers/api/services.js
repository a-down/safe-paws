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
  res.status(200).json({service});
});


// NOT active
// router.post("/Services/", async (req, res) => {
//   // create a new category
//   try {
//     const services = await Services.create(req.body)
//     res.status(200).json(service);
//   }catch(err){
//     res.status(500).json(err)
//    }
// });


// NOT active
// router.put("/Services/:id", async (req, res) => {
//   // update a category by its `id` value
//   try{
//     const servicesData = await Services.update(req.body,{
//       where: {
//         id:req.params.id
//       }
//     })
//     res.status(200).json(serviceData)
//      }catch(err){
//       res.status(500).json(err)
//      }
// });

<<<<<<< HEAD

// NOT active
// router.delete("/Services/:id", async (req, res) => {
//   // delete a category by its `id` value
//   try{
//     const servicesData = await Services.destroy(req.body,{
//       where: {
//         id:req.params.id
//       }
//     })
//     res.status(200).json(staffData)
//      }catch(err){
//       res.status(500).json(err)
//      }
// });
=======
// NOT tested
router.put("/Services/:id", async (req, res) => {
  // update a category by its `id` value
  try{
    const servicesData = await Services.update(req.body,{
      where: {
        id:req.params.id
      }
    })
    res.status(200).json(servicesData)
     }catch(err){
      res.status(500).json(err)
     }
});

// NOT tested
router.delete("/Services/:id", async (req, res) => {
  // delete a category by its `id` value
  try{
    const servicesData = await Services.destroy(req.body,{
      where: {
        id:req.params.id
      }
    })
    res.status(200).json(servicesDataData)
     }catch(err){
      res.status(500).json(err)
     }
});
>>>>>>> 3010fdc (updated services)

module.exports = router;
