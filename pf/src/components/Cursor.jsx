import React, { useState, useEffect } from "react";
import "../styles.css";
function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleTouchMove = (event) => {
      setPosition({ x: event.touches[0].clientX, y: event.touches[0].clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
    ></div>
  );
}
export default Cursor;
