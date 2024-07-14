import React from "react";

export const CollersButton = ({ border = false, text, svg }) => {
  return (
    <button
      className={`bg-transparent ${
        border ? "border-2 border-primary" : "border-0"
      } rounded-lg text-primary rounded-full px-4 py-2 font-sans flex items-center font-normal`}
    >
      {svg && <span className="mr-2">{svg}</span>}
      {text}
    </button>
  );
};
