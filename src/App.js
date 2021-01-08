import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MyJourney from './components/pages/MyJourney';
import Community from './components/pages/Community';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/my-journey' exact component={MyJourney}/> 
        <Route path='/community' exact component={Community}/> 
      </Switch>
      </Router>
    </>
  );
}

export default App;
