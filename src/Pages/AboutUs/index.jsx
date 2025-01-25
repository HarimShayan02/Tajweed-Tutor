/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { FaPlay } from "react-icons/fa6";

const AboutUs = () => {
  const people = [
    {
      name: "Whitney Francis",
      role: "Copywriter",
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Whitney Francis",
      role: "Copywriter",
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Whitney Francis",
      role: "Copywriter",
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      xUrl: "#",
      linkedinUrl: "#",
    },
  ];

  const points = [
    [
      "Supervised and run by QTV, No. 1 Islamic Satellite Channel.",
      "3 days free trial to decide if you want to continue.",
      "State of the Art Call Centre, equipped with advanced technology.",
      "Full-time tutors trained by QTV Supervision.",
      "Periodic Examinations.",
      "Daily Progress Report.",
    ],
    [
      "Flexible class times available 24/7.",
      "Female teachers are available.",
      "Fully interactive sessions using audio, video, and shared materials.",
      "High-quality hardware and high bandwidth for crystal clear audio and HD camera broadcast.",
      "Mobile App for Android & iOS.",
      "Specially Designed Qaida in English for better learning.",
    ],
  ];

  return (
    <div className="h-full ">
      <div
        className="min-h-[600px] flex  items-center relative"
        style={{
          backgroundImage: "url(/assets/about-us-header.png)",
        }}
      >
        <div className="absolute right-0 top-0">
          <img
            src="assets/about-us-right-corner-image.png
          "
            alt=""
          />
        </div>
        <div className="absolute left-0 top-0">
          <img
            src="assets/about-us-left-corner-image.png
          "
            alt=""
          />
        </div>
        <div className="w-full mx-auto max-w-[1180px]">
          <div className="">
            <div className="flex flex-col items-center justify-center ">
              <div className="w-full sm:max-w-full md:max-w-[300px] lg:max-w-[420px] xl:max-w-[800px] flex flex-col ">
                <h5 className="text-white text-center">Humble Beginnings:</h5>
                <h1 className="font-semibold text-white text-center text-[50px] leading-[50px] md:text-[45px] md:leading-[50px] lg:text-[65px] lg:leading-[70px] font-poppin md:max-w-[70%] lg:max-w-full w-full">
                  Wh<span className="has-gradient">o</span> we are
                </h1>
                <p className="font-poppin text-center font-normal text-[14px] leading-[20px] md:text-sm md:leading-[20px] sm:text-[15px] lg:text-[17px] lg:leading-[26px] sm:leading-[24px] text-white mt-2 mb-7 lg:my-7">
                  Quran Teacher Live, like many other projects, was birthed from
                  a single pure intention: to readily make available these
                  Quranic teachings and resources to Muslims around the globe to
                  spread the Nur of Islam. It was more than a momentary lapse.
                  In our journey to spread the Holy teachings and make the
                  understanding of them embed deep into the hearts of our
                  brothers and sisters, we set out with clear motives.
                </p>
              </div>
              {/* <div className="sm:max-w-[322px] md:max-w-[390px] lg:max-w-[482px] xl:max-w-[482px] w-full mx-auto lg:mx-0">
                <div
                  className="flex flex-wrap  justify-center gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-3  pt-[46px] pb-[48px]"
                  style={{
                    backgroundImage: "url(/assets/about-us-bg.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="w-[196.76px] min-h-[106.92px] md:w-[235.27px] md:min-h-[127.85px] lg:w-[296.88px] lg:min-h-[161.33px] h-full rounded-[17px] lg:rounded-[26px] flex flex-col justify-between px-2 py-2 lg:px-3 lg:py-3 mt-2 bg-about-us-gradient-1"
                    style={{
                      boxShadow:
                        "1.70771px 3.41542px 8.53855px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div className="">
                      <h3 className="font-poppin font-semibold text-[22px] leading-[24px] md:text-[30px] md:leading-[40px] text-[#333333]">
                        10+
                      </h3>
                      <p className="font-poppin font-semibold text-[11px] leading-[11px] md:text-sm md:leading-[14px] lg:text-[17px] lg:leading-[21px] text-[#333333] ">
                        Years on the <br /> market
                      </p>
                    </div>

                    <div className="flex flex-col items-end">
                      <h3 className="font-poppin font-semibold text-[22px] leading-[24px] md:text-[30px] md:leading-[40px] text-[#333333]">
                        200+
                      </h3>
                      <p className="font-poppin font-semibold  text-[10px] leading-[11px] md:text-sm md:leading-[14px] lg:text-[17px] lg:leading-[21px] text-[#333333]">
                        Specialists
                      </p>
                    </div>
                  </div>
                  <div
                    className="w-[95.55px] min-h-[117.67px] md:w-[114.25px] md:min-h-[140.7px] lg:w-[144.17px] lg:min-h-[177.54px] h-full rounded-[17px] lg:rounded-[26px]  flex flex-col justify-between px-1 py-2 lg:px-3 lg:py-3  bg-about-us-gradient-1"
                    style={{
                      boxShadow:
                        "1.70771px 3.41542px 8.53855px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div className="">
                      <h3 className="font-poppin font-semibold text-[22px] leading-[24px] md:text-[30px] md:leading-[40px] text-[#333333]">
                        458
                      </h3>
                      <p className="font-poppin font-semibold text-[11px] leading-[11px] md:text-sm md:leading-[14px] lg:text-[17px] lg:leading-[18px] text-[#333333] ">
                        Clients
                      </p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div className="bg-white w-[17px] h-[17px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[35px] rounded-full hover:bg-secondary flex items-center justify-center group ">
                        <FaPlay className="text-secondary group-hover:text-white w-2 h-2 md:h-2 md:w-2 lg:w-3 lg:h-3" />
                      </div>
                      <div>
                        <h3 className="font-poppin font-semibold text-[9px] leading-[10px] md:text-[12px] md:leading-[13px] text-[#333333] ">
                          see all
                        </h3>
                        <p className="font-poppin font-normal text-[9px] leading-[10px] md:text-[12px] md:leading-[13px] text-[#333333] ">
                          testimonials
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-[95.55px] min-h-[117.67px] md:w-[114.25px] md:min-h-[140.7px] lg:w-[144.17px] lg:min-h-[177.54px] h-full rounded-[17px] lg:rounded-[26px]  flex flex-col justify-between px-1 py-2 lg:px-3 lg:py-3  bg-about-us-gradient-1"
                    style={{
                      boxShadow:
                        "1.70771px 3.41542px 8.53855px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div className="">
                      <h3 className="font-poppin font-semibold text-[22px] leading-[24px] md:text-[30px] md:leading-[40px] text-[#333333]">
                        50+
                      </h3>
                      <p className="font-poppin font-semibold text-[11px] leading-[11px] md:text-sm md:leading-[14px] lg:text-[17px] lg:leading-[18px] text-[#333333] ">
                        Projects annually
                      </p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div
                        className="bg-white w-[17px] h-[17px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[35px] rounded-full hover:bg-secondary flex items-center justify-center group"
                        // onClick={() => router.push("./case-studies")}
                      >
                        <FaPlay className="text-secondary group-hover:text-white w-2 h-2 md:h-2 md:w-2 lg:w-3 lg:h-3" />
                      </div>
                      <div>
                        <h3 className="font-poppin font-semibold text-[9px] leading-[10px] md:text-[12px] md:leading-[13px] text-[#333333] ">
                          see case
                        </h3>
                        <p className="font-poppin font-normal text-[9px] leading-[10px] md:text-[12px] md:leading-[13px] text-[#333333] ">
                          Studies
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-[196.76px] min-h-[106.92px] md:w-[235.27px] md:min-h-[127.85px] lg:w-[296.88px] lg:min-h-[161.33px] h-full  rounded-[17px] lg:rounded-[26px] flex flex-col justify-between px-2 py-2 lg:px-3 lg:py-3 bg-about-us-gradient-1"
                    style={{
                      boxShadow:
                        "1.70771px 3.41542px 8.53855px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div>
                      <img
                        src="/assets/textlogo.png"
                        alt=""
                        className="w-[135.9px] h-[47.25px] opacity-30 "
                      />
                    </div>

                    <div className="flex flex-col items-end">
                      <h3 className="font-poppin font-semibold text-[22px] leading-[24px] md:text-[30px] md:leading-[40px] text-[#333333]">
                        100+
                      </h3>
                      <p className="font-poppin font-semibold text-[10px] leading-[11px] md:text-sm md:leading-[14px] lg:text-[17px] lg:leading-[21px] text-[#333333] text-right">
                        Senior and <br /> middle engineers
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: "url(/assets/learn-quran-bg.png)" }}>
        <div className="max-w-[1180px] w-full mx-auto">
          <div className="py-28">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                OUR CORE VALUES
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              {/* Vision */}
              <div className="border-r  border-black p-3">
                <h2 className="text-xl font-semibold text-gray-800 ">
                  OUR VISION
                </h2>
                <p className="text-gray-600">
                  QTVtutor is devoted to the preparation of religious leaders.
                  We go beyond being a simple online school, committing to
                  providing a complete online education.
                </p>
              </div>
              {/* Mission and Objective */}
              <div className="p-3">
                <h2 className="text-xl font-semibold text-gray-800 ">
                  MISSION AND OBJECTIVE
                </h2>
                <p className="text-gray-600">
                  Our mission is to provide par excellence in Quran and Islamic
                  education. Investing in technology, tailored syllabi, tutor
                  training, and professionally designed teaching methods, we aim
                  for extraordinary growth for both students and tutors.
                </p>
              </div>
              {/* Achievements */}
              <div className="border-t border-r  border-black p-3">
                <h2 className="text-xl font-semibold text-gray-800 ">
                  ACHIEVEMENTS
                </h2>
                <p className="text-gray-600">
                  Alhamdulillah! QTVtutor has emerged as a leading online
                  institute, launching over 23 courses in less than 2 years. Our
                  commitment to sheer hard work and advancement has resulted in
                  exponential growth, boasting a full-time faculty of over 100
                  tutors and students from more than 35 countries.
                </p>
              </div>
              {/* Our Team */}
              <div className="p-3 border-t border-black">
                <h2 className="text-xl font-semibold text-gray-800 ">
                  OUR TEAM
                </h2>
                <p className="text-gray-600">
                  Devoted to nurturing academic religious leaders, our team
                  comprises experienced tutors with a minimum Bachelor’s degree
                  in Islamic Studies. Different teams work independently under
                  departmental supervision to enhance the overall learner
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20 relative">
        <div className="absolute right-0 top-0">
          <img
            src="assets/flower-right-corner-image.png
          "
            alt=""
          />
        </div>
        <div className="absolute left-0 top-0">
          <img
            src="assets/flower-left-corner-image.png
          "
            alt=""
          />
        </div>
        <div className="max-w-[1180px] w-full mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-green-700">
              WHY CHOOSE QTVTUTOR
            </h1>
          </div>

          {/* Grid for points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {points.map((column, columnIndex) => (
              <div key={columnIndex}>
                {column.map((point, pointIndex) => (
                  <div
                    key={pointIndex}
                    className="flex items-start space-x-3 mb-4"
                  >
                    {/* Icon */}
                    <div className="text-green-700 text-xl">&#9673;</div>
                    {/* Text */}
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="py-[100px]">
        <div className="w-full mx-auto max-w-[1180px]">
          <div className="flex flex-col lg:flex-row justify-between ">
            <div className=" w-full sm:w-[57%] md:w-[50%] lg:w-[37%] xl:w-[30%] flex justify-center sm:mx-auto lg:mx-0 ">
              <div className="relative flex justify-center items-start">
                <h3>Image</h3>
              </div>
            </div>
            <div className=" w-full lg:w-[60%] flex flex-col justify-between">
              <div className="border w-full flex justify-center py-4 border-gradient bg-white mt-16 lg:mt-0 lg:px-5">
                <h3 className="font-poppin font-semibold text-[30px] leading-[35px] md:text-[40px] md:leading-[40px] lg:text-[40px] lg:leading-[40px] text-center">
                  Our Mission and Goal
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <div className="flex flex-col gap-4 mb-4">
                  <img
                    src="/assets/about-us/handshake-green-square-icon.svg"
                    alt=""
                    className="w-[64px] h-[64px]"
                  />
                  <h3 className="font-poppin font-semibold text-[20px] leading-[23px] text-black">
                    Our Target Goal
                  </h3>
                  <p className="font-poppin font-normal text-[15px] leading-[22px] text-lightBlack">
                    is to ensure the client receives exactly what he wants and
                    that we competently solve all the tasks. So all clients,
                    having addressed to us once, want to continue cooperation
                    and remain satisfied.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <img
                    src="/assets/about-us/handshake-green-square-icon.svg"
                    alt=""
                    className="w-[64px] h-[64px]"
                  />
                  <h3 className="font-poppin font-semibold text-[20px] leading-[23px] text-black">
                    Our Mission
                  </h3>
                  <p className="font-poppin font-normal text-[15px] leading-[22px] text-lightBlack">
                    is to constantly improve the software development industry
                    through the professional development of our employees and
                    improving the product for our customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-34l text-balance font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Meet our Best Expert
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  alt=""
                  src={person.imageUrl}
                  className="mx-auto size-56 rounded-full"
                />
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm/6 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
