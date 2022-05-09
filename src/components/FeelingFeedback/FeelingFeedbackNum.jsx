import {useState} from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import UnderstandingFeedbackNum from '../UnderstandingFeedback/UnderstandingFeedbackNum';

function FeelingFeedbackNum({}) {

    const [feelings, setFeelings] = useState(''); // Do I do this on
    // every jsx component file?

    const history = useHistory();

    function handleNextToUnderstanding(){
        
    }

    const handleFeelingsSubmission = event => {
        event.preventDefault();
        setType(event.target.value) //dispatch?????
        console.log(event.target.value);
        dispatch({
            type: 'SET_FEELING',
            payload: feelings
          })
        history.push("/UnderstandingFeedbackNum")
    }

    // 

    return (
        //made two buttons because I dont
        //know how to make one button submit and change the DOM.
        //tried putting both on one button but it broke everything
        <>
            <h2>This is the feeling page</h2>
                <form onSubmit={handleFeelingsSubmission} >
                <input 
                    required
                    placeholder="How did you feel today?"
                    value={feelings} 
                    onChange={(event)=> setFeelings(event.target.value)}
                    // something I havent done yet, comes from router?
                />
                {/* taking value giving it to setter, setter changes state */}
            </form>
        </>
    )
}

export default FeelingFeedbackNum;