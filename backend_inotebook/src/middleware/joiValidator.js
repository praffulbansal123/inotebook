import { registerUserSchema, loginUserSchema } from '../joiSchema/userJoi.js'
import { createNotesSchema, notesUpdateSchema } from '../joiSchema/notesJoi.js'

/*
* @author Prafful Bansal
* @description Joi validation for the incoming request
*/
const requestValidator = (req, next, schema) => {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        // joi error status
        error.status = 422; 
        return next(error);
    } else {
        req.body = value;
       return next();
    }
}

export const createUserSchema = (req, res, next) => {
    const schema = registerUserSchema
    requestValidator(req, next, schema);
}

export const loginSchema = (req, res, next) => {
    const schema = loginUserSchema
    requestValidator(req, next, schema);
}

export const addNotesSchema = (req, res, next) => {
    const schema = createNotesSchema
    requestValidator(req, next, schema);
}

export const updateNotesSchema = (req, res, next) => {
    const schema = notesUpdateSchema
    requestValidator(req, next, schema);
}