import React from "react";
import "./Theme.css";
import { useTheme } from "./ThemeContext";

const ThemeComponent = () => {
  const { theme, toggleTheme } = useTheme();

  const themeStyles = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#1677FF" : "#fff",
  };

  return (
    <div style={themeStyles}>
      <div>
        <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
        <label class="theme-switch">
          <input
            type="checkbox"
            class="theme-switch__checkbox"
            onClick={toggleTheme}
          />
          <div class="theme-switch__container">
            <div class="theme-switch__clouds"></div>
            <div class="theme-switch__stars-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 144 55"
                fill="none"
              ></svg>
            </div>
            <div class="theme-switch__circle-container">
              <div class="theme-switch__sun-moon-container">
                <div class="theme-switch__moon">
                  <div class="theme-switch__spot"></div>
                  <div class="theme-switch__spot"></div>
                  <div class="theme-switch__spot"></div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ThemeComponent;
