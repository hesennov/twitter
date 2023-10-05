import React from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "@/utils/consts";
const index = () => {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => (
        <NavLink to={menu.path} className="py-1 block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full inline-flex transition-colors items-center gap-5  group-hover:bg-[#eff3f41a]",
                {
                  "font-bold": isActive,
                }
              )}
            >
              {!isActive && menu.icon.passive}
              {isActive && menu.icon.active}
              <div className="text-xl pr-4">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default index;
