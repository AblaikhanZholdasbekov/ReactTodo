import React, {useEffect, useState}from "react";
import PropTypes from 'prop-types';

  
function AddTodo({onCreate,onSearch}){
    const [value,setValue]=useState(' ')
    
function submitHandler(event){
   event.preventDefault()
    if(value.trim()){
    onCreate(value)
    setValue('')
} 
}

function searchHandler(event) {
    event.preventDefault();
    if (value.trim()) {
        onSearch(value);
        setValue('');
    }
}




    return(
        <form className="AddTodo" onSubmit={submitHandler}> 
            <input className="input-add" value={value} onChange={event=>setValue(event.target.value)}>
            </input>
            <button className="AddTodo-submit" type="submit">Add Todo</button>
            <button className="AddTodo-submit-search" onClick={searchHandler}>Search Todo</button>
           
        </form>
    )
}


AddTodo.propTypes={
    onCreate:PropTypes.func.isRequired,
    onSearch:PropTypes.func.isRequired
}

export default AddTodo