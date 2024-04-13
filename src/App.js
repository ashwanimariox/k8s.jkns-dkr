import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="menu-toggle" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      <div className="content">
        {/* Main content goes here */}
      </div>
      <footer className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          {/* Log Out option */}
          <li><a href="/logout">Log Out</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
