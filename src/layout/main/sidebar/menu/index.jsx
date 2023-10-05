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
              <div className="w=[26.25px] h-[26.25px] relative">
                {menu.notifitation && (
                  <span className="h-[18px] w-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">
                    {menu?.notifitation}
                  </span>
                )}
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>
              <div className="text-xl pr-4">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default index;
