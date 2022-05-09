import {useState} from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function compilingInformation({}) {

    axios({
        method: 'POST',
        url: '', // I dont necessarily know what goes here
        data: {feelings, understanding,support,comments}
    }).then((response) => {
        console.log(response)
        //getInformation;  I have to make this still
        //Dont know if it goes on this page or not.
    }).catch((error) => {
        console.log('we have an error', error)
    })

    function fetchInformation ({}) {
        return (
            <h1>returned info will be here</h1>
        )
    }

    return (
        <h1>This is the final page, review.</h1>
    )
}