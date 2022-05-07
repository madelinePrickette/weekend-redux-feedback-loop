import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingFeedbackNum from '../FeelingFeedback/FeelingFeedbackNum';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <footer>
          <Route exact path="/FeelingFeedbackNum">
            <FeelingFeedbackNum/>
          </Route>
          <Link to="/FeelingFeedbackNum">
            <button>Next</button>
          </Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
