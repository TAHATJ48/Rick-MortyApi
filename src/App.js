import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/Index';
import Main from './Pages/main';
function App() {
  return (
    <>
    <Router > 
      <Header/>
      <Main />
    </Router>
    </>
  );
}

export default App;
