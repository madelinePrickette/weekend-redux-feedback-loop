import {useState} from 'react';
import axios from 'axios';

function CommentsFeedbackChar({}) {

    const [comments, setComments] = useState('');

    const history = useHistory();

    const handleSubmission = event => {
        event.preventDefault();
        setType(event.target.value) //dispatching the comments
        console.log(event.target.value);
        dispatch({
            type: 'SET_SUPPORT',
            payload: feelings
          })
    }

    return (
        <>
        <h2>This is the comments page.</h2>
        <button onClick={handleNextToReview}>
                Next to Review
        </button>
        </>
    )
}

export default CommentsFeedbackChar;