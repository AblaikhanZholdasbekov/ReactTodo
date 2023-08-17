
import React, { useEffect } from "react";
import Header from "./Header";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";


function App() {
let [todos, setTodos] =React.useState([
 /* {id:1,completed:false, title:'Make a video'},
  {id:2,completed:false, title:'Do homework'},
  {id:3,completed:false, title:'Learn React'}, */

])

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
  .then(response => response.json())
  .then(todos=>{
    setTimeout(()=>{ 
      setTodos(todos)
    },1000)
  })
},[]) 


function toggleTodo(id){
 setTodos(todos.map(todo=>{
    if(todo.id===id){
      todo.completed=!todo.completed
    }
    return todo
  }))
}


function removeTodo(id){
  setTodos(todos.filter(todo=>todo.id!==id))
}

function addTodo(title){
  setTodos(todos.concat([{
    title,
    id:Date.now(),
    completed:false

  }]))
}

 function editTitle(title){
setTodos(todos.map(todo=>{
  if(todo.title===title){
    todo.title="event.target.value"
  }
  return todo
}))
 }






  return (
    <Context.Provider value={{removeTodo,editTitle}}>
       <div >
   <Header></Header>
   <div className="wrapper">
    <AddTodo onCreate={addTodo}></AddTodo>
   {todos.length ? 
   <TodoList todos={todos}
      onToggle={toggleTodo} /*onEditName={EditName}*/></TodoList> : <p className="notodo">No todos!</p>}
   </div>
  </div>
    </Context.Provider>

  );
}

export default App;