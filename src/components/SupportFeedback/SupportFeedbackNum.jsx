import {useState} from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import CommentsFeedbackChar from '../CommentsFeedback/CommentsFeedbackChar';

function SupportFeedbackNum({}) {

    const [support, setSupport] = useState('');

    const history = useHistory();
    
    const handleSupportSubmission = event => {
        event.preventDefault();
        setType(event.target.value) //dispatch for support form
        console.log(event.target.value);
        dispatch({
            type: 'SET_SUPPORT',
            payload: feelings
          })
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