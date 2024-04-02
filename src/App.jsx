import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="sm:m-8 m-2 ">
      <h1 className="text-4xl text-center">To Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}
