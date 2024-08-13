import Link from "next/link";

import NavList from "@/app/components/SideMenu/NavList/NavList";

const SideMenu = () => {
  return (
    <div className="w-72 pt-8 bg-[#1c212c] text-white">
      <div>
        <h1 className="px-4 text-2xl font-bold">
          <Link href="/">Next Tasks</Link>
        </h1>
        <NavList />
      </div>
    </div>
  );
};

export default SideMenu;
