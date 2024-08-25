import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FeatureList from './components/FeatureList';
import FacilityDetails from './components/FacilityDetails';
import ChallengeList from './components/ChallengeList';
import Gallery from './components/Gallery';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/challenges">Challenges</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeatureList />} />
            <Route path="/facilities" element={<FacilityDetails />} />
            <Route path="/challenges" element={<ChallengeList />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer /> {/* Add the Footer component */}
      </div>
    </Router>
  );
}

export default App;
