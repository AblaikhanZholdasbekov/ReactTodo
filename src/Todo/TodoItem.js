import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { compltetedTask, deleteTodo } from "../store/todoSlice";
import { IconButton } from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid gray",
    borderRadius: "4px",
    marginBottom: ".5rem",
    border: "1px solid var(--gray-400, #333)",
    background: "var(--gray-500, #262626)",
    boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.06)",
  },
  input: {
    marginRight: "1rem",
  },
  span: {
    color: "white",
  },
};

function TodoItem({ todo, index }) {
  const dispath = useDispatch();
  const classes = [];
  if (todo.completed === true) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(" ")} style={styles.span}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => dispath(compltetedTask({ id: todo.id }))}
        ></input>
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <div className="buttons">
        <IconButton>
          <DeleteOutlineOutlined
            onClick={() => dispath(deleteTodo({ id: todo.id }))}
            color="primary"
          ></DeleteOutlineOutlined>
        </IconButton>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
