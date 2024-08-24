// Patches
import { inject, errorHandler } from "express-custom-error";
inject(); // Patch express in order to use async / await syntax

// Require Dependencies
import env from "mandatoryenv";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";

import logger from "./util/logger";

// Load .env Enviroment Variables to process.env

env.load(["DB_URL", "PORT", "SECRET"]);

const { PORT } = process.env;

// Instantiate an Express Application

const app = express();
mongoose
  .connect("mongodb+srv://owner:IrYKuyywOeFxMNty@cluster0.53lew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// Configure Express App Instance
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Configure custom logger middleware
app.use(logger.dev, logger.combined);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
app.use(helmet());

// This middleware adds the json header to every response
app.use("*", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// Assign Routes
import router from "./routes/router";

app.use("/", router);
app.use("/health", (req, res) => {
  res.status(200).json({ status: true, message: "Server is running" });
});

// Handle errors
app.use(errorHandler());

// Handle not valid route
app.use("*", (req, res) => {
  res.status(404).json({ status: false, message: "Endpoint Not Found" });
});

// Open Server on configurated Port

app.listen(PORT, () => console.info("Server listening on port ", PORT));
