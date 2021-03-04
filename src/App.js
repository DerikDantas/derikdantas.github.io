import React, { useState, useEffect } from 'react';
import { GlobalStyles } from './Styles/GlobalStyles.js';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

import Navbar from './components/Navbar/index.js';
import Banner from './components/Banner/index.js'
import Sobre from './components/Sobre/index.js';
import Skills from './components/Skills/index.js';
import Contato from './components/Contato/index.js';
import Footer from './components/Footer/index.js';
import Projetos from './components/Projetos/index.js';


function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark")
    } else{
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>

      <Navbar />
      
      <Banner />

      <Sobre />

      <Skills />

      <Projetos />

      <Contato />

      <Footer toggleTheme={toggleTheme} theme={theme}  />

      <GlobalStyles />
    </ThemeProvider>    
  );
}

export default App;
