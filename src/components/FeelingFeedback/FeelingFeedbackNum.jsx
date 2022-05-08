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
        history.push("/UnderstandingFeedbackNum")
    }

    const handleFeelingsSubmission = event => {
        event.preventDefault();
        return (
            <h4>The form was submitted</h4> // not showing up
        )
    }

    axios({ // is this supposed to go in each component file?
        // that was my plan but I'm unsure its correct
        method: 'POST',
        url: '/',
        data: {feelings}
    }).then((response) => {
        console.log('this is post response from feeling feedback component', response)
    }).catch((error) => {
        console.log('error in feeling feedback component', error)
    })

    return (
        //made two buttons because I dont
        //know how to make one button submit and change the DOM.
        //tried putting both on one button but it broke everything
        <>
            <h2>This is the feeling page</h2>
                <form onSubmit={handleFeelingsSubmission}>
                <input 
                    required
                    placeholder="How did you feel today?"
                    value="something I havent done yet, comes from router?"
                    onChange={(event)=> setFeelings(event.target.value)}
                    // 
                />
                {/* taking value giving it to setter, setter changes state */}
                
                <button type="submit"> 
                    Submit
                </button>

                <footer>
                {/* works */}
                    <button onClick={handleNextToUnderstanding}> 
                        Next to understanding
                    </button>
                </footer>
            </form>
        </>
    )
}

export default FeelingFeedbackNum;