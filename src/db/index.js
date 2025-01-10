import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
        const connectResponse =await mongoose.connect(`${process.env.MONGO_URI}/KoinX`);
        console.log(`MongoDB connected: ${connectResponse.connection.host}`);
    } catch (error) {
        console.log("Error in connecting MongoDB: ", error)
        process.exit(1);
    }
}

export default connectDB;