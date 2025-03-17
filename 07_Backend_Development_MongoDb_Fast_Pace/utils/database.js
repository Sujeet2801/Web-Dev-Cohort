import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const database = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to mongodb");
      })
      .catch((err) => {
        console.log("Error connecting to mongodb", err.message);
      });
}

export default database;
