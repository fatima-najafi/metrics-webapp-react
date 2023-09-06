import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomepageList from './components/homepage/HomepageList';
import Detailspage from './components/details/Detailspage';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomepageList />} />
        <Route path="/details/:smbl" element={<Detailspage />} />
      </Routes>
    </Router>

  );
}

export default App;
