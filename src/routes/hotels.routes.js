import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();
// GET
router.get("/countByCity", countByCity);

// GET
router.get("/countByType", countByType);

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