import { request, response } from 'express';
import Hotel from '../models/Hotel.model.js';
import { createError } from '../utils/error.js';

export const getHotel = async (req = request, res = response) => {
  const idHotel = req.params.id;
  try {
    const hotel = await Hotel.findById( idHotel );
    res.status(200).json(hotel);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}

export const getAllHotels = async (req = request, res = response, next) => {

  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    console.log(error)
    next(error);
  }
}

export const createHotel = async (req = request, res = response) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json( saveHotel );
  } catch (error) {
    res.status(500).json(error);
  }
}

export const updateHotel = async (req = request, res = response) => {
  const idHotel = req.params.id;
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(idHotel, { $set: req.body }, { new: true } );
    res.status(200).json( updatedHotel );
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}

export const deleteHotel = async (req = request, res = response) => {
  const idHotel = req.params.id;
  try {
    await Hotel.findByIdAndDelete( idHotel );
    res.status(200).json("Hotel has been deleted");
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}