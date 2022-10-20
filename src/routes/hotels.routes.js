import express, { request, response } from 'express';
import Hotel from '../models/Hotel.model.js';
const router = express.Router();

// GET
router.get("/:id", async (req = request, res = response) => {
  const idHotel = req.params.id;
  try {
    const hotel = await Hotel.findById( idHotel );
    res.status(200).json(hotel);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

//GET ALL
router.get("/", async (req = request, res = response) => {
  try {
    const hotels = await Hotel.find( );
    res.status(200).json(hotels);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})


// CREATE
router.post("/", async (req = request, res = response) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json( saveHotel );
  } catch (error) {
    res.status(500).json(error);
  }
})

// UPDATE
router.patch("/:id", async (req = request, res = response) => {
  const idHotel = req.params.id;
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(idHotel, { $set: req.body }, { new: true } );
    res.status(200).json( updatedHotel );
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

//DELETE
router.delete("/:id", async (req = request, res = response) => {
  const idHotel = req.params.id;
  try {
    await Hotel.findByIdAndDelete( idHotel );
    res.status(200).json("Hotel has been deleted");
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
})

export default router;