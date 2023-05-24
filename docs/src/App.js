import './App.css';
// import Header  from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About'
import Project from './pages/Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
