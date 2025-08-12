import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Wagonex</h1>
        <nav>
          <button className="nav-button">Home</button>
          <button className="nav-button">About</button>
          <button className="nav-button">Contact</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
