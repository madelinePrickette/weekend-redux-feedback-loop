import {useState} from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import UnderstandingFeedbackNum from '../UnderstandingFeedback/UnderstandingFeedbackNum';

function FeelingFeedbackNum({}) {

    const history = useHistory();

    function handleNextToUnderstanding(){
        history.push("/UnderstandingFeedbackNum")
    }

    return (
        <>
            <h2>This is the feeling page</h2>
            <button onClick={handleNextToUnderstanding}>
                Next to understanding
            </button>
        </>
    )
}

export default FeelingFeedbackNum;