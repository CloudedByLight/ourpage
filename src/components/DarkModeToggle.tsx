import React from "react";
import { useTheme } from "../context/ThemeContext";

export const DarkModeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle}>
      {theme === "light" ? "🌙 Dark mode" : "☀️ Light mode"}
    </button>
  );
};
