import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
function App() {
  return (
    <>
      <Header/>
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
