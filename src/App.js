import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={MainPage}/> 
        <Route path='/resume' exact prop="/logo192.png"/> 
      </Switch>
      </Router>
    </>
  );
}

export default App;
