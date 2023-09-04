import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    filteredTodos: [],
  },
  reducers: {
    compltetedTask(state, action) {
      const completedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      completedTodo.completed = !completedTodo.completed;

      console.log(action, "action");
    },

    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      console.log(action, "action");
    },
    addTodo(state, action) {
      console.log(action, "action");
      state.todos.push({
        title: action.payload,
        id: Date.now(),
        completed: false,
      });
    },
    loadTodo(state, action) {
      state.todos = action.payload;
    },
    searchTodo(state, action) {
      const searchQuery = action.payload.toLowerCase();
      console.log(action, "action");
      if (searchQuery.trim() === "") {
        state.filteredTodos = [];
      } else {
        state.filteredTodos = state.todos.filter((todo) =>
          todo.title.toLowerCase().includes(searchQuery)
        );
      }
    },
  },
});

export const { addTodo, loadTodo, compltetedTask, deleteTodo, searchTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
