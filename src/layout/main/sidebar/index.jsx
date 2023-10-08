import React from "react";
import Logo from "@/layout/main/sidebar/logo/index";
import Menu from "@/layout/main/sidebar/menu/index";
const index = () => {
  return (
    <aside className="w-[275px] min-h-screen flex flex-col">
      <Logo />
      <Menu />
      <div className="mt-auto">
        <div className="my-3">test</div>
      </div>
    </aside>
  );
};

export default index;
