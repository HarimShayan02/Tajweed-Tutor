import React, { useEffect, useRef, useState } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import Button from "../../Elements/Button";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, description, verified, language, payment }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (contentRef.current) {
      setIsOverflowing(
        contentRef.current.scrollHeight > contentRef.current.clientHeight,
      );
    }
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className=" w-full min-h-[320px] h-auto rounded-[10px] border-2 bg-[#f7f7f7] border-white p-8 sm:py-10 sm:px-6 lg:py-8 lg:px-8 relative"
      style={{
        boxShadow: "0 4px 10px rgba(0,0,0,0.09)",
      }}
    >
      <div className="absolute left-0 top-0 z-0">
        <img
          src="assets/flower-left-corner-image.png
          "
          alt=""
          className="w-[250px] h-[250px] object-cover"
        />
      </div>
      <div className="w-full flex justify-between gap-2">
        <div className="min-h-[120px] h-auto min-w-[120px] max-w-[120px] rounded-l z-30">
          <img
            src="https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
            alt=""
            className="w-full min-h-[135px] object-cover rounded-lg"
          />
        </div>
        <div className="w-[64%]  flex flex-col space-y-10">
          <div className="flex gap-2 items-center">
            <h3 className="font-poppin font-semibold text-xl lg:text-2xl leading-[30px] z-20">
              {title}
            </h3>
            {/* <p>flag</p> */}
            {verified && (
              <p>
                <VscVerifiedFilled size={20} className="text-activePrimary" />
              </p>
            )}
          </div>
          <div className="flex  gap-2">
            {language?.map((item, index) => (
              <div className="min-w-[100px] w-auto rounded-md" key={index}>
                <div className="flex items-center">
                  <span className="px-3 py-1 bg-[#e1e9ed] text-black text-xs rounded-l-md">
                    {item?.name}
                  </span>
                  <span
                    className="px-3 py-1 bg-[#87e2ab] text-white  text-xs rounded-r-md"
                    style={{
                      backgroundColor: "#713333",
                      backgroundImage:
                        "linear-gradient(62deg, #713333 0%, #18110a 100%)",
                    }}
                  >
                    {item?.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="z-30">
            <p
              ref={contentRef}
              className={`transition-all w-[90%] leading-7 text-sm text-lightBlack duration-300 ${isExpanded ? "" : "max-h-[9rem] overflow-hidden"} `}
            >
              {description}
            </p>
            {isOverflowing && (
              <button
                onClick={toggleExpand}
                className="mt-2 text-lightBlack text-sm "
              >
                {isExpanded ? "Read less..." : "Read more..."}
              </button>
            )}
          </div>
        </div>
        <div className="w-[17%]">
          <div className="flex justify-between">
            <div className="bg-[#E7C66E] h-6 rounded-md flex items-center justify-center">
              <h3 className="text-sm px-2 text-white">Newly Joined</h3>
            </div>
            <div className="flex flex-col gap-y-1 items-center">
              <h3 className="font-poppin font-semibold text-xl leading-10">
                ${payment}
              </h3>
              <p className="text-lightBlack font-semibold text-sm">per hour</p>
            </div>
          </div>
          <div className="flex justify-end mt-7">
            <Button
              onClick={() => navigate(`/tutor-detail/${id}`)}
              svgIcon={<ArrowRightIcon className="w-3 h-3" />}
              isPrimary
              className="h-[39px] text-sm lg:ml-4 px-5"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
