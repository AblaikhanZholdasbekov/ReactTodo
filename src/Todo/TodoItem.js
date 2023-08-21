import React, { useContext, useState } from "react";
import PropTypes from 'prop-types';
import Context from "../context";
//import EditTodo from "./EditTodo";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid gray',
        borderRadius: '4px',
        marginBottom: '.5rem',
        border: '1px solid var(--gray-400, #333)',
        background: 'var(--gray-500, #262626)', 
        boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.06)'
    },
    input: {
        marginRight: '1rem'
    }
}



function TodoItem({ todo, index, onChange }) {
    console.log('todo', todo)
    const { removeTodo, editTitle } = useContext(Context)
    const classes = []
    if (todo.completed === true) {
        classes.push('done')
    }

 
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')} >
                <input type="checkbox"
                    checked={todo.completed}
                    style={styles.input}
                    onChange={() => onChange(todo.id)
                    }></input>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <div className="buttons">
                <button onClick={removeTodo.bind(null, todo.id)}>&times;</button>

            </div>

        </li>

        // <button className="edit" onClick={()=>editTitle(todo.title)}>edit </button>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    //onClick1:PropTypes.func.isRequired,



}

export default TodoItem