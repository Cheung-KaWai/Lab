import React, { useEffect } from "react";
import { useState } from "react";

export const useMouse = () => {
  const [position, setPosition] = useState({ x: null, y: null });
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const handleMouseUpdate = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      setVisible(1);
    };

    const handleMouseLeave = (e) => {
      setVisible(0);
    };

    window.addEventListener("mousemove", handleMouseUpdate);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseUpdate);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { position, visible };
};
