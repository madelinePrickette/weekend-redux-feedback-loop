import {useState} from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SupportFeedbackNum from '../SupportFeedback/SupportFeedbackNum';

function UnderstandingFeedbackNum({}) {

    const [understanding, setunderstanding] = useState('');

    const history = useHistory();
    
    const handleUnderstandingSubmission = event => {
        event.preventDefault();
        setType(event.target.value) //dispatch for understanding
        console.log(event.target.value);
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: feelings
          })
        history.push("/SupportFeedbackNum")


    }

    return (
        <>
            <h2>This is the understanding page.</h2>
            <button onClick={handleNextToSupport}>
                Next to support
            </button>
        </>
    )
}

export default UnderstandingFeedbackNum;