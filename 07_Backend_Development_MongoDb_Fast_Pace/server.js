import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// import db from './utils/db.js'
import database from "./utils/database.js";
import cookieParser from "cookie-parser";

//import all routes
import userRoutes from "./routes/user.routes.js";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"], // not case sensitive
    allowedHeaders: ["Content-Type", "Authorization"], // case sensitive
  })
);

app.use(express.json()); // to accept json data
app.use(express.urlencoded({ extended: true })); // to accept data from url
app.use(cookieParser());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Cohort!");
});

app.get("/hitesh", (req, res) => {
  res.send("Hitesh");
});

app.get("/piyush", (req, res) => {
  res.send("Piyush!");
});

//connect to db
database();

//user routes
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});