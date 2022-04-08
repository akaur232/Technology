import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const FAQ = props => {
    const [faq, setFAQ]=useState([]);
    
    useEffect(function loadAllQuestions(){
        axios.get("/api/faq")
        .then(result => {
            setFAQ(result.data);
        })
        .catch(error =>console.log(error));
    },[]);

    return (<div id="faq">
        <h2>Frequently asked questions</h2>
        <ul>
            {faq.map(allFAQ=><li key={allFAQ.id}>
            <details>
                <summary>{allFAQ.question}</summary>
                <div className="answer"><b>{allFAQ.answer}</b></div><br/>
            </details>
            </li>)}
        </ul>
    </div>);
}

export default FAQ;