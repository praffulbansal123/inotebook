import Joi from "joi";

/*
* @author Prafful Bansal
* @description Joi validation for new user registration
*/
export const registerUserSchema = Joi.object({
    name: Joi.string().required().trim().min(3),
    email: Joi.string().required().email().trim().lowercase(),
    password: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)).required(),
    phone: Joi.number().required().min(6000000000).max(9999999999)
});

/*
* @author Prafful Bansal
* @description Joi validation for user login
*/
export const loginUserSchema = Joi.object({
  email : Joi.string().email().trim().lowercase(),
  password : Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)).required()
})