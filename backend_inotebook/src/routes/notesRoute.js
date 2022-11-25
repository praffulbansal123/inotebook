import express from "express";
import { addNotesSchema, updateNotesSchema } from "../middleware/joiValidator.js";
import * as NotesController from "../controller/notesController.js"
import * as Authentication from "../middleware/auth.js"

const router = express.Router();

// Testing Route
router.get("/test", function (req, res) {
  res.send({ status: true, message: "test-api working fine" });
});

// Create notes route
router.post('/create', addNotesSchema, Authentication.authentication, NotesController.createNotesHandler)

// Get notes route
router.get('/get', Authentication.authentication, NotesController.getNotesHandler)

// Update notes route
router.put('/updateNotes/:notesId', updateNotesSchema, Authentication.authentication, NotesController.updateNotesHandler)

// Delete notes route
router.delete('/deleteNotes/:notesId', Authentication.authentication, NotesController.deleteNotesHandler)

export default router;