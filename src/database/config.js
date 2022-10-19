import mongoose from 'mongoose';

export const dbConnection = async() => {
  try {
    await mongoose.connect( process.env.MONGODB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log('Base de datos online');
  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de iniciar la base de datos');
  }

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
  })
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  })
}