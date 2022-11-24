import express from "express";
import createError from "http-errors";
import dotenv from "dotenv";
import Database from "../src/db/db.js";

// dotenv configuration
dotenv.config();

// express app configuration
const app = express();

const port = parseInt(process.env.PORT);

app.set("port", port);

// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database initialized
Database.init();

// Testing Route
app.use("/test", function (req, res) {
    res.send({ status: true, message: "test-api working fine" });
});

// checking invalid route
app.use(async (req, res, next) => {
    next(createError.NotFound("This route does not exits"));
});
  
// Intializing error-handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ status: false, status1: err.status || 500, mssg: err.message });
});
  
export default app;