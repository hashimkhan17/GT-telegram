import React from "react";
import { IconProps } from "../utils/types";

const FootballIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => {
  const svgSize = `${size}px`;

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      height={svgSize}
      width={svgSize}
    >
      <defs>
        {/* Gradient for the white panels */}
        <radialGradient id="whiteGradient">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="80%" stopColor="#e6e6e6" stopOpacity="1" />
        </radialGradient>

        {/* Gradient for the black panels */}
        <radialGradient id="blackGradient">
          <stop offset="0%" stopColor="#333333" stopOpacity="1" />
          <stop offset="80%" stopColor="black" stopOpacity="1" />
        </radialGradient>
      </defs>

      <g>
        {/* White Hexagons */}
        {/* Adjust the path data ('d' attribute) for each hexagon's position */}
        <path d="M50,10 L65,32.5 L65,67.5 L50,90 L35,67.5 L35,32.5 Z" fill="url(#whiteGradient)" />
        {/* Add more white hexagon paths here */}

        {/* Black Pentagons */}
        {/* Adjust the path data ('d' attribute) for each pentagon's position */}
        <path d="M50,0 L70,20 L70,50 L50,70 L30,50 L30,20 Z" fill="url(#blackGradient)" />
        {/* Add more black pentagon paths here */}
      </g>
    </svg>
  );
};

export default FootballIcon;
