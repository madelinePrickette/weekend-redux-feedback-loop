import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingFeedbackNum from '../FeelingFeedback/FeelingFeedbackNum';
import UnderstandingFeedbackNum from '../UnderstandingFeedback/UnderstandingFeedbackNum';
import SupportFeedbackNum from '../SupportFeedback/SupportFeedbackNum';
import CommentsFeedbackChar from '../CommentsComponents/CommentsFeedbackChar';

function App() {

  return (
    <Router>
      <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
        <Route exact path="/">
          <FeelingFeedbackNum />
        </Route>
        <Route exact path="/UnderstandingFeedbackNum">
          <UnderstandingFeedbackNum />
        </Route>
        <Route exact path="/SupportFeedbackNum">
          <SupportFeedbackNum />
        </Route>
        <Route exact path="/CommentsFeedbackChar">
          <CommentsFeedbackChar />
        </Route>
      </div>
    </Router>
  );
}

export default App;
