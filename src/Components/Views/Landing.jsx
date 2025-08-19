import logo from './logo.svg';
import './../../App.css';

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
      const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Weekly <code>Planner</code> 
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         © 2025 REBECA CARRIZO BOURLOT
        </a>
      </header>
    </div>
  )
}

export default Landing
