import logger from "../logger/logger.js";
import {createNotes, getNotes, updateNotes, deleteNotes} from "../services/notesServices.js"

/*
* @author Prafful Bansal
* @description Create notes  
* @route POST notes/create
*/
export const createNotesHandler = async (req, res, next) => {
    try {
        const userId = req.decodedToken.userId

        const notes = await createNotes(req.body, userId)

        return res.status(201).send({status: true, message: 'New note added successfully', data: notes})
    }
    catch(error){
        logger.info(error.message)
        next(error)
    }
}

/*
* @author Prafful Bansal
* @description Get all notes  
* @route GET notes/get
*/
export const getNotesHandler = async (req, res, next) => {
    try{
        const userId = req.decodedToken.userId

        const notes = await getNotes(userId)

        return res.status(200).send({status: true, message: 'Notes retrieved successfully', number:notes.length, data: notes})
    }
    catch(error){
        logger.info(error.message)
        next(error)
    }
}

/*
* @author Prafful Bansal
* @description  Update a note 
* @route PUT notes/updateNote/:notesId
*/
export const updateNotesHandler = async (req, res, next) => {
    try{
        const notesId = req.params.notesId

        const userId = req.decodedToken.userId

        const notes = await updateNotes(notesId, userId, req.body)

        return res.status(200).send({status: true, message: 'Notes updated successfully', data: notes})
    }
    catch(error){
        logger.info(error.message)
        next(error)
    }
}

/*
* @author Prafful Bansal
* @description  Delete a note 
* @route DELETE notes/deleteNote/:notesId
*/
export const deleteNotesHandler = async (req, res, next) => {
    try{
        const notesId = req.params.notesId

        const userId = req.decodedToken.userId

        const notes = await deleteNotes(notesId, userId)

        return res.status(200).send({status: true, message: 'Notes deleted successfully', data: notes})
    }
    catch(error){
        logger.info(error.message)
        next(error)
    }
}