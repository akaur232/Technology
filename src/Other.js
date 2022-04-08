import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Show from './Show';
import ShowReq from './ShowReq';

const Other = props => {
    
    let [visibility, setVisibility] = useState(false); 
    const handleVisibility = (event)=>{
        event.preventDefault();
        if(visibility==false){
            setVisibility(true);
        }else{
            setVisibility(false);
        }
    };
    
    let [visibilityExisting, setvisibilityExisting] = useState(false); 
    const handleExistingVisibility = (event)=>{
        event.preventDefault(event);
        if(visibilityExisting==false){
            setvisibilityExisting(true);
        }else{
            setvisibilityExisting(false);
        }
    };
    
    return (<footer>
        <h2>To see data: </h2>
        <ul>
            <li><a href='#' onClick={(event)=>handleVisibility(event)}>Information</a></li>
            <div hidden={!visibility}><Show/></div>
            <li><a href='#' onClick={(event)=>handleExistingVisibility(event)}>Requests</a></li>
            <div hidden={!visibilityExisting}><ShowReq/></div>
        </ul>
    </footer>);
}

export default Other;