
import NavBar from './section/NavBar'
import './App.css'
import HomeSection from './section/homeSection'
import FormSection from './section/FormSection'
import Footer from './section/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutSection } from './section/About'
import { MissionSection } from './section/Mission'
import { BusinessSection } from './section/Business'
import { ServicesSection } from './section/Services'
import { AccidentsSection } from './section/Accident'
import { ToastContainer } from "react-toastify";

function App() {

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeSection />} />
                <Route path="/form" element={<FormSection />} />
                <Route path="/About" element={<AboutSection />} />
                <Route path="/Mission" element={<MissionSection />} />
                <Route path="/Accidents" element={<AccidentsSection />} />
                <Route path="/Services" element={<ServicesSection />} />
                {/* <Route path="/Security" element={<SecuritySection />} /> */}
                <Route path="/Business" element={<BusinessSection />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </Router>
    );
}

export default App
