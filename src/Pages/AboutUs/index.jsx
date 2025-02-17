/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";

const AboutUs = () => {
  const people = [
    {
      name: "Harim Shayan",
      role: "Software Engineer",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Faiq Nadeem",
      role: "Database Expert",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Munim Ahmed",
      role: "Content Writer",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      xUrl: "#",
      linkedinUrl: "#",
    },
  ];

  const points = [
    [
      "Flexible Scheduling – Classes available 24/7 to fit your routine.",
      "Certified Expert Tutors – Learn from experienced and qualified Tajweed specialists.",
    ],
    [
      "Free 3-Day Trial – Experience our teaching quality before enrolling.",
      "Female Tutors Available – Learn in a comfortable and supportive environment.",
      "Interactive Learning – Engaging audio, video, and shared materials for effective learning",
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
                  Tajweed Tutors was founded with a single sincere intention to
                  make Quranic teachings and Tajweed accessible to Muslims
                  worldwide. Our mission goes beyond just teaching we aim to
                  spread the light of Islam by helping learners perfect their
                  recitation with proper pronunciation and fluency. With a deep
                  commitment to preserving the beauty of the Quran’s recitation,
                  we provide expert guidance to ensure that every student learns
                  with clarity and confidence.
                </p>
              </div>
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
                  We go beyond being just an online Quran academy we strive to
                  be a center of excellence in Quranic education, nurturing
                  students with the knowledge and skills to recite the Quran
                  with precision and devotion.
                </p>
              </div>
              {/* Mission and Objective */}
              <div className="p-3">
                <h2 className="text-xl font-semibold text-gray-800 ">
                  MISSION AND OBJECTIVE
                </h2>
                <p className="text-gray-600">
                  Our mission is to offer top-tier Tajweed and Quranic education
                  by investing in; innovative teaching methodologies, structured
                  and customized syllabus, advanced tutor training programs, a
                  supportive and interactive learning environment.
                </p>
              </div>
              {/* Achievements */}
              <div className="border-t border-r  border-black p-3">
                <h2 className="text-xl font-semibold text-gray-800 ">
                  ACHIEVEMENTS
                </h2>
                <p className="text-gray-600">
                  Alhamdulillah! Tajweed Tutors has rapidly grown into a leading
                  online Quran academy, offering a variety of specialized
                  Tajweed courses. In a short time, we have successfully:
                  Trained thousands of students across different countries
                  Developed a structured learning curriculum for all levels
                  Built a team of qualified and experienced Tajweed tutors
                </p>
              </div>
              {/* Our Team */}
              <div className="p-3 border-t border-black">
                <h2 className="text-xl font-semibold text-gray-800 ">
                  OUR TEAM
                </h2>
                <p className="text-gray-600">
                  Our team consists of certified Quran teachers, each with a
                  strong academic background in Islamic Studies and Tajweed.
                  Under dedicated supervision, our instructors are committed to
                  enhancing every student’s Quranic journey with personalized
                  attention and expert guidance.
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
              WHY CHOOSE TAJWEED TUTORS
            </h1>
          </div>

          {/* Grid for points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {points?.map((column, columnIndex) => (
              <div key={columnIndex}>
                {column?.map((point, pointIndex) => (
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

      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-34l text-balance font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Meet our Best Experts
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Our certified tutors are passionate about helping students perfect
              their Quranic recitation with Tajweed. With personalized guidance
              and expertise, we make learning accessible, engaging, and
              effective for all.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people?.map((person) => (
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
