import { request, response } from 'express';
import Room from '../models/Room.model.js';
import Hotel from '../models/Hotel.model.js';
import { createError } from '../utils/error.js';

export const getRoom = async (req = request, res = response, next) => {
  const idRoom = req.params.id;
  try {
    const room = await Room.findById( idRoom );
    res.status(200).json(room);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}

export const getAllRooms = async (req = request, res = response, next) => {

  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    console.log(error)
    next(error);
  }
}

export const createRoom = async (req = request, res = response, next) => {
  const idHotel = req.params.idHotel;
  const newRoom = new Room(req.body);
  try {
    const saveRoom = await newRoom.save();

    // Actualizamos el arreglo de rooms del Hotel
    try {
      await Hotel.findByIdAndUpdate(idHotel, { $push: { rooms: saveRoom._id }});
    } catch (error) {
      next();
    }
    res.status(200).json( saveRoom );
  } catch (error) {
    next(error)
  }
}

export const updateRoom = async (req = request, res = response) => {
  
  const idRoom = req.params.id;
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      idRoom, 
      { $set: req.body }, 
      { new: true } 
    );

    res.status(200).json( updatedRoom );
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}

export const deleteRoom = async (req = request, res = response) => {
  const idHotel = req.params.idHotel;
  const idRoom = req.params.id;

  try {
    await Room.findByIdAndDelete( idRoom );

    try {
      await Hotel.findByIdAndUpdate(idHotel, { $pull: { rooms: req.params.id }});
    } catch (error) {
      next();
    }

    res.status(200).json("Room has been deleted");
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}