import React, { useState, useEffect } from "react";
import "./Header.css";
import "./Theme.css";
import waveGif from "../assets/wave.gif"; // Ensure path is correct
import { FaMoon, FaSun } from "react-icons/fa"; // Import React Icons

const Header = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [time, setTime] = useState({ hours: "00", minutes: "00" });
  const [isDarkMode, setIsDarkMode] = useState(false); // Default is dark mode

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime({ hours, minutes });
    };

    const interval = setInterval(updateTime, 1000); // Update every second for blinking colon
    updateTime();
    return () => clearInterval(interval);
  }, []);

  // Toggle mute globally (mute all audio and video elements)
  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMutedState = !prev;
      // Mute or unmute all audio and video elements
      const mediaElements = document.querySelectorAll("audio, video");
      mediaElements.forEach((media) => {
        media.muted = newMutedState;
      });
      return newMutedState;
    });
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newDarkMode = !prev;
      document.body.classList.toggle("light-theme", !newDarkMode);
      document.body.classList.toggle("dark-theme", newDarkMode);
      return newDarkMode;
    });
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1>ALPERT KIM UY</h1>
        <h1 className="time">
          <span>{time.hours}</span>
          <span className="blinking-colon">:</span>
          <span>{time.minutes},</span>{" "}
          <span className="location">PST - MANILA</span>
        </h1>
      </div>
      <div className="header-right">
        <div className="mute-button" onClick={toggleMute}>
          <div className={`sound-icon ${isMuted ? "muted" : ""}`}>
            {!isMuted ? (
              <img src={waveGif} alt="Wave GIF" className="wave-gif" /> // Show gif if not muted
            ) : (
              <div className="line"></div> // Show line if muted
            )}
          </div>
        </div>

        {/* Dark mode toggle button */}
        <div className="darkmode-button" onClick={toggleDarkMode}>
          <div className={`darkmode-icon ${isDarkMode ? "dark" : "light"}`}>
            <div className="icon">
              {isDarkMode ? <FaMoon /> : <FaSun />} {/* React Icons for moon and sun */}
            </div>
          </div>
        </div>
        
        <div className="get-in-touch">GET IN TOUCH</div>
        <div className="menu-button">MENU</div>
      </div>
    </header>
  );
};

export default Header;
