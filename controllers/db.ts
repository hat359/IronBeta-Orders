import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://harsh:NaS@VeR123@cluster0.xukqm6n.mongodb.net/';



const connectDB = async () => {
  
  try {
    const conn = await mongoose.connect(MONGODB_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    // Asserting err is an instance of Error
    if (err instanceof Error) {
      console.error(`Error connecting to MongoDB: ${err.message}`);
    } else {
      console.error(`Error connecting to MongoDB: ${err}`);
    }
    process.exit(1);
  }
};

export default connectDB;