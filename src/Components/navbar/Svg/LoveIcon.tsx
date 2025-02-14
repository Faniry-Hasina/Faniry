import { useState } from "react";
export default function Svgicon() {
  const [background, setBackground] = useState("none");
  const toggleBackgroundColor = () => {
    setBackground((prevBackground:string) => (prevBackground === "none" ? "white" : "none"));
  };
  console.log(toggleBackgroundColor);
  return (

      <svg
        onClick={toggleBackgroundColor}
        className="svg-icon"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill={background}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.068 4.55C13.723 2.8455 14.798 2.75 15.8305 2.75C18.738 2.75 21.0695 5.7775 21.0275 8.556C20.962 12.9025 18.387 16.6145 12.0615 21.25C6.374 17.3735 3.0685 12.431 2.9735 8.7995C2.904 6.159 5.4115 2.75 8.3325 2.75C9.4605 2.75 10.395 2.824 12.068 4.55Z"
          stroke="white"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  );
}
