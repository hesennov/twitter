import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "@/layout/main/sidebar/index";
import RightBar from "@/layout/main/rightBar";
const index = () => {
  return (
    <div className="w-[1265px] mx-auto flex">
      <SideBar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 border-x max-w-[600px] border-[#2f3336]">
          <Outlet />
        </main>
        <RightBar />
      </main>
    </div>
  );
};

export default index;
