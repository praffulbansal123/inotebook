import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItems from './NoteItems'
import { Row, Button, Modal, Form, Container } from 'react-bootstrap'
import AddNote from './AddNote'

const Notes = () => {

    const context = useContext(noteContext)
    const { notes, getNote, editNote } = context
    useEffect(() => {
        getNote()
        // eslint-disable-next-line
    }, [])

    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})
    const [show, setShow] = useState(false);

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
    }

    const ref = useRef(null)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateNoteHandler = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        setShow(false)
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote />
            <Button className='d-none' ref={ref} variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='my-3'>
                        <Form.Group className="mb-3" controlId="etitle" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={note.etitle} name='etitle' onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="edescription" >
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" value={note.edescription} name='edescription' onChange={onChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="etag" >
                            <Form.Label>Tag</Form.Label>
                            <Form.Control type="text" value={note.etag} name='etag' onChange={onChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateNoteHandler} >
                        Update Note
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row className='my-3'>
                <h2>Your Notes</h2>
                <Container style={{"paddingLeft": "20px"}}>
                    {notes.length===0 && 'No notes to display'}
                </Container>
                {notes.map((note) => {
                    return <NoteItems key={note._id} updateNote={updateNote} note={note} />
                })
                }
            </Row>
        </>
    )
}

export default Notes