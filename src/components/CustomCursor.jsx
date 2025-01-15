import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event) => {
        if (event.target.closest(".get-in-touch")) {
        setHoverText("LET'S TALK! (⌒_⌒  )");
      } else if (event.target.closest(".header-left")) {
        setHoverText("OUR LOCAL TIME <br /> IF YOU MIND (˵¯͒〰¯͒˵)");
      }
      else if (event.target.closest(".sound-icon.muted")) {
        setHoverText("ENABLE AUDIO ~( ˘▾˘~)");
      }
      else if (event.target.closest(".sound-icon")) {
        setHoverText("DISABLE AUDIO ( ・⌓・｀)");
      }
      else if (event.target.closest(".darkmode-icon.light")) {
        setHoverText("LIGHTS ON (̿▨-▨¬˵)");
      }
      else if (event.target.closest(".darkmode-icon.dark")) {
        setHoverText("LIGHTS OFF (︶﹃︶ㅅ)");
      }
      else if (event.target.closest(".menu-button")) {
        setHoverText("OPEN MENU");
      }
      else if (event.target.closest(".footer-right")) {
        setHoverText("COME ON SCROLL <br /> ╭( ･ㅂ･)و");
      }
    };

    

    const handleMouseOut = (event) => {
      if (
        event.target.closest(".get-in-touch") ||
        event.target.closest(".header-left") ||
        event.target.closest(".mute-button") ||
        event.target.closest(".darkmode-icon.light") ||
        event.target.closest(".darkmode-icon.dark") ||
        event.target.closest(".menu-button")||
        event.target.closest(".footer-right")
      ) {
        setHoverText("");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Small circle */}
      <div
        className="custom-cursor-circle"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Hover text */}
      {hoverText && (
        <div
          className="custom-cursor-text"
          style={{
            left: `${position.x}px`,
            top: `${position.y + 20}px`, // Offset below the cursor
          }}
          dangerouslySetInnerHTML={{ __html: hoverText }} // Allow HTML in the text
        />
      )}
    </>
  );
};

export default CustomCursor;


