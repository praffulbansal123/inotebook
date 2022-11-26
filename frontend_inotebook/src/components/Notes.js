import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItems from './NoteItems'
import { Row } from 'react-bootstrap'

const Notes = () => {

    const context = useContext(noteContext)
    const { notes } = context

    return (
        <Row className='my-3'>
            <h2>Your Notes</h2>
            {notes.map((note) =>{
                return <NoteItems key={note._id} note={note} />
            })
            }
        </Row>
    )
}

export default Notes