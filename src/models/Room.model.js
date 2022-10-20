import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoomSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  maxPeople: {
    type: Number,
    required: true
  },
  roomNumbers: [{number: Number, unavaibleDates: { type:[Date] } }]
}, { timestamps: true });

export default mongoose.model("Room", RoomSchema)