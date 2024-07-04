import { useEffect, useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import { statuses } from "./components/data-tasks";

function App() {
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn,
    };
  })
  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div className="flex divide-x ">
      {columns.map((column) => {
        return (
          <div>
            <h1>{column.title}</h1>
            {column.tasks.map((task) => (
              <TaskCard task={task} />
            ))}
          </div>
        );
      })}

    </div>
  );
}

export default App;
