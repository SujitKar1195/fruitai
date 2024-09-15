// src/App.js

import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styled, {ThemeProvider} from 'styled-components';
import Navbar from './Navbar';
import Login from './Login';
import Home from './Home';
import Chatbot from './Chatbot';
import Translator from './Translator';
import Faq from './Faq';
import About from './About';
import {lightTheme, darkTheme} from './Theme';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='/chatbot'
            element={<Chatbot />}
          />
          <Route
            path='/translator'
            element={<Translator />}
          />
          <Route
            path='/faq'
            element={<Faq />}
          />
          <Route
            path='/about'
            element={<About />}
          />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
