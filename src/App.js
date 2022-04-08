import React from 'react';
import axios from 'axios';
import { useState} from 'react';
import Nav from './Nav.js';
import About from './About.js';
import FAQ from './FAQ.js';
import Contact from './Contact.js';
import PostQuestion from './PostQuestion.js';
import AddedQuestions from './AddedQuestions.js';

const App = props => {
    
    const[userInput, setUserInput]=useState("");
    const [message, setMessage] = useState("");
    const [add, setAdd] = useState(0);
    
    const handleUserInput=event=>{
        setUserInput(event.target.value);
    };
    
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        
        if(userInput.trim().length < 11){
            setMessage("The length of question must be more than 10 letters.");
            
            return;
        }
        setAdd(add+1);
        axios.post('/question', {question : userInput})
        .then(result=>console.log(result))
        .catch(error=>console.log(error));
    };
    
    return (<div className="app">
        <div className="background">
            <header>
                <img src='./icon.png'/>
                <h1>Technology</h1>
                <Nav/>
            </header>
                <About/>
        </div>
        
        <FAQ/>
        
        <PostQuestion message={message} userInput={userInput} handleUserInput={handleUserInput} handleFormSubmit={handleFormSubmit}/>
        <AddedQuestions add={add}/>
        
        <Contact/>
        
        
    </div>);
};

export default App;