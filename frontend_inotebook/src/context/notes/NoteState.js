import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = process.env.REACT_APP_API_URL

  const [notes, setNotes] = useState([]);
  const token = process.env.REACT_APP_TOKEN_KEY
  
  // Get all notes
  const getNote = async () => {
    
    // get notes(GET) API call
    const url = `${host}/notes/get`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token,
      }
    });
    const json = await response.json()
    
    // Logic to Get all Notes
    setNotes(json.data)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {

    // add note(POST) API call
    const url = `${host}/notes/create`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token,
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json()
    
    // Logic to Add a Note
    setNotes(notes.concat(json.data))
  }

  // Delete a Note
  const deleteNote = async (noteId) => {

    // delete note(DELETE) API call
    const url = `${host}/notes/deleteNotes/${noteId}`
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    });
    const json = await response.json()

    const newNotes = notes.filter((note) => { return note._id !== noteId })
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (noteId, title, description, tag) => {

    // update note(PUT) API call
    const url = `${host}/notes/updateNotes/${noteId}`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json

    // Logic to Edit the Note
    const newNotes = notes.map(note => {
      if (note._id === noteId) {
        return {
          ...note,
          title: title,
          description: description,
          tag: tag
        }
      }
      return note
    })
    setNotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;