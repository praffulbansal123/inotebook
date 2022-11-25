import express from "express";
import createError from "http-errors";
import dotenv from "dotenv";
import Database from "../src/db/db.js";
import userRouter from "./routes/userRoute.js";

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

// diverting user request to user router
app.use("/user", userRouter);

// checking invalid route
app.use(async (req, res, next) => {
    next(createError.NotFound("This route does not exits"));
});
  
// Intializing error-handling
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({ status: false, statusCode: error.status || 500, message: error.message });
});
  
export default app;