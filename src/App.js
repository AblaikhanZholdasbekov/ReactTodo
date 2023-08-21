import React, { useState, useEffect } from "react";
import Header from "./Header";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
        }, 1000)
      })
  }, []);

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }));
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
    setSearchResults(searchResults.filter(result => result.id !== id));
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]));
  }
   ///git changes
  function searchTodoByTitle(title) {
    const results = todos.filter(todo => todo.title.includes(title));
    setSearchResults(results);
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div>
        <Header />
        <div className="wrapper">
          <AddTodo onCreate={addTodo} onSearch={searchTodoByTitle} />
          {searchResults.length > 0 ? (
            <TodoList
              todos={searchResults}
              onToggle={toggleTodo}
            />
          ) : (
            todos.length > 0 ? (
              <TodoList
                todos={todos}
                onToggle={toggleTodo}
              />
            ) : (
              <p className="notodo">No todos!</p>
            )
          )}
        </div>
      </div>
    </Context.Provider>
  );
  
}

export default App;
