"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ label, link, icon }) => {
  const pathname = usePathname();
  return (
    <div>
      <div className="w-full flex items-center gap-x-1.5 group select-none">
        <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
          <div
            className={`absolute top-0 left-0 w-full h-[102%]  group-hover:translate-y-0  bg-indigo-600 transition-all duration-300 ${pathname === link ? "translate-y-0" : "translate-y-full"}`}
          ></div>
        </div>
        <Link
          href={link}
          className={`group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm ${pathname === link ? "bg-white/10 text-white" : ""}`}
        >
          <div>{icon}</div>
          <span className="font-QuicksandMedium">{label}</span>
        </Link>
      </div>
    </div>
  );
};

export default NavItem;
