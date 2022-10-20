import express, { request, response } from 'express';
import { register } from '../controllers/auth.js';
const router = express.Router();


router.post("/", register);
export default router;