import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import { Card, Col } from 'react-bootstrap'

const NoteItems = (props) => {
    const context = useContext(noteContext)
    const {deleteNote} = context
    const { note, updateNote } = props

    return (
        <Col className='col-md-3'>
            <Card className='my-3'>
                <Card.Body>
                    <div className='d-flex align-items-center'>
                        <Card.Title>{note.title}</Card.Title>
                        <i className="fa-solid fa-trash-can mx-2" onClick={() => {deleteNote(note._id)}}></i>
                        <i className="fa-regular fa-pen-to-square mx-2" onClick={() => {updateNote(note)}}></i>
                    </div>
                    <Card.Subtitle className="mb-2 text-muted">{note.tag}</Card.Subtitle>
                    <Card.Text>{note.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default NoteItems