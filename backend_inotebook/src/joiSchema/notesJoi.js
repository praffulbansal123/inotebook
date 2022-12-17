import Joi from "joi";

/*
* @author Prafful Bansal
* @description Joi validation for creating new notes
*/
export const createNotesSchema = Joi.object({
    title: Joi.string().required().trim().min(3),
    description: Joi.string().required().trim().min(8),
    tag: Joi.string().trim().default('General')
});

/*
* @author Prafful Bansal
* @description Joi validation for updating the notes
*/
export const notesUpdateSchema = Joi.object({
    title: Joi.string().trim().min(3),
    description: Joi.string().trim().min(8),
    tag: Joi.string().trim()
});