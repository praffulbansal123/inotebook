import User from "../models/userModel.js";
import createError from "http-errors";
import lodash from 'lodash'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const { omit } = lodash

/*
* @author Prafful Bansal
* @description Service for creating new users
*/
export const createUser = async (input) => {
    try {

        const user = await User.create(input);

        return omit(user.toJSON(), "password")

    } catch (error) {
        throw error;
    }
};

/*
* @author Prafful Bansal
* @description Service for login
*/
export const userLogin = async (input) => {
    try {
  
        const user = await User.findOne({email: input.email});
  
        if (!user) {
            throw createError.BadRequest(`User with email:${input.email} does not exist`);
        }
  
        // comparing password
        const isPasswordMatch = await bcrypt.compare(input.password, user.password);
  
        if (!isPasswordMatch) {
            throw createError.BadRequest("Invalid Password");
        }
  
        // JWT logic
        const payload = {
            userId: user._id.toString(),
        };
  
        const secret = process.env.JWT_SECRET;
        const expiry = { expiresIn: process.env.JWT_EXPIRY };
  
        const token = jwt.sign(payload, secret, expiry);
  
        const obj = {token: token, user : omit(user.toJSON(), "password")};
        
        return obj;

    } catch (error) {
      throw error;
    }
};