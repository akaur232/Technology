import React from 'react';

const PostQuestion  = props => {
    
    const showErrorMessage = () => {
        if(props.message.length>1){
            return (<div>{props.message}</div>);  
        }
    };
    
    return(<>
    <form onSubmit={event=>props.handleFormSubmit(event)}> 
        <label>Post Question: </label>
            <input type="text" name="question" value={props.userInput} onChange={event=> props.handleUserInput(event)}/>
            {showErrorMessage()}
        <button> Add question</button>
    </form>
    </>);
};

export default PostQuestion ;