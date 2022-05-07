import {useState} from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import CommentsFeedbackChar from '../CommentsComponents/CommentsFeedbackChar';

function SupportFeedbackNum({}) {

    const history = useHistory();

    function handleNextToComments(){
        history.push("/CommentsFeedbackChar")
    }
    
    return (
        <>
        <h2>This is the support page.</h2>
        <button onClick={handleNextToComments}>
                Next to comments
        </button>
        </>
    )
}

export default SupportFeedbackNum;