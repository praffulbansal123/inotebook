import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import alertContext from '../context/alerts/alertContext'

const Signup = () => {

  const context = useContext(alertContext)
  const { generateAlert } = context

  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', phone: '', cpassword:'' })

  const {name, email, password, phone, cpassword} = credentials
  
  const navigate = useNavigate()
  
  const submitHandler = async (e) => {
    if(password !== cpassword ){
      generateAlert({ message: 'Password does not match', type: 'danger' })
    }
    e.preventDefault()
    const url = `${process.env.REACT_APP_API_URL}/user/register`
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, password, phone})
    });

    const json = await response.json()
    
    if(json.status){
      localStorage.setItem('token', json.token)
      navigate('/')
      generateAlert({message: json.message, type:'success'})
    }

    else{
      generateAlert({message: json.message, type:'danger'})
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <Form className='my-4' onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" onChange={onChange} name="name" placeholder="Enter your full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={onChange} name="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={onChange} name="password" placeholder="Enter your Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="cpassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" onChange={onChange} name="cpassword" placeholder="Re-Enter your Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" onChange={onChange} name="phone" placeholder="Enter your mobile number" />
      </Form.Group>
      
      <Button className='my-2' variant="primary" type="submit">
        SignUp
      </Button>
    </Form>
  )
}

export default Signup
