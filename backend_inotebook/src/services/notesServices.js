import Notes from "../models/notesModel.js";
import createError from "http-errors";

/*
* @author Prafful Bansal
* @description Service for creating new notes
*/
export const createNotes = async (input, userId) => {
    try {

        if(!userId)
            throw createError.BadRequest('User Login Required')
        
        input.user = userId

        const notes = await Notes.create(input);

        return notes

    } catch (error) {
        throw error;
    }
};

/*
* @author Prafful Bansal
* @description Service for getting all notes
*/
export const getNotes = async (userId) => {
    try {

        if(!userId)
            throw createError.BadRequest('User Login Required')

        const notes = await Notes.find({user: userId});

        if(notes.length===0)
            throw createError.NotFound('No notes for user exits')

        return notes;

    } catch (error) {
        throw error;
    }
};

/*
* @author Prafful Bansal
* @description Service for updating a notes
*/
export const updateNotes = async (notesId, userId, input) => {
    try {

        if(!userId)
            throw createError.BadRequest('User Login Required')

        const notes = await Notes.findById(notesId);

        if(!notes)
            throw createError.BadRequest(`No notes with ID:${notesId} exists`)

        if(notes.user.toString() !== userId.toString())
            throw createError.Unauthorized("Unauthorized")

        const updateInput = {}
        
        if(input.title)
            updateInput.title = input.title

        if(input.description)
            updateInput.description = input.description

        if(input.tag)
            updateInput.tag = input.tag
        
        const updatedNotes = await Notes.findByIdAndUpdate({_id: notes._id}, {$set: updateInput}, {new: true})
        
        return updatedNotes;

    } catch (error) {
        throw error;
    }
};

/*
* @author Prafful Bansal
* @description Service for deleting a notes
*/
export const deleteNotes = async (notesId, userId) => {
    try {

        if(!userId)
            throw createError.BadRequest('User Login Required')

        const notes = await Notes.findById(notesId);

        if(!notes)
            throw createError.BadRequest(`No notes with ID:${notesId} exists`)

        if(notes.user.toString() !== userId.toString())
            throw createError.Unauthorized("Unauthorized")
        
        const deletedNotes = await Notes.findByIdAndDelete({_id: notes._id})
        
        return deletedNotes;

    } catch (error) {
        throw error;
    }
};