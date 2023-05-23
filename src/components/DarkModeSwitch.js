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
    <div>
      <div className="switch" onClick={toggleDarkMode}>
        <div className={`flicker ${darkMode ? "dark" : ""}`}></div>
        <div className="moon"></div>
      </div>
      {!darkMode && (
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
              style={{ backgroundImage: `url(/images/wave-top.png)` }}
            ></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{ backgroundImage: `url(/images/wave-mid.png)` }}
            ></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage: `url(/images/wave-bot.png)`,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
