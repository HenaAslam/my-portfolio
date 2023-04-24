import React, { useState, useEffect } from "react";
import "../styles.css";
function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleTouchMove = (event) => {
      setPosition({ x: event.touches[0].clientX, y: event.touches[0].clientY });
    };
    const handleTouchEnd = () => {
      setIsTouching(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: isTouching ? position.x : position.x,
        top: isTouching ? position.y : position.y,
        backgroundColor: isTouching ? "red" : "white",
      }}
    ></div>
  );
}
export default Cursor;
