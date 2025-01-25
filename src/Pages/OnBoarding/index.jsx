import React from "react";
import { useParams } from "react-router-dom";

const OnBoarding = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Welcome to OnBoarding</h1>
      <p className="text-black">User ID: {id}</p>
    </div>
  );
};

export default OnBoarding;
