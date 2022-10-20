import express from 'express';
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// GET
router.get("/:id", getHotel)

//GET ALL
router.get("/", getAllHotels)

// CREATE
router.post("/", verifyAdmin, createHotel)

// UPDATE
router.patch("/:id", verifyAdmin, updateHotel)

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

export default router;