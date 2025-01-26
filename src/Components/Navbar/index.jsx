import React, { useEffect, useRef, useState } from "react";
import { AlignJustify, ArrowRightIcon, ChevronDown, X } from "lucide-react";
import Button from "../../Elements/Button";
import Signup from "../SignupModal";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [activeSub, setActiveSub] = useState("");
  const [selectedNav, setSelectedNav] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const logindropdownRef = useRef(null);
  const [isSignupModal, setIsSignupModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 0) {
        document.getElementById("app-header")?.classList.add("scrolled");
      } else {
        document.getElementById("app-header")?.classList.remove("scrolled");
      }
    };
    handleScrollEvent();
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const homeNavData = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Find tutors",
      link: "/tutor-list",
    },
    {
      label: "Contact Us",
      link: "/contact-us",
    },
    {
      label: "About Us",
      link: "/about-us",
    },
    {
      label: "Become a Tutor",
      link: "/become-tutor",
    },
  ];

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const handleOptionSelect = (value) => {
  //   console.log("Selected:", value);
  //   setIsDropdownOpen(false);
  // };

  // const handleOutsideClick = (event) => {
  //   if (
  //     logindropdownRef.current &&
  //     !logindropdownRef.current.contains(event.target)
  //   ) {
  //     setIsDropdownOpen(false);
  //   }
  // };

  // const handleScroll = () => {
  //   setIsDropdownOpen(false);
  // };

  // useEffect(() => {
  //   if (isDropdownOpen) {
  //     document.addEventListener("click", handleOutsideClick);
  //     document.addEventListener("scroll", handleScroll);
  //   } else {
  //     document.removeEventListener("click", handleOutsideClick);
  //     document.removeEventListener("scroll", handleScroll);
  //   }

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isDropdownOpen]);

  return (
    <>
      <div
        className={`fixed w-fit lg:w-full rounded-xl lg:rounded-[20px] top-2.5 max-w-[1200px] mr-[2px] sm:mr-0 md:px-3  py-[15px] flex z-40 items-center justify-end lg:justify-between bg-white right-3 md:right-5 lg:right-auto left-auto lg:left-[50%] lg:translate-x-[-50%] lg:transistion-all lg:duration-500 lg:ease-in-out`}
        id="app-header"
      >
        <a
          className="transition-all duration-500 overflow-hidden w-[300px] logo-img "
          href={"/"}
        >
          <img
            src="/assets/quran_teacher_logo.png"
            alt="logo"
            className="max-w-none object-contain .logo"
          />
        </a>
        <div className="flex items-center text-black">
          <div className="hidden lg:flex items-center relative space-x-12 nav-wrapper">
            {homeNavData.map((item, index) => (
              <div key={index} className={`relative group `}>
                <button
                  className={`flex items-center text-sm cursor-pointer transition-colors duration-300 ${
                    location.pathname === item.link
                      ? "text-[#581e1e] font-semibold"
                      : "text-black font-medium"
                  }`}
                  onClick={() => navigate(item.link)}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>
          <div className="hidden lg:block" ref={logindropdownRef}>
            <div className="relative">
              <Button
                svgIcon={<ArrowRightIcon className="w-3 h-3" />}
                isBackgroundLight
                className="h-[39px] text-sm lg:ml-4 px-5"
              >
                Log in
              </Button>
              {/* <div
                className={`absolute right-0 min-w-[130px] mt-0.5  bg-white border border-[#713333] shadow shadow-lg rounded-md transition-all duration-300 ${
                  isDropdownOpen ? "opacity-100 " : "opacity-0 "
                } overflow-hidden`}
              >
                <div
                  className="px-4 py-2 font-normal cursor-pointer hover:bg-[#f7f7f7] hover:font-medium"
                  onClick={() => handleOptionSelect("Tutor")}
                >
                  Tutor
                </div>
                <div
                  className="px-4 py-2 font-normal cursor-pointer hover:bg-[#f7f7f7] hover:font-medium"
                  onClick={() => handleOptionSelect("Student")}
                >
                  Student
                </div>
              </div> */}
            </div>
          </div>
          <div className="hidden lg:block">
            <Button
              svgIcon={<ArrowRightIcon className="w-3 h-3" />}
              isPrimary
              className="h-[39px] text-sm lg:ml-4 px-5"
              onClick={() => setIsSignupModal(true)}
            >
              Sign up
            </Button>
          </div>
        </div>
        {/* {userId ? (
          <div className="hidden lg:flex items-center text-black">
            <span
              className="bg-white cursor-pointer text-sm ml-2 h-10 flex items-center justify-center rounded-lg w-[100px] border border-[#d6e6f7] hover:shadow-md duration-200"
              onClick={() => signOut({ redirectUrl: "/sign-in" })}
            >
              Sign Out
            </span>
            <Link
              href={"/app/dashboard"}
              className="cursor-pointer text-sm ml-2 h-10 flex items-center justify-center rounded-lg w-[116px] text-white header-signup-btn hover:shadow-md duration-200"
            >
              Dashboard
            </Link>
          </div>
        ) : (
          <div className="hidden lg:flex items-center text-black">
            <Link
              href={"/sign-in"}
              className="bg-white cursor-pointer text-sm ml-2 h-10 flex items-center justify-center rounded-lg w-[100px] border border-[#d6e6f7] hover:shadow-md duration-200"
            >
              Log In
            </Link>
            <Link
              href={"/sign-up"}
              className="cursor-pointer text-sm ml-2 h-10 flex items-center justify-center rounded-lg w-[116px] text-white header-signup-btn hover:shadow-lg duration-200"
            >
              Sign Up
            </Link>
          </div>
        )} */}
        <div className="h-5 block lg:hidden bg-black opacity-50 mx-4 mobile-divider"></div>
        <div
          className="flex lg:hidden cursor-pointer"
          onClick={() => setToggleSidebar(true)}
        >
          <AlignJustify />
        </div>
      </div>
      <div
        className={`fixed flex flex-col w-full h-full max-w-[375px] z-50 top-0 transition-all duration-700 bg-white ${
          toggleSidebar
            ? "left-0 opacity-100 visible"
            : "invisible left-[-375px] opacity-0"
        }`}
      >
        <div className="border-b border-[#0001] pt-[18px] pb-2 px-5 flex items-center justify-between">
          <a href={"/"}>
            <img src="/assets/Logo.svg" alt="logo" width={162} height={44} />
          </a>
          <X
            onClick={() => setToggleSidebar(false)}
            className="cursor-pointer"
          />
        </div>
        <div className={`py-5 px-2.5`}>
          {homeNavData.map((item, key) => (
            <div
              key={key}
              className={`mobile-header-item ${toggleSidebar && "opened"}`}
            >
              <a
                href={item.link}
                className={`item-wrapper flex items-center justify-between p-4 rounded-[10px] bg-transparent mb-2 hover:bg-[#70451a12] ${
                  toggleSidebar
                    ? "translate-x-0 translate-y-0 opacity-100 blur-0 opened"
                    : "translate-y-[-30px] translate-x-[-30px] opacity-0 blur-[2px]"
                }`}
                onClick={() => setToggleSidebar(false)}
              >
                <span className="mr-1">{item.label}</span>
              </a>
            </div>
          ))}
        </div>
        {/* {userId ? (
          <div className="mt-auto flex flex-col p-[26px] mobile-nav-footer">
            <button
              className={`flex items-center mt-4 p-2.5 justify-center rounded-[5px] text-sm ${
                toggleSidebar
                  ? "translate-y-0 opacity-100 blur-0 delay-500"
                  : "translate-y-5 opacity-0 blur-[2px]"
              }`}
              onClick={() => signOut({ redirectUrl: "/sign-in" })}
            >
              Sign Out
            </button>
            <Link
              href={"/app/dashboard"}
              className={`signup flex text-white bg-[#388aeb] items-center mt-4 p-2.5 justify-center rounded-[5px] text-sm ${
                toggleSidebar
                  ? "translate-y-0 opacity-100 blur-0 delay-[600ms]"
                  : "translate-y-5 opacity-0 blur-[2px]"
              }`}
            >
              Dashboard
            </Link>
          </div>
        ) : (
          <div className="mt-auto flex flex-col p-[26px] mobile-nav-footer">
            <Link
              href={"/sign-in"}
              className={`flex items-center mt-4 p-2.5 justify-center rounded-[5px] text-sm ${
                toggleSidebar
                  ? "translate-y-0 opacity-100 blur-0 delay-500"
                  : "translate-y-5 opacity-0 blur-[2px]"
              }`}
            >
              Log In
            </Link>
            <Link
              href={"/sign-up"}
              className={`signup flex text-white bg-[#388aeb] items-center mt-4 p-2.5 justify-center rounded-[5px] text-sm ${
                toggleSidebar
                  ? "translate-y-0 opacity-100 blur-0 delay-[600ms]"
                  : "translate-y-5 opacity-0 blur-[2px]"
              }`}
            >
              Sign Up
            </Link>
          </div>
        )} */}
      </div>
      <div
        className={`transition-all duration-300 fixed w-full h-full top-0 left-0 z-40 bg-[#0001] ${
          toggleSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setToggleSidebar(false)}
      ></div>
      <Signup isOpen={isSignupModal} setIsModalOpen={setIsSignupModal} />
    </>
  );
};

export default Navbar;
