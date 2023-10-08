// ! button component

import { createElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Button({ size, children }) {
  return createElement(
    "button",
    {
      className: classNames(
        "bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold hover:bg-[#1a8cd8] transition-color",
        {
          "px-4 h-9": size == "normal",
          "px-4 text-[17px] h-[52px] w-[90%] ": size == "large",
        }
      ),
    },
    children
  );
}

Button.PropTypes = {
  size: PropTypes.oneOf(["normal", "large"]),
};

Button.defaultProps = {
  size: "normal",
};
