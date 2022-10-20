import { request, response } from 'express';
import User from '../models/User.model.js';

export const register = async (req = request, res = response) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
  
    await newUser.save();
    res.status(200).send("User has been created");
  } catch (error) {
    next(error)
  }
}