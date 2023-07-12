// utils/dbConnection.ts
import mongoose from 'mongoose';

const connectDB = async (tenentName: string): Promise<void> => {
  try {
    await mongoose.connect(`${process.env.dbUrl}/${tenentName}`!, {"autoIndex": true});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;
