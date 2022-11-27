import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'
import { Form, Button, Container } from 'react-bootstrap'

const AddNote = () => {
    const context = useContext(noteContext)
    const {addNote} = context

    const [note, setNote] = useState({title: "", description: "", tag: ""})
    
    const addNoteHandler = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <Container className='my-3'>
            <h2>Add Notes</h2>
            <Form className='my-3'>
                <Form.Group className="mb-3" controlId="title" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title of the note" name='title' value={note.title} onChange={onChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description of the note" name='description' value={note.description} onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="tag" >
                    <Form.Label>Tag</Form.Label>
                    <Form.Control type="text" placeholder="Enter Tag for the note" name='tag' value={note.tag} onChange={onChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addNoteHandler} >
                    Add Note
                </Button>
            </Form>
        </Container>
    )
}

export default AddNote