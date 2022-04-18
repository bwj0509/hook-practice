import React, { useEffect, useState } from 'react';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import Page from './Page';
import './App.css';
import { ThemeContext } from './context/ThemeContext';

function App() {

  const [isDark, setIsDark] = useState(false);


  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>


  );
}

export default App;



