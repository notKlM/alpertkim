import React, { useState, useEffect, useRef } from "react";
import "./BackgroundGrid.css";

const BackgroundGrid = () => {
  const cellSize = 60; // Fixed cell size (50px)
  const [rows, setRows] = useState(0); // Initial rows
  const [cols, setCols] = useState(0); // Initial columns
  const [trail, setTrail] = useState([]);
  const gridRef = useRef(null);

  // Calculate the number of rows and columns based on fixed cell size
  useEffect(() => {
    const updateGridSize = () => {
      setCols(Math.floor(window.innerWidth / cellSize));
      setRows(Math.floor(window.innerHeight / cellSize));
    };

    updateGridSize(); // Initialize grid size
    window.addEventListener("resize", updateGridSize); // Update grid size on window resize

    return () => window.removeEventListener("resize", updateGridSize); // Cleanup
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!gridRef.current) return;

      const gridRect = gridRef.current.getBoundingClientRect();
      const cellWidth = gridRect.width / cols;
      const cellHeight = gridRect.height / rows;

      const x = Math.floor((event.clientX - gridRect.left) / cellWidth);
      const y = Math.floor((event.clientY - gridRect.top) / cellHeight);

      if (x >= 0 && x < cols && y >= 0 && y < rows) {
        const cellId = y * cols + x;
        setTrail((prevTrail) => {
          const newTrail = [...prevTrail, cellId];
          return newTrail.slice(-20);
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cols, rows]);

  return (
    <div className="grid-container">
      {/* Foreground objects */}
      <div className="harang1"></div>
      <div className="harang2"></div>
      <div className="harang3"></div>
      <div className="harang4">
        <div className="textholderb"></div>
        <div className="tagline">
          Where Creativity Meets Technology,
          <br />
          Shaping the Future of Web Design
        </div>

        <div className="contact-info">
          ALPERTKIMUY@GMAIL.COM ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ +012323223
        </div>
      </div>
      <div className="harang5"></div>
      <div className="harang6"></div>
      <div className="harang7"></div>
      <div className="harang8"></div>
      <div className="harang9"></div>
      <div className="harang10"></div>
      <div className="harang11"></div>

      {/* Background grid */}
      <div
        className="grid"
        ref={gridRef}
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, index) => (
          <div
            key={index}
            className={`cell ${trail.includes(index) ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundGrid;
