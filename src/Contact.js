import React from 'react';
import axios from 'axios';
import { useState} from 'react';
import Other from './Other.js';

const Contact = props => {
    const [userName, setUserName]=useState("");
    const [userEmail, setUserEmail]=useState("");
    const [userReq, setUserReq]=useState("");
    const [userMessage, setUserMessage]=useState("");
    
    const handleUserName=event=>{
        setUserName(event.target.value);
    };
    
    const handleUserEmail=event=>{
        setUserEmail(event.target.value);
    };
    
    const handleUserReq=event=>{
        setUserReq(event.target.value);
    };
    
    const handleUserMessage=event=>{
        setUserMessage(event.target.value);
    };
    
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        axios.post("/api/v1/info", {name : userName, email :userEmail, message :userMessage})
        .then(result=>console.log(result))
        .catch(error=>console.log(error));
        setvisibility(false);
    };
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post("/api/v1/req", {email :userEmail, statement :userReq})
        .then(result=>console.log(result))
        .catch(error=>console.log(error));
        setvisibility(false);
    };
    
    let [visibility, setvisibility] = useState(false); 
    const handleVisibility = ()=>{
        event.preventDefault(event);
        if(visibility==false){
            setvisibility(true);
            setvisibilityExisting(false);
        }else{
            setvisibility(false);
        }
    };
    let [visibilityExisting, setvisibilityExisting] = useState(false); 
    const handleExistingVisibility = (event)=>{
        event.preventDefault();
        if(visibilityExisting==false){
            setvisibilityExisting(true);
            setvisibility(false);
        }else{
            setvisibilityExisting(false);
        }
    };
    
return (<div id="contact">
    <h2>Contact us</h2>
    <p> We'll try to contact you as soon as possible...</p>
    
    <button onClick={(event)=>handleExistingVisibility(event)}> Existing user</button>
    <button onClick={(event)=>handleVisibility(event)}> New user</button>
    
    <form onSubmit={event=>handleSubmit(event)} hidden={!visibilityExisting}>
    <div id="formStyle">
        <label>Email: </label> 
        <input type="text" name="email" value={userEmail} onChange={event=> handleUserEmail(event)}/>
        
        <label>Request:  </label>
        <input type="text" name="statement" value={userReq} onChange={event=> handleUserReq(event)}/>
    </div>
        <br/>
        <button> Submit </button>
    </form>
    
    <form onSubmit={event=>handleFormSubmit(event)} hidden={!visibility}>
    <div id="formStyle">
        <label>Name:  </label>
        <input type="text" name="name" value={userName} onChange={event=> handleUserName(event)}/>
        
        <label>Email: </label> 
        <input type="text" name="email" value={userEmail} onChange={event=> handleUserEmail(event)}/>
        
        <label>Message:  </label>
        <input type="text" name="message" value={userMessage} onChange={event=> handleUserMessage(event)}/>
    </div>
        <br/>
        <button> Submit </button>
    </form>
    
    <Other/>
    </div>);
};

export default Contact;