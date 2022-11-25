import createError from "http-errors";
import logger from "../logger/logger.js";
import jwt from "jsonwebtoken";

/*
* @author Prafful Bansal
* @description AuthMiddleware 
*/
export const authentication = async (req, res, next) => {

    try {

        let token = req.headers["authorization"];

        if (!token || token.split(" ")[0] !== 'Bearer')
            throw new createError.Unauthorized("Token is required...please login first.");

        token = token.split(" ")[1];

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        req.decodedToken = decodedToken

        next()

    } catch (error) {
        logger.info(error.message);
        error.status = 401
        next(error)
    }
}

export const authorizationByUserID = async (req, res, next) => {
    try {
        const decodedToken = req.decodedToken;
        const userId = req.params.userId;
  
        if(decodedToken.userId !== userId)
            throw new createError.Forbidden("Unauthorized access");
      
        next();
    } catch (error) {
        logger.info(error.message);
        next(error)
    }
};