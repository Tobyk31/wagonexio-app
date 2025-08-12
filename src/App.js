import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div>
        <h1>Welcome to Wagonex!</h1>
        <p>Your app is working!</p>
      </div>
    </div>
  );
}

export default App;
