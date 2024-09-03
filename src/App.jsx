
const name = 'Selena Garcia';

import './App.css'
import AboutMe from './components/about-me/about-me';
import Portfolio from './components/portfolio/portfolio';
import ContactMe from './components/contact-me/contact-me';
import Resume from './components/resume/resume';
import Nav from './components/navigation/navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Router>
      <header>
        {name}
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
