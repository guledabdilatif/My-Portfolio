import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import ProjectDetails from './Components/Portfolio/ProjectDetails'; // <-- new
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page with all sections */}
        <Route path="/" element={
          <>
            <Header />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
          </>
        } />

        {/* Project Details Page */}
        <Route path="/project/:id" element={<ProjectDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
