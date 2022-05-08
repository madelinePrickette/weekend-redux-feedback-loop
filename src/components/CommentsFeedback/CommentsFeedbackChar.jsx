import {useState} from 'react';
import axios from 'axios';

function CommentsFeedbackChar({}) {
comments
    const handleSubmission = event => {
        event.preventDefault();
        setType(event.target.value) //dispatching the comments
        console.log(event.target.value);
        return (
            <h4>The comments were submitted</h4>
        )
    }

    return (
        <h2>This is the Comments page</h2>
    )
}

export default CommentsFeedbackChar;