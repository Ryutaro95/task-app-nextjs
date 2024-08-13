import Link from "next/link";
import React from "react";
import { MdAddTask } from "react-icons/md";

const AddTaskButton = () => {
  return (
    <Link
      href="/new"
      id="openModal-semibold"
      className="border-fuchsia-00 transition-colorsduration-300 flex items-center rounded-md border bg-gradient-to-r from-violet-400 to-indigo-300 px-4 py-2 font-semibold text-white hover:border-violet-200"
    >
      <MdAddTask className="size-5 mr-2 h-4 w-4" />
      <p className="text-white">Add Task</p>
    </Link>
  );
};

export default AddTaskButton;
