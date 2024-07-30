import React from "react";
import { IconProps } from "../utils/types";

const FootballIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => {
  const svgSize = `${size}px`;

  const ballColor = "#bf9000"; // Brown for the ball
  const stitchColor = "#ffffff"; // White for the stitches

  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" // Adjusted for a simpler football shape
      className={className}
      height={svgSize}
      width={svgSize}
    >
      {/* Football Shape */}
      <circle cx="12" cy="12" r="10" fill={ballColor} />

      {/* Stitches (simplified for clarity) */}
      <path
        fill="none"
        stroke={stitchColor}
        strokeWidth="1.5"
        d="M12 4 L16 8 M12 4 L8 8 M12 20 L16 16 M12 20 L8 16 M6 12 L18 12"
      /> 
    </svg>
  );
};

export default FootballIcon;
