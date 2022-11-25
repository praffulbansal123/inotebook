import Joi from "joi";

/*
* @author Prafful Bansal
* @description Joi validation for creating new notes
*/
export const createNotesSchema = Joi.object({
    title: Joi.string().required().trim().min(3).label('Title is required and it should be at least 3 characters long'),
    description: Joi.string().required().trim().min(8).label('Description is required and it should be at least 8 characters long'),
    tag: Joi.string().trim().default('General')
});

/*
* @author Prafful Bansal
* @description Joi validation for updating the notes
*/
export const notesUpdateSchema = Joi.object({
    title: Joi.string().trim().min(3).label('Title should be at least 3 characters long'),
    description: Joi.string().trim().min(8).label('Description should be at least 8 characters long'),
    tag: Joi.string().trim()
});