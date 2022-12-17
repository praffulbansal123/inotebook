import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../src/components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';
import { Container } from 'react-bootstrap';
import Alert from './components/Alert';
import alertContext from './context/alerts/alertContext'
import { useContext } from 'react';

function App() {

  const context = useContext(alertContext)
  
  const { alert } = context

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route excat path="/about" element={<About />} />
              <Route excat path="/login" element={<Login />} />
              <Route excat path="/signup" element={<Signup />} />
            </Routes>
          </Container>
        </Router>
      </NoteState>
    </>
  );
}

export default App;