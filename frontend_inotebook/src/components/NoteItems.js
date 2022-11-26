import React from 'react'
import { Card, Col } from 'react-bootstrap'

const NoteItems = (props) => {

    const { note } = props
    return (
        <Col className='col-md-3'>
            <Card className='my-3'>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{note.tag}</Card.Subtitle>
                    <Card.Text>{note.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default NoteItems