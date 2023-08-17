const router = require("express").Router();
const { Bookings, Products, Services, User, Pets, Staff } = require("../../models");


// GET ALL BOOKINGS
router.get("/", async (req, res) => {
  const bookings = await Bookings.findAll({Services, User, Pets, Staff}).catch((err) => res.status(500).json(err));
  res.status(200).json(bookings);
});


// GET BOOKINGS BY BOOKING ID
router.get("/:id", async (req, res) => {
  const bookings = await Bookings.findByPk(req.params.id, {Services, User, Pets, Staff}).catch((err) => res.status(500).json(err));
  res.status(200).json(bookings);
});


// GET BOOKINGS BY USER ID
router.get("/user/:id", async (req, res) => {
  console.log(req.params.id)
  const bookings = await Bookings.findAll(
    { where: { user_id: req.params.id } }, 
    { include: {Services, User, Pets, Staff}
  })
  .catch((err) => res.status(500).json(err));
  res.status(200).json(bookings);
});


// POST NEW BOOKING
router.post("/", async (req, res) => {
  await Bookings.create(req.body)
  return res.json({message: 'New booking created', newBooking: req.body});
});


// Not test
router.put("/Bookings/:id", async (req, res) => {
  // update a category by its `id` value
 try{
const bookingData = await Bookings.update(req.body,{
  where: {
    id:req.params.id
  }
})
res.status(200).json(bookingData)
 }catch(err){
  res.status(500).json(err)
 }
});


// NOT test
router.delete("/Bookings/:id", async (req, res) => {
  // delete a category by its `id` value
  try{
    const bookingData = await Bookings.destroy(req.body,{
      where: {
        id:req.params.id
      }
    })
    res.status(200).json(bookingData)
     }catch(err){
      res.status(500).json(err)
     }
  
});

module.exports = router;