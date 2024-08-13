import AddTaskButton from "@/app/components/AddTaskButton/AddTaskButton";
import SearchForm from "@/app/components/SearchForm/SearchForm";
import TaskCard from "@/app/components/TaskCard/TaskCard";
import TaskCard2 from "@/app/components/TaskCard/TaskCard2";
import TaskLists from "@/app/components/TaskLists/TaskLists";
import { TaskDocument } from "@/models/task";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

const getCompletedTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks/completed`, {
    cache: "no-store",
  });

  if (response.status !== 200) {
    throw new Error();
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
};

const CompletedTaskPage = async () => {
  const completedTasks = await getCompletedTasks();

  return (
    <div className="flex h-screen justify-center bg-gradient-to-r from-violet-100 to-indigo-100">
      <div className="w-11/12 rounded-lg border border-violet-200 bg-white/40 p-6 shadow-sm backdrop-blur-sm my-10 overflow-y-auto">
        <div className="flex w-full items-center justify-between p-3 ">
          <h2 className="font-bold text-xl">All Tasks</h2>
          <AddTaskButton />
        </div>
        <TaskLists tasks={completedTasks} />
      </div>
    </div>
  );
};

export default CompletedTaskPage;
