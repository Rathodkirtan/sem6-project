import mongoose from "mongoose";

const dbconnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kirtan12082004:iWYbplHp1U1wYc5Z@cluster0.sy7zz.mongodb.net/projectregister"
    );
    console.log("connection success");
  } catch (error) {
    console.log(error);
  }
};

export default dbconnection;
