import logger from "../logger/logger.js";
import {createUser, userLogin } from "../services/userServices.js"
import mongoose from "mongoose";

/*
* @author Prafful Bansal
* @description User registration 
* @route POST user/register
*/
export const registerUser = async (req, res, next) => {
    try {

        const user = await createUser(req.body)

        return res.status(201).send({status: true, message: 'New user registered successfully', data: user})
    }
    catch(error){
        if(error instanceof mongoose.Error.ValidationError){
            error.status = 400
        }
        logger.info(error.message)
        next(error)
    }
}

/*
* @author Prafful Bansal
* @description User login 
* @route POST user/login
*/
export const loginUser = async (req, res, next) => {
    try {
        const login = await userLogin(req.body);

        res.header('Authorization', 'Bearer ' + login.token)

        return res.status(200).send({status: true, message: "Logged-in successfully", token: login.token, user: login.user})
       
    } catch (error) {
        logger.info(error.message);
        next(error);
    }
}