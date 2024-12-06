import TaskItem from "./TaskItem";
import { useTasks } from "./TaskContext";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
