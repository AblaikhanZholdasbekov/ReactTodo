import React, {useEffect, useState}from "react";
import PropTypes from 'prop-types';

  
function AddTodo({onCreate}){
    const [value,setValue]=useState(' ')

function submitHandler(event){
   event.preventDefault()
    if(value.trim()){
    onCreate(value)
    setValue('')
} 
}


    return(
        <form className="AddTodo" onSubmit={submitHandler}> 
            <input className="input-add" value={value} onChange={event=>setValue(event.target.value)}>
            </input>
            <button className="AddTodo-submit" type="submit">Add Todo</button>
        </form>
    )
}


AddTodo.propTypes={
    onCreate:PropTypes.func.isRequired
}

export default AddTodo