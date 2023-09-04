import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { loadTodo, searchTodo } from "../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function TodoMain() {
  const dispath = useDispatch();
  const todos = useSelector((state) => state.todosList.todos);
  const filteredTodos = useSelector((state) => state.todosList.filteredTodos);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then((response) => response.json())
      .then((data) => {
        dispath(loadTodo(data));
      });
  }, []);

  useEffect(() => {
    dispath(searchTodo(searchQuery));
  }, [searchQuery, dispath]);

  return (
    <div>
      <div className="wrapper">
        <AddTodo searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {filteredTodos.length > 0 ? (
          <TodoList todos={filteredTodos} />
        ) : todos.length > 0 ? (
          <TodoList todos={todos} />
        ) : (
          <p className="notodo">No todos here!</p>
        )}
      </div>
    </div>
  );
}

export default TodoMain;
