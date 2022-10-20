import express from 'express';
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// GET
router.get("/:id", getRoom)

//GET ALL
router.get("/", getAllRooms)

// CREATE
router.post("/:idHotel", verifyAdmin, createRoom)

// UPDATE
router.patch("/:id", verifyAdmin, updateRoom)

//DELETE
router.delete("/:idHotel/:id", verifyAdmin, deleteRoom)

export default router;