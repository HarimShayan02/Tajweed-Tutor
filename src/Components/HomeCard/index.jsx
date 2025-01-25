import React from "react";

const HomeCard = ({ name, description, icon, isWidth = false, onClick }) => {
  return (
    <div
      className={`${
        isWidth && "min-w-[400px]"
      } w-full min-h-[235px] h-full border-2 border-[#e6e6e6] bg-white rounded-[10px] p-[20px] `}
    >
      <div className="flex w-full justify-between items-start mb-1 ">
        <h3
          onClick={onClick}
          className=" text-[20px] leading-[23px] cursor-pointer flex items-start h-full font-semibold font-poppin color-change "
        >
          {name}
        </h3>
        <div className="flex items-center text-secondaryLight">{icon}</div>
      </div>
      <p className="font-normal my-4 text-[12px] leading-[18px] font-poppin text-black">
        {description}
      </p>
    </div>
  );
};

export default HomeCard;
