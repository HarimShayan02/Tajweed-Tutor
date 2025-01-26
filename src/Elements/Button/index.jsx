import * as React from "react";

const Button = ({
  children,
  className,
  svgIcon,
  onClick,
  disabled,
  isPrimary,
  isBackgroundLight,
  isDanger,
  style,
}) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={`
        ${className}
           ${isBackgroundLight ? "bg-light text-black  rounded-[6px]" : ""}
        ${isPrimary ? "bg-change rounded-[6px] text-white" : ""}
             flex items-center justify-center py-1 gap-2.5 font-medium cursor-pointer 
          `}
      disabled={disabled}
    >
      {children}
      {svgIcon && <>{svgIcon}</>}
    </button>
  );
};

export default Button;
