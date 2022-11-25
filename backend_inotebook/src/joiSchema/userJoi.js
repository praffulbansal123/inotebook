import Joi from "joi";

/*
* @author Prafful Bansal
* @description Joi validation for new user registration
*/
export const registerUserSchema = Joi.object({
    name: Joi.string().required().trim().min(3).label('Name is required and it should be at least 3 characters long'),
    email: Joi.string().required().email().trim().lowercase().label('Email Id is required and should be a valid Email ID'),
    password: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)).required().label('Password is required and it should be at least 8 characters long and should contain at least a special character, a upper case characters, a lower case character and a digit'),
    phone: Joi.number().required().min(6000000000).max(9999999999).label('Mobile number is required')
});

/*
* @author Prafful Bansal
* @description Joi validation for user login
*/
export const loginUserSchema = Joi.object({
  email : Joi.string().email().trim().lowercase(),
  password : Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)).required()
})