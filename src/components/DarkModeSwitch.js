import { useState } from "react";

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className="switch" onClick={toggleDarkMode}>
      <div className={`flicker ${darkMode ? "dark" : ""}`}></div>
      <div className="moon"></div>
    </div>
  );
}
