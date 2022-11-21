//ThemeToggle.js
import React from "react";

// icons
import Moon from "../img/icon-moon.svg";
import Sun from "../img/icon-sun.svg";

// context
import { ThemeContext } from "../contexts/ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <img
          src={Sun}
          alt="sun"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <img
          src={Moon}
          alt="moon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
