import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Management from './pages/Management';
import Live from './pages/Live';
import Media from './pages/Media';
import Records from './pages/Records';
import Studio from './pages/Studio';
import Submissions from './pages/Submissions';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="management" element={<Management />} />
          <Route path="live" element={<Live />} />
          <Route path="media" element={<Media />} />
          <Route path="records" element={<Records />} />
          <Route path="studio" element={<Studio />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;