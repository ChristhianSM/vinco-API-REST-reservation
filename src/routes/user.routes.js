import express from 'express';
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello user, you are logged in")
})
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Hello user, you are logged and you can delete your account ")
})
router.get("/checkadmin", verifyAdmin, (req, res, next) => {
  res.send("Hello admin, you are logged and you can delete all account ")
})

// GET
router.get("/:id", getUser)

//GET ALL
router.get("/",verifyAdmin, getAllUsers)

// UPDATE
router.patch("/:id", verifyUser, updateUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

export default router;