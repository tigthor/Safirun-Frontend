import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './style';
import './App.css';
import Navbar from './components/Navbar';
import HomePage2 from './components/HomeP1';
import Footer from './components/Footer';
import Peoplesay from './components/whatPeopleAreSaying';
import Peoplepanel from './components/Peoplepanel';
import Logo from './components/logo';

function App() {
  // Create the count state.

  // Return the App component.
  return (
    <div className="App">
      <div className="Homepart">
        <header>
        <div style={{
          display: 'flex',
          position: 'relative',
          justifyContent: 'space-between'
        }}>
        <Logo />
          <Navbar />
        </div>
        </header>
        <div className="SiteSearchPanel">
          <HomePage2 />
        </div>
      </div>
      <Peoplepanel />
    </div>
  );
}

export default App;
