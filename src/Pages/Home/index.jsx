/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import Container from "../../Components/Container";
import { CiLocationOn } from "react-icons/ci";
import Slider from "react-slick";
import supabase from "../../supabase/supabaseClient";
import { VscVerifiedFilled } from "react-icons/vsc";

const Home = () => {
  const containerRefs = useRef([]);
  const [selected, setSelected] = useState(0);
  const [tutor, setTutor] = useState(null);

  const faqItems = [
    {
      title: "Is there a refund policy?",
      description:
        "Yes, Tajweed Tutors has a flexible refund policy to ensure a smooth experience for our students. If you are not satisfied after your first trial class, you can request a full refund.",
    },
    {
      title: "Who can enroll in the courses?",
      description:
        "Our courses are designed for students of all ages and levels—whether you're a beginner learning Noorani Qaida, an intermediate learner improving Tajweed, or an advanced student aiming to memorize the Quran (Hifz).",
    },
    {
      title: "How do online Quran classes work?",
      description:
        "Our online classes are conducted via Zoom, Skype, or other virtual platforms with one-on-one sessions or group lessons. Tutors use interactive whiteboards, screen sharing, and engaging exercises to enhance learning.",
    },
    {
      title: "How long does it take to complete a course?",
      description:
        "The duration of each course depends on the student's learning pace. Typically, the Quran Reading (Noorani Qaida & Basic Tajweed) course takes around 3 to 6 months. The Tajweed Rules & Quran Recitation course can take between 4 to 8 months. For Quran Memorization (Hifz Program), the duration varies—partial Hifz usually takes 6 to 12 months, while completing the full Hifz can take anywhere from 2 to 5 years.",
    },
    {
      title: "Do you provide certificates upon course completion?",
      description:
        "Yes! Students who successfully complete their course and pass assessments receive an official certificate from Tajweed Tutors, verifying their learning achievements.",
    },
  ];

  const courses = [
    {
      imgUrl: "/assets/reading.png",
      description:
        "A beginner-friendly course focusing on Arabic letters, pronunciation, and basic Tajweed rules through a structured step-by-step approach.",
    },
    {
      imgUrl: "/assets/hifz.png",
      description:
        "A structured program for memorizing the Quran, guided by certified tutors with revision plans and regular assessments to track progress.",
    },
    {
      imgUrl: "/assets/tajweed.png",
      description:
        "Aimed at mastering Tajweed rules and improving Quranic recitation with one-on-one interactive sessions and personalized feedback.",
    },
  ];

  const getTutors = async () => {
    try {
      let { data: tutors, error } = await supabase.from("tutors").select("*");
      if (error) {
        console.error("", error.message);
        return;
      }

      setTutor(tutors);
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
    }
  };

  useEffect(() => {
    getTutors();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 582,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-full">
      <div
        className="min-h-[700px] h-auto flex items-center relative"
        style={{
          backgroundImage: "url(assets/header-banner-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
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

        <div className="max-w-[1180px] w-full mx-auto">
          <div className="w-full flex gap-8">
            <div className="w-[40%] flex items-center ">
              <h1 className="text-[42px] uppercase font-bold italic tracking-tight text-white leading-20 text-gray-900 ">
                Master the Art of Quran Recitation with Tajweed Tutors
              </h1>
            </div>

            <div className="w-[60%] ">
              <img
                src="/assets/banner-image.png
              "
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="min-h-[100px] h-auto flex flex-col  justify-center items-center"
        style={{
          backgroundImage: "url(/assets/header-banner-style-bg.png)",
          backgroundSize: "cover",
        }}
      >
        <img
          src="/assets/ayat-image.png
        "
          alt=""
        />
        <p className="font-semibold text-white">
          "The Best amongst you is the one, who learns Quran and teaches it"
        </p>
      </div>

      <div
        className="py-24"
        style={{ backgroundImage: "url(/assets/learn-quran-bg.png)" }}
      >
        <div className="max-w-[1180px] w-full mx-auto">
          <div className="flex flex-col ">
            <h2 className="font-semibold text-black text-[40px] ">
              Learn and Read Quran Online with Expert Tajweed Tutors
            </h2>
            <h3 className="font-normal text-[30px] text-[#89474b]"></h3>
            <p className="text-base font-semibold italic text-lightBlack mt-2">
              Perfect Your Quran Recitation with Certified Instructors
            </p>
            <br />
            <p className="text-base font-medium  text-black max-w-[60%] ">
              As Muslims, we know that the teachings of Islam provide the
              ultimate source of inner peace and spiritual well-being.
            </p>
            <br />
            <p className="text-base font-medium text-black max-w-[90%]">
              In today’s fast-paced world, where social and political challenges
              surround us, parents are often occupied with securing a bright
              future for their children. Unfortunately, this leaves little time
              to focus on their children's moral and religious education.
              Learning the fundamentals of Tajweed and Quran recitation is
              becoming increasingly neglected.
              <br />
              <br />
              At Tajweed Tutors, we are committed to reviving this essential
              practice by connecting students with expert tutors who ensure
              correct pronunciation and beautiful recitation of the Quran.
            </p>
            <br />
            <p className="text-base font-semibold italic text-Black mt-2">
              Join us today and embark on a journey of Quranic excellence!
            </p>
          </div>
        </div>
      </div>

      <div
        className="py-24 relative"
        style={{
          backgroundImage: "url(/assets/online-quran-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
        <div className="max-w-[1180px] w-full mx-auto">
          <div className="flex flex-col ">
            <h2 className="font-bold text-white text-[40px] text-center">
              Online Quran Classes Easy and Interactive Learning
            </h2>
            <h3 className="font-normal text-center text-[30px] text-white"></h3>

            <div className="grid grid-cols-2 mt-10 gap-6">
              <div className="col-span-1 flex flex-col justify-center">
                <p className="text-white font-medium">
                  Tajweed Tutors is a dedicated platform that makes learning the
                  Quran online simple and effective. Embracing the power of
                  technology, we provide one-on-one interactive Quran lessons
                  through modern online tools like Skype and Zoom. Our team
                  consists of highly qualified Quran tutors who specialize in
                  Tajweed rules, ensuring proper pronunciation and recitation.
                </p>
                <br />

                <i className="text-white ">
                  Furthermore, they are also quite fluent in English, Urdu and
                  Arabic.
                </i>
              </div>
              <div className="col-span-1 flex items-center">
                <img
                  src="/assets/interactive-online-quran.png
                "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-20 "
        style={{ backgroundImage: "url(/assets/learn-quran-bg.png)" }}
      >
        <div className="max-w-[1180px] w-full mx-auto">
          <div className="flex flex-col ">
            <h2 className="font-bold text-black text-[40px] text-center">
              How to Learn Quran Online
            </h2>
            <h3 className="font-normal text-center text-[30px] text-[#89474b]">
              A Conundrum Now Solved
            </h3>

            <div className="grid grid-cols-2 mt-10 gap-6">
              <div className="col-span-1 ">
                <img
                  src="assets/how-learn-quran-image.png
                "
                  alt=""
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <i className=" text-black font-medium">
                  When it comes to learning the Quran online, many questions
                  arise. At Tajweed Tutors, we have crafted a simple and
                  effective solution for every learner.
                </i>
                <br />
                <p className="text-black font-medium">
                  Simply sign up for the course that suits your needs, and our
                  expert Tajweed tutors will guide you through each step.
                  Whether you’re a beginner or looking to refine your
                  recitation, our structured lessons fit seamlessly into your
                  daily routine.
                </p>
                <br />
                <p className="text-black font-medium ">
                  Our live, interactive Quran classes ensure personalized
                  learning, making it as effective as traditional face-to-face
                  lessons. With one-on-one guidance, real-time feedback, and
                  expert instruction, students build confidence in their
                  recitation skills.
                </p>
                <br />
                <p className="text-black font-medium ">
                  We leverage modern e-learning tools to make Quran reading and
                  Tajweed learning more accessible. Parents no longer need to
                  dedicate extra time to their child's religious education—just
                  enroll them in our online classes, and let expert tutors take
                  care of the rest.
                </p>
                <br />
                <p className="text-black font-medium ">
                  📌 Join Tajweed Tutors today and start your journey toward
                  mastering Quran recitation with Tajweed!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white py-20 relative">
        <div className="absolute right-0 top-0">
          <img
            src="assets/flower-right-corner-image.png"
            alt=""
            className="object-cover w-[250px] h-[250px]"
          />
        </div>
        <div className="absolute left-0 top-0">
          <img
            src="assets/flower-left-corner-image.png"
            alt=""
            className="object-cover w-[250px] h-[250px]"
          />
        </div>
        <Container>
          <h2 className="font-bold text-black text-[40px] text-center">
            Featured Tutors
          </h2>
          <p className="font-normal text-center text-md text-[#89474b]">
            Reach your personal learning goals faster with expert Quran teachers
            from around the World.
          </p>

          <div className="slider-container">
            <Slider {...settings}>
              {tutor?.map((item, index) => (
                <div className="mt-8 pr-4 " key={item?.id}>
                  <div
                    style={{
                      backgroundImage: "url(assets/header-banner-bg.png)",
                      backgroundBlendMode: "multiply",
                      backgroundSize: "cover",
                    }}
                    className={`w-[380px] min-h-[230px] h-full border-2 border-white rounded-[10px] p-[20px] `}
                  >
                    <div className="flex gap-3">
                      <div className="w-14 h-14 rounded-md">
                        <img
                          src="https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
                          alt=""
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-poppin font-medium leading-[22px] text-sm sm:text-base text-lightBlack ">
                          ${item?.payment} per hour
                        </h4>
                        <h1 className="text-white flex items-center gap-2  font-semibold text-[17px]">
                          {item?.fullname}
                          {item?.is_verified && (
                            <p>
                              <VscVerifiedFilled
                                size={20}
                                className="text-activePrimary"
                              />
                            </p>
                          )}
                        </h1>
                      </div>
                    </div>
                    <p className="whitespace-normal text-ellipsis text-white overflow-hidden mt-2 mb-6 line-clamp-2">
                      {item?.description}
                    </p>
                    <div className="flex gap-3">
                      <div className="min-w-[80px] w-auto flex items-center justify-center gap-2 py-1 px-2 rounded-sm bg-lightGray">
                        <CiLocationOn />
                        <h3 className="text-base font-medium">
                          {item?.country}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>

      <div
        className="pt-20 pb-32"
        style={{ backgroundImage: "url(/assets/learn-quran-bg.png)" }}
      >
        <Container>
          <h2 className="font-bold text-black text-[40px] text-center">
            Online Quran courses we offer
          </h2>
          <h3 className="font-normal text-center text-[26px] text-[#89474b]">
            Learn the Quran with Expert Tajweed Tutors – Personalized and
            Interactive Lessons for All Ages.
          </h3>

          <div className="grid grid-cols-3 ">
            {courses?.map((item, index) => (
              <div
                className="col-span-1 relative flex justify-center"
                key={index}
              >
                <div className="cursor-pointer group relative flex flex-col my-6 border border-[#89474b] bg-white shadow rounded-lg w-96  ">
                  <div className="relative h-50 m-2.5 overflow-hidden text-white rounded-md">
                    <img
                      className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110 w-full "
                      src={item?.imgUrl}
                      alt=""
                    />
                  </div>
                </div>
                <div className="py-3 px-2 rounded-lg shadow shadow-card bg-white border border-black absolute w-[300px] -bottom-5 ">
                  <p className="text-slate-600 leading-normal text-sm font-medium">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="py-[5rem]">
        <Container>
          <h3 className="font-bold text-black text-[40px]">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <div className="flex justify-between items-end mt-1 ">
            <p className="max-w-[861px] font-poppin leading-[22px] text-sm sm:text-[15px] text-lightBlack">
              Find out everything you need to know about the terms of
              cooperation with us, our technological expertise, and other
              details that may interest you.
            </p>
          </div>
          <div className="">
            <div className="flex justify-center pt-10">
              <div className="">
                <div className="gap-8 ">
                  <div className="bg-white w-full border-t border-[#d9d9d9]">
                    <ul className="shadow-box">
                      {faqItems?.map((item, index) => (
                        <li
                          key={index}
                          className="relative mb-2 rounded-lg border-b border-[#d9d9d9] bg-white"
                        >
                          <button
                            type="button"
                            className="w-full px-2 sm:py-4 py-2 text-left"
                            onClick={() =>
                              setSelected(
                                selected !== index + 1 ? index + 1 : 0,
                              )
                            }
                          >
                            <div className="flex items-center justify-between text-lightBlack hover:text-main w-full">
                              <span className="font-poppin text-sm sm:text-base font-medium w-[92%] lg:w-full ">
                                {item.title}
                              </span>
                              <div className="w-[8%] lg:w-auto">
                                <svg
                                  className={`w-5 h-5 ${
                                    selected === index + 1
                                      ? "transform rotate-180"
                                      : ""
                                  }`}
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  viewBox="0 0 30 30"
                                  stroke="currentColor"
                                >
                                  <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div
                            className="relative overflow-hidden transition-all max-h-0 duration-700"
                            style={{
                              maxHeight:
                                selected === index + 1 &&
                                containerRefs.current[index]?.scrollHeight
                                  ? containerRefs.current[index].scrollHeight
                                  : "0",
                            }}
                            ref={(el) => {
                              if (el && !containerRefs.current.includes(el)) {
                                containerRefs.current.push(el);
                              }
                            }}
                          >
                            <div className="px-2 pb-6 font-poppin text-[12px] leading-[18px] sm:text-sm sm:leading-[20px] md:text-[15px] md:leading-[24px] lg:text-base font-normal text-black">
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
