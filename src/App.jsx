import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DarkTech from './pages/DarkTech';
import EduApp from './pages/EduApp';
import './App.css';

function App() {
  return (
    <Router basename="/">
      <div className="app-wrapper">
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 160px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dark-tech" element={<DarkTech />} />
            <Route path="/edu-app" element={<EduApp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
