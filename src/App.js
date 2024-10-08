import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header'; // Import the Header
import Footer from './components/Footer'; // Import the Footer
import './styles.css';
import { motion } from 'framer-motion';

function ProjectCard({ project }) {
return (
<motion.div
className="project-card"
whileHover={{ scale: 1.05 }} // Animates on hover
transition={{ duration: 0.2 }}
>
<h3>{project.title}</h3>
<p>{project.description}</p>
<a href={project.link}>View Project</a>
</motion.div>
);
}

function App() {
  return (
    <Router>
      <Header /> {/* Add the Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Add the Footer */}
    </Router>
  );
}

export default App;
