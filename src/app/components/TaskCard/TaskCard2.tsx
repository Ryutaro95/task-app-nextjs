import TaskDeleteButton from "@/app/components/TaskCard/TaskDeleteButton/TaskDeleteButton";
import TaskEditButton from "@/app/components/TaskCard/TaskEditButton/TaskEditButton";
import { TaskDocument } from "@/models/task";

interface TaskCardProps {
  task: TaskDocument;
}

const TaskCard2: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="flex flex-col justify-between cursor-pointer rounded-md border-2 border-gray-50 bg-white/20 p-6 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-2 hover:border-violet-200">
      <div className="mb-5">
        <h2 className="mb-4 text-xl font-semibold">{task.title}</h2>
        <p className="text-gray-700">{task.description}</p>
      </div>
      <div>
        <p className="text-sm text-gray-700">{task.dueDate}</p>
        <div className="flex justify-between items-center">
          <div
            className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white rounded-lg shadow-sm ${task.isCompleted ? "bg-teal-500" : "bg-rose-500"}`}
          >
            {task.isCompleted ? "Completed" : "Incomplete"}
          </div>
          <div className="flex gap-4">
            <TaskEditButton id={task._id} />
            <TaskDeleteButton id={task._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard2;
