import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, getHotelRooms, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();
// GET Quantity of hotels for cities
router.get("/countByCity", countByCity);

// GET of hotels types
router.get("/countByType", countByType);

// GET ALL the  rooms for hotel
router.get("/rooms/:id", getHotelRooms);

//GET ALL
router.get("/", getAllHotels)

// GET
router.get("/:id", getHotel)


// CREATE
router.post("/", verifyAdmin, createHotel)

// UPDATE
router.patch("/:id", verifyAdmin, updateHotel)

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

export default router;