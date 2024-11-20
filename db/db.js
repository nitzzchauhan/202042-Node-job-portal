import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.log(err.message);
  }
};

export default dbConnect;

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useUnifiedTopology: true,
//             useNewUrlParser: true,
//             useCreateIndex: true,
//         });
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// };

// export default connectDB;
