import { request, response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.model.js';
import { createError } from '../utils/error.js';

export const register = async (req = request, res = response) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
  
    await newUser.save();
    res.status(200).send("User has been created");
  } catch (error) {
    next(error)
  }
}
export const login = async (req = request, res = response, next) => {

  try {
    const user = await User.findOne( { username: req.body.username } );
    if (!user) return next( createError(404, "User not found") );

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) return next( createError(400, "Wrong password or username") );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res.status(200).json(otherDetails);
  } catch (error) {
    next(error)
  }
}