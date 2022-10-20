import { request, response } from 'express';
import User from '../models/User.model.js';
import { createError } from '../utils/error.js';

export const getUser = async (req = request, res = response) => {
  const idUser = req.params.id;
  try {
    const user = await User.findById( idUser );
    res.status(200).json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}

export const getAllUsers = async (req = request, res = response, next) => {

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error)
    next(error);
  }
}


export const updateUser = async (req = request, res = response) => {
  const idUser = req.params.id;
  console.log(idUser);
  try {
    const updatedUser = await User.findByIdAndUpdate(idUser, { $set: req.body }, { new: true } );
    res.status(200).json( updatedUser );
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}

export const deleteUser = async (req = request, res = response) => {
  const idUser = req.params.id;
  try {
    await User.findByIdAndDelete( idUser );
    res.status(200).json("User has been deleted");
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}