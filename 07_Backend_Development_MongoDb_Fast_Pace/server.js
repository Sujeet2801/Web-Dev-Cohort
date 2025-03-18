
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import database from "./utils/database.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true, // to enable storing cookie
    methods: ["GET", "POST", "DELETE", "OPTIONS"], // not case sensitive
    allowedHeaders: ["Content-Type", "Authorization"], // case sensitive
  })
);

app.use(express.json()); // to accept json data
app.use(express.urlencoded({ extended: true })); // to accept data from url
app.use(cookieParser());

// Connect to db
database();

// User routes
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});