import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleAdd = () => {
    if (taskInput.trim()) {
      onAdd(taskInput);
      setTaskInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
