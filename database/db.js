import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
  try {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todo.gpcxrjj.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error while connecting with Database', error.message);
    throw error; // Re-throw the error to be caught by the server startup code
  }
};

export default Connection;
