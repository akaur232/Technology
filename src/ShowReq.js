import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';

const ShowReq = props => {
    const [info,setInfo]=useState([]);
    
    useEffect(function loadFeaturedJoke(){
        axios.get('/api/v1/req')
        .then(result => {
            setInfo(result.data);
            console.log(result.data);
        })
        .catch(error =>console.log(error));
    },[]);

    return (<div>
        <h2>All Requests:</h2>
        <ul>
            {info.map(info=><li key={info._id}>
            <div>ID: {info._id}</div><br/>
            <div><b>Request: {info.statement}</b></div><br/>
            </li>)}
        </ul>
    </div>);
}

export default ShowReq;