import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import drenchRouter from "./routes/DrenchRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3454;
const databaseUrl = process.env.DATABASE_URL;
app.use(express.json());
app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1", drenchRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = app.listen(port, () => {
  console.log("Running on", port);
});

mongoose
  .connect(databaseUrl)
  .then(() => console.log("db connect succesfull"))
  .catch((error) => console.log(error.message));
