"use client";

import NavItem from "@/app/components/SideMenu/NavItem/NavItem";
import { usePathname } from "next/navigation";
import { FaRegCheckSquare, FaTasks } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { MdAddTask } from "react-icons/md";

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const pathname = usePathname();

  const navList: NavItemType[] = [
    {
      id: 1,
      label: "All Tasks",
      link: "/",
      icon: (
        <FaTasks
          className={`h-5 w-5 group-hover:fill-indigo-600 dark:fill-gray-600  transition-colors duration-200 ${pathname === "/" ? "!fill-indigo-500" : ""}`}
        />
      ),
    },
    {
      id: 2,
      label: "Completed Tasks",
      link: "/completed",
      icon: (
        <FaRegCheckSquare
          className={`h-5 w-5 group-hover:fill-indigo-600 dark:fill-gray-600  transition-colors duration-200 ${pathname === "/completed" ? "!fill-indigo-500" : ""}`}
        />
      ),
    },
    {
      id: 3,
      label: "Expired Tasks",
      link: "/expired",
      icon: (
        <FaRegClock
          className={`h-5 w-5 group-hover:fill-indigo-600 dark:fill-gray-600  transition-colors duration-200 ${pathname === "/expired" ? "!fill-indigo-500" : ""}`}
        />
      ),
    },
    {
      id: 4,
      label: "Add Task",
      link: "/new",
      icon: (
        <MdAddTask
          className={`h-5 w-5 group-hover:fill-indigo-600 dark:fill-gray-600  transition-colors duration-200 ${pathname === "/expired" ? "!fill-indigo-500" : ""}`}
        />
      ),
    },
  ];

  return (
    <div className="bg-[#1c212c] min-h-full flex flex-col items-center pt-5 pb-2 space-y-7">
      <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
        <div className="font-QuicksandMedium pl-4 text-gray-400/60 text-xs text-[11px] uppercase">
          Menu
        </div>
        {navList.map((item) => (
          <NavItem
            key={item.id}
            label={item.label}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default NavList;
