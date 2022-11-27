import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../src/components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
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