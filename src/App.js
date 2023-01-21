import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import ProjectPage from "./components/pages/ProjectPage";
import Contacts from "./components/pages/Contacts";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectPage" element={<ProjectPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
