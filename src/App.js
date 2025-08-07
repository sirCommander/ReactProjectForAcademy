import './App.css';
import React, { useState } from 'react';

import Main from './components/main.jsx';
import Header from './components/header.jsx';

function App() {
 const [theme, setTheme] = useState("light");
 const handleThemeUpdate = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={theme}>
      <Header updateTheme={handleThemeUpdate} currentTheme={theme} />
      <Main />
    </div>
  );
}

export default App;
