import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './utils/scrollToTop';

import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";
import Contacts from "./components/pages/Contacts";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
