import express, { request, response } from 'express';
const router = express.Router();

router.get("/", (req = request, res = response) => {
  res.send("Aquii")
})
router.get("/register", (req = request, res = response) => {
  res.send("Aquii registracion")
})
export default router;