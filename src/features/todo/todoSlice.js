import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define the initial state for the todo slice
const initialState = {
  todos: [
    {
      text: "my first work",
      id: 1,
      completed: true,
    },
  ],
};

// Create a Redux slice named "todo" with reducers for managing todos
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Reducer for adding a new todo
    addTodo: (state, action) => {
      // Create a new todo object with the provided text and a unique ID
      const todo = {
        text: action.payload,
        id: nanoid(), // Generate a unique ID using nanoid
        completed: false, // New todos are initially marked as incompleter
      };
      // Add the new todo to the state's todos array (mutating the state)
      state.todos.push(todo);
    },

    // Reducer for removing a todo
    removeTodo: (state, action) => {
      // Filter the todos array to keep only todos with IDs that don't match the provided ID
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    // Reducer for toggling the completed state of a todo
    toggleTodo: (state, action) => {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      // If the todo is found, update its completed property to the opposite of its current value
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
});
// Extract the action creators from the todoSlice
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
