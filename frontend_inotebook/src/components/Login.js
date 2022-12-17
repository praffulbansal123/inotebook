import React, { useContext, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import alertContext from '../context/alerts/alertContext'

const Login = () => {

    const context = useContext(alertContext)
    const { generateAlert } = context


    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const submitHandler = async (e) => {
        e.preventDefault()
        const url = `${process.env.REACT_APP_API_URL}/user/login`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        if(json.status){
            localStorage.setItem('token', json.token)
            navigate('/')
            generateAlert({message: json.message, type: 'success'})
        } else {
            generateAlert({message: json.message, type: 'danger'})
        }

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <Container>
            <Form className='my-4' onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={credentials.email} onChange={onChange} name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={credentials.password} onChange={onChange} name="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Login