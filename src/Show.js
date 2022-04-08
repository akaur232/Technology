import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';

const Show = props => {
    const [info,setInfo]=useState([]);
    
    useEffect(function loadFeaturedJoke(){
        axios.get('/api/v1/info')
        .then(result => {
            setInfo(result.data);
            console.log(result.data);
        })
        .catch(error =>console.log(error));
    },[]);

    return (<div>
        <h2>All Information:</h2>
        <ul>
            {info.map(info=><li key={info._id}>
            <div>ID: {info._id}</div><br/>
            <div><b>Name: {info.name}</b></div><br/>
            </li>)}
        </ul>
    </div>);
}

export default Show;