import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
