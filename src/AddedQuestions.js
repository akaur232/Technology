import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const AddedQuestions  = props => {

    const [list , setList]=useState([]);
    
    useEffect(function loadQuestions(){
        axios.get('/question')
        .then(result=>{
            setList(result.data);
        })
        .catch(error=>console.log(error))
    },[props.add]);
    
    
    return (<div>
        <h2>Recently added questions</h2>
        <ul>
            {list.map(allFAQ=><li key={allFAQ}>
            <details>
            <summary>{allFAQ}</summary>
            <div className="answer">Not Answered</div>
            </details>
            </li>)}
            
        </ul>
    </div>);
}
    
export default AddedQuestions;