import React from "react";

const sizeClasses = {
  txtInterRegular20: "font-inter font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtInterLight20Gray700: "font-inter font-light",
  txtInterExtraLight20: "font-inter font-thin",
  txtInterExtraLight20Black900: "font-inter font-thin italic",
  txtInterExtraLight15: "font-inter font-thin",
  txtInterMedium36: "font-inter font-medium",
  txtInterBold40: "font-bold font-inter",
  txtInterLight16: "font-inter font-light",
  txtInterRegular32Black900: "font-inter font-normal",
  txtInterRegular185: "font-inter font-normal",
  txtInterRegular175: "font-inter font-normal",
  txtInterLight20: "font-inter font-light",
  txtInterThin48: "font-hairline font-inter",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
