"use client";

import SearchForm from "@/app/components/SearchForm/SearchForm";
import TaskCard2 from "@/app/components/TaskCard/TaskCard2";
import { TaskDocument } from "@/models/task";
import { useState } from "react";

interface TaskListsProps {
  tasks: TaskDocument[];
}

const TaskLists = ({ tasks = [] }: TaskListsProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log(tasks);

  const filteredTasks = searchTerm
    ? tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : tasks;

  return (
    <div>
      <SearchForm setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {filteredTasks.map((task) => (
          <TaskCard2 key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskLists;
