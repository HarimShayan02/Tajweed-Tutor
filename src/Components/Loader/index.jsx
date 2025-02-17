import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{ zIndex: 1100 }} className=" ">
      <Oval
        secondaryColor="#00000083"
        color="#401314"
        height={180}
        width={180}
      />
    </div>
  );
};

export default Loader;
