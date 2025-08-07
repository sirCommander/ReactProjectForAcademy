import React from "react";

import "../styles/header.css";

function Header({ updateTheme, currentTheme }) {
  return (
    <header className={ currentTheme}>
      <h1>
        Welcome to My React App
         
        <button onClick={() => updateTheme("light")} className="light-btn">Light</button>  
        <button onClick={() => updateTheme("dark")} className="dark-btn">Dark</button>  
      </h1>
      <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;