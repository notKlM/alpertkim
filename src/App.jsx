import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev === 100) {
          clearInterval(timer); // Stop when loading reaches 100%
          return prev;
        }
        return prev + 1; // Increment by 1% every 100ms
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleWheel = (event) => {
    if (isTransitioning) return;

    clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      if (event.deltaY > 0 && currentPage < 3) {
        transitionPage(currentPage + 1);
      } else if (event.deltaY < 0 && currentPage > 1) {
        transitionPage(currentPage - 1);
      }
    }, 200);
  };

  const transitionPage = (nextPage) => {
    const isDelayNeeded = currentPage === 1 && nextPage === 2;

    if (isDelayNeeded) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(nextPage);
        setIsTransitioning(false);
      }, 1000);
    } else {
      setCurrentPage(nextPage);
    }
  };

  return (
    <div className="App" onWheel={handleWheel} style={{ height: "100vh", overflow: "hidden" }}>
      
      {/* Loading Screen */}
      {loadingProgress < 100 && (
        <div className="loading-screen">
          <div className="loading-bar">
            <div className="progress" style={{ width: `${loadingProgress}%` }} />
            <div className="loading-text">
              <span>LOADING</span>
              <span>{loadingProgress}%</span>
            </div>
          </div>
        </div>
      )}
      <CustomCursor />

      <div style={{ display: currentPage === 1 ? "block" : "none" }}>
        <Page1 />
      </div>
      <div style={{ display: currentPage === 2 ? "block" : "none" }}>
        <Page2 />
      </div>
      <div style={{ display: currentPage === 3 ? "block" : "none" }}>
        <Page3 />
      </div>
    </div>
  );
};

export default App;
