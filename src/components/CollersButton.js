import React from "react";

export const CollersButton = ({
  border = false,
  text,
  svg,
  onClick,
  isWhite,
  className,
  wrapperClassName,
  iconMode,
}) => {
  const borderColor = isWhite === true ? "border-white" : "border-primary";
  const borderAttr = border ? "border-[3px] " + borderColor : "border-0 ";
  const textColor = isWhite === true ? "text-white" : "text-primary";
  const padding = iconMode ? "" : "px-2 md:px-3 lg:px-4 py-2";

  return (
    <div className={`${wrapperClassName}`}>
      <button
        onClick={onClick}
        className={`justify-center bg-transparent ${borderAttr} rounded-lg ${textColor} ${padding} rounded-full font-sans flex items-center font-littlebold whitespace-nowrap text-24px ${className}`}
      >
        {svg && <span className="mr-4">{svg}</span>}
        {text}
      </button>
    </div>
  );
};
