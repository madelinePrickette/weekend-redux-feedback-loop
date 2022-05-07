import {useState} from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SupportFeedbackNum from '../SupportFeedback/SupportFeedbackNum';

function UnderstandingFeedbackNum({}) {

    const history = useHistory();

    function handleNextToSupport(){
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