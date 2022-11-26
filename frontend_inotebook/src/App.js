import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../src/components/Navbar'
import Home from './components/Home';
import About from './components/About';
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
            </Routes>
          </Container>
        </Router>
      </NoteState>
    </>
  );
}

export default App;