/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";

const Footar = () => {
  const socialas = [
    {
      href: "https://www.facebook.com/people/Brisktech/61559583237714/",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_34_256)">
            <path
              d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z"
              fill="#5BBCEA"
            />
          </g>
          <defs>
            <clipPath id="clip0_34_256">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  const companyData = [
    {
      label: "Company",
      sub: [
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
      ],
    },
  ];

  const pagesData = [
    {
      label: "Pages",
      sub: [
        {
          label: "Features",
          link: "#",
        },
        {
          label: "Courses",
          link: "/courses",
        },
        {
          label: "Blog",
          link: "/blog",
        },
        {
          label: "Reviews",
          link: "/reviews",
        },
        {
          label: "Location",
          link: "#",
        },
      ],
    },
  ];

  const courseData = [
    {
      label: "Courses",
      sub: [
        {
          label: "Tajweed",
          link: "#",
        },
        {
          label: "Memorization",
          link: "#",
        },
        {
          label: "Juzz Amma",
          link: "#",
        },
      ],
    },
  ];

  return (
    <>
      <div className="h-[150px] bg-white" />
      <div
        style={{
          backgroundImage: "url(assets/header-banner-bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative min-h-[340px] h-auto  flex justify-center "
      >
        <div className="absolute right-0 top-0">
          <img
            src="assets/footar-right-corner-image.png
          "
            alt=""
          />
        </div>
        <div className="absolute left-0 top-0">
          <img
            src="assets/footar-left-corner-image.png
          "
            alt=""
          />
        </div>
        <div className="max-w-[1180px] w-full mx-auto absolute -top-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow-card2 p-6 rounded-md">
            {/* Left section */}
            <div className="space-y-4">
              <img
                src="/assets/quran_teacher_logo.png"
                alt="aQuran Institute"
                className="h-16"
              />
              <p className="text-gray-600 text-sm leading-6">
                Tranquility and satisfaction are the pivotal ingredients for a
                healthy and productive mind. Being Muslims, it has been made
                clear around 1400 years ago, that Islamic teachings are the only
                way to attain mental and physical solace.
              </p>
              <div className="flex items-center gap-4 text-gray-500">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Middle section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                What you'll Get in Quran Classes
              </h3>
              <ul className="space-y-2 list-disc pl-5">
                <li className="text-sm">Free Trial sessions</li>
                <li className="text-sm">1 to 1 online session</li>
                <li className="text-sm">Your own selected timings</li>
                <li className="text-sm">Learn from your home</li>
                <li className="text-sm">Monthly parent sessions</li>
                <li className="text-sm">English and Urdu Languages</li>
              </ul>
            </div>

            {/* Contact section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Contact Us for Quran Teaching
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-3">
                  <i className="fas fa-envelope text-red-500"></i>
                  <a
                    href="mailto:support@aquraninstitute.com"
                    className="hover:underline"
                  >
                    support@aqurantutor.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fab fa-skype text-blue-500 "></i>
                  <h3>QuranTutor.Support</h3>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-phone text-green-500"></i>
                  <h3>0347221209</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-white text-sm flex items-end mb-10 ">
          &copy; Copyrights 2024, aQuranInstitute. All rights reserved.
        </div>
      </div>
    </>

    // <div className="relative">
    //   <div className="bg-white w-full h-[100px]"></div>
    //   <div
    //     className="border border-secondary py-20"
    //     style={{
    //       backgroundImage: "url(assets/header-banner-bg.png)",
    //       backgroundSize: "cover",
    //       backgroundRepeat: "no-repeat",
    //     }}
    //   >
    //     <div>
    //       <div className="h-full max-w-[1180px] w-full mx-auto px-4 lg:px-8 xl:px-0">
    //         <div className="bg-white p-3 rounded-xl ">
    //           <div className="grid grid-cols-1 md:grid-cols-6">
    //             <div className="col-span-2">
    //               <div>
    //                 <img
    //                   src="/assets/quran_teacher_logo.png"
    //                   alt="logo"
    //                   className="object-contain"
    //                 />
    //                 <p className="text-sm font-medium text-black max-w-[90%] mt-4 leading-6">
    //                   Tranquility and Satisfaction are the pivotal ingredients
    //                   for a healthy and productive mind. Being Muslims, it has
    //                   been made clear around 1400 years ago, that Islamic
    //                   teachings are the only way to attain mental and physical
    //                   solace.
    //                 </p>
    //               </div>

    //               <div className="mt-3">
    //                 <div className="flex flex-col sm:flex-row gap-4 mb-5">
    //                   <div>
    //                     <TiMessages size={40} className="text-black" />
    //                   </div>
    //                   <div className="flex flex-col">
    //                     <h3 className="text-black">Contact us at</h3>
    //                     <a
    //                       href="
    //               "
    //                     >
    //                       info@tajweedtutor.com
    //                     </a>
    //                   </div>
    //                 </div>
    //                 <div className="flex items-center justify-start gap-2 ">
    //                   {/* <a
    //               href=""
    //               className="flex items-center gap-3 font-poppin font-normal text-sm leading-[19px]"
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 window.location.href = "mailto:info@Brisktechltd.com";
    //               }}
    //             >

    //               info@Brisktechltd.com
    //             </a> */}
    //                 </div>
    //                 <div className="flex justify-start items-center flex-wrap max-w-[85%] gap-4 text-black">
    //                   follow us on:
    //                   <FaFacebookF size={22} className="text-black" />
    //                   {/* {socialas.map((a, index) => (
    //               <a key={index} href={a.href} target="_blank">
    //                 {a.icon}
    //               </a>
    //             ))} */}
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-span-1">
    //               {companyData?.map((item, index) => (
    //                 <div key={index}>
    //                   <h3
    //                     className="font-poppin font-semibold text-[17px] leading-[20px] mb-8 text-black"
    //                     // onClick={() => router.push(item?.redirect ?? "")}
    //                   >
    //                     {item?.label}
    //                   </h3>
    //                   {item?.sub?.map((subitem) => (
    //                     <div key={subitem?.id} className="mb-6">
    //                       <a
    //                         href={subitem?.a}
    //                         className="font-poppin font-normal text-base leading-[14px] hover:font-semibold text-black"
    //                       >
    //                         {subitem?.label}
    //                       </a>
    //                     </div>
    //                   ))}
    //                 </div>
    //               ))}
    //             </div>
    //             <div className="col-span-1">
    //               {pagesData?.map((item, index) => (
    //                 <div key={index}>
    //                   <h3
    //                     className="font-poppin font-semibold text-[17px] leading-[20px] mb-8 text-black"
    //                     // onClick={() => router.push(item?.redirect ?? "")}
    //                   >
    //                     {item?.label}
    //                   </h3>
    //                   {item?.sub?.map((subitem) => (
    //                     <div key={subitem?.id} className="mb-6">
    //                       <a
    //                         href={subitem?.a}
    //                         className="font-poppin font-normal text-base leading-[14px] hover:font-semibold text-black"
    //                       >
    //                         {subitem?.label}
    //                       </a>
    //                     </div>
    //                   ))}
    //                 </div>
    //               ))}
    //             </div>
    //             <div className="col-span-1">
    //               {courseData?.map((item, index) => (
    //                 <div key={index}>
    //                   <h3
    //                     className="font-poppin font-semibold text-[17px] leading-[20px] mb-8 text-black"
    //                     // onClick={() => router.push(item?.redirect ?? "")}
    //                   >
    //                     {item?.label}
    //                   </h3>
    //                   {item?.sub?.map((subitem) => (
    //                     <div key={subitem?.id} className="mb-6">
    //                       <a
    //                         href={subitem?.a}
    //                         className="font-poppin font-normal text-base leading-[14px] hover:font-semibold text-black"
    //                       >
    //                         {subitem?.label}
    //                       </a>
    //                     </div>
    //                   ))}
    //                 </div>
    //               ))}
    //             </div>
    //             <div className="col-span-1">
    //               <div>
    //                 <h3
    //                   className="font-poppin font-semibold text-[17px] leading-[20px] mb-8 text-black"
    //                   // onClick={() => router.push(item?.redirect ?? "")}
    //                 >
    //                   Legal
    //                 </h3>

    //                 <div className="flex flex-col ">
    //                   <a className="font-poppin font-normal text-base leading-[14px] hover:font-semibold mb-8 text-black">
    //                     Privacy Policy
    //                   </a>
    //                   <a className="font-poppin font-normal text-base leading-[14px] hover:font-semibold text-black">
    //                     Terms & Conditions
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* <div className="py-3 border-t border-gray-400">
    //     <div className="grid grid-cols-1 sm:grid-cols-3 max-w-[1180px] w-full mx-auto px-4 lg:px-8 xl:px-0">
    //       <div className="col-span-2 flex flex-col sm:flex-row gap-4 items-center">
    //         <a
    //           href={""}
    //           className="font-poppin text-sm leading-[20px] text-lightBlack"
    //         >
    //           Cookie Policy
    //         </a>
    //         <a
    //           href={""}
    //           className="font-poppin text-sm leading-[20px] text-lightBlack"
    //         >
    //           Privacy Statement
    //         </a>
    //         <a
    //           href={""}
    //           className="font-poppin text-sm leading-[20px] text-lightBlack"
    //         >
    //           Term & Conditions
    //         </a>
    //         <a
    //           href={""}
    //           className="font-poppin text-sm leading-[20px] text-lightBlack"
    //         >
    //           US Residents Privacy Statement
    //         </a>
    //       </div>
    //       <div className="col-span-1 flex items-center justify-end sm:block">
    //         <p className="font-poppin text-[10px] sm:text-sm mt-4 sm:mt-0 text-lightBlack">
    //           &copy; 2012-2024 Brisktech Ltd. All rights reserved
    //         </p>
    //       </div>
    //     </div>
    //   </div> */}
    //   </div>
    // </div>
  );
};

export default Footar;
