import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[1180px] w-full mx-auto px-4 md:px-7 lg:px-8 xl:px-0">
      {children}
    </div>
  );
};

export default Container;
