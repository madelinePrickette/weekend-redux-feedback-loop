import {useState} from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import CommentsFeedbackChar from '../CommentsFeedback/CommentsFeedbackChar';

function SupportFeedbackNum({}) {

    const [support, setSupport] = useState('');

    const history = useHistory();

    function handleNextToComments(){
        history.push("/CommentsFeedbackChar")
    }
    
    const handleSupportSubmission = event => {
        event.preventDefault();
        setType(event.target.value) //dispatch for support form
        console.log(event.target.value);
        return (
            <h4>The support form was submitted</h4>
        )
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