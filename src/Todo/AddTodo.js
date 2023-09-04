import React, { useState } from "react";
import PropTypes from "prop-types";
import { addTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo({ searchQuery, setSearchQuery }) {
  const [value, setValue] = useState("");
  const dispath = useDispatch();

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      dispath(addTodo(value));
      setValue("");
    }
  }

  return (
    <form className="AddTodo" onSubmit={submitHandler}>
      <div>
        <input
          className="input-add"
          placeholder="Введите текст для добавления задачи"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <input
          className="input-add"
          placeholder="Введите текст для поиска"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>
      <button className="AddTodo-submit" type="submit">
        Add Todo
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default AddTodo;
