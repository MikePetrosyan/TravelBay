import mongoose from 'mongoose';

const connectToDb = async () => {
  try {
    mongoose.set('strictQuery', false);
    const connect = await mongoose.connect(process.env.MONGO_URI, {});

    console.log(`MongoDb connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
};

export default connectToDb;
