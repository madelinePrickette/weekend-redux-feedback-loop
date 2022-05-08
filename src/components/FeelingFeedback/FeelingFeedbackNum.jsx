import {useState} from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import UnderstandingFeedbackNum from '../UnderstandingFeedback/UnderstandingFeedbackNum';

function FeelingFeedbackNum({}) {

    const [feelings, setFeelings] = useState('');

    const history = useHistory();

    function handleNextToUnderstanding(){
        history.push("/UnderstandingFeedbackNum")
    }

    const handleFeelingsSubmission = event => {
        event.preventDefault();
        return (
            <h4>The form was submitted</h4>
        )
    }

    return (
        <>
            <h2>This is the feeling page</h2>
                <form onSubmit={handleFeelingsSubmission}>
                <input 
                    required
                    placeholder="How did you feel today?"
                    value=""
                    onChange={(event)=> setFeelings(event.target.value)}
                />
                <button type="submit">
                    Submit
                </button>

                <footer>
                    <button onClick={handleNextToUnderstanding}>
                        Next to understanding
                    </button>
                </footer>
            </form>
        </>
    )
}

export default FeelingFeedbackNum;