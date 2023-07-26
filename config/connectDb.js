import mongoose from "mongoose";

console.log(process.env.DB_URI)

process.env.DB_URI = "mongodb+srv://mhmdmcsd:Passw0rd1@cluster0.tuflupv.mongodb.net/?retryWrites=true&w=majority"
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
