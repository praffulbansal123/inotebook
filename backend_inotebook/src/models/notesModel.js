import mongoose from "mongoose"

const {Schema, model} = mongoose

/*
* @author Prafful Bansal
* @description Notes schema and model objects
*/
export const notesSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
    title: {type: String, required: true},
    description: {type: String, required: true},
    tag: {type: String, required: true},
}, {timestamps: true})

// Creating Model
const Notes = model('Notes', notesSchema);

export default Notes;