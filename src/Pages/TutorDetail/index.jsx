import React, { useState } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { TbMessage } from "react-icons/tb";
import { PiMedalFill } from "react-icons/pi";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const TutorDetail = () => {
  // const [filters, setFilters] = useState({
  //   tab: "Web Development",
  // });

  const detailFilterOptions = [
    { key: 1, id: "about", label: "About" },
    { key: 2, id: "experience", label: "Experience" },
    { key: 3, id: "education", label: "Education" },
    { key: 4, id: "subject", label: "Subject" },
    { key: 5, id: "review", label: "Review" },
  ];

  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (id) => {
    setActiveTab(id);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="h-full ">
      <div
        className="h-full pt-32 pb-24 relative"
        style={{
          backgroundImage: "url(assets/header-banner-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
        <div className="max-w-[1180px] mx-auto w-full">
          <div className="h-full w-full flex gap-10 ">
            <div className="w-[20%] h-[270px] ">
              <img
                src="/assets/tutor-profile-1.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-[80%] h-full flex flex-col justify-center gap-y-3">
              <div className="flex gap-4 items-center">
                <h3 className="font-semibold leading-2 text-white text-[26px] tracking-tight">
                  Shiekh Ahmed Gamal
                </h3>
                <img
                  src="./assets/flag.png
                    "
                  alt=""
                  className="w-8 h-5 object-cover"
                />

                <VscVerifiedFilled size={22} color="green" />
              </div>
              <div>
                <p className="text-white text-lg">
                  Quran Reading , Tajweed Al Quran , Quran Memorisation
                </p>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center text-white">
                  <TbMessage size={18} color="white" />
                  Speaks :
                </div>
                <div className="flex items-center gap-2">
                  <h3 className=" text-[12px] font-medium  text-white">
                    English
                  </h3>
                  <span className=" px-1 py-1 uppercase text-[#2E7D32] bg-[#E6F4EA]  text-[12px] font-medium rounded-xl">
                    intermediate
                  </span>
                </div>
              </div>
              <div className="max-w-[400px] p-1.5 border border-white rounded-full  flex items-center gap-2">
                <div className="p-2 bg-[#2c846e] rounded-full">
                  <PiMedalFill size={20} className="text-white" />
                </div>
                <h1 className="text-white">
                  A highly rated and experienced Tutor
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: "url(/assets/learn-quran-bg.png)" }}
        className="pb-10"
      >
        <div className="max-w-[1180px] mx-auto w-full py-10">
          <div className="flex gap-10 py-1 items-center  ">
            {detailFilterOptions.map((tab) => (
              <div
                key={tab.key}
                className="flex-shrink-0 max-w-[180px] text-center"
              >
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`font-poppin font-semibold text-md  leading-[15px] pt-2 pb-1 break-words cursor-pointer ${
                    activeTab === tab.id
                      ? "text-[#89474b] border-b-2 border-[#89474b]"
                      : "text-lightBlack"
                  }`}
                >
                  {tab.label}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto w-full">
          <div id="about" className="w-full flex justify-between gap-6">
            <div className="w-[50%]">
              <h3 className="font-semibold leading-2 text-[20px] text-black tracking-tight">
                About Me
              </h3>
              <p className="font-poppin text-lightBlack text-sm leading-[20px] mt-2 sm:mb-0 md:mb-6">
                Assalamu Alaikum Hi! everyone, I am Mubasshir from India. I'm 23
                years old. I am an Arabic and Islamic Studies teacher. I can
                teach Quran, Tajweed, Islamic Studies and Modern Standard Arabic
                language through five languages. I have completed my Fazilat
                degree (B.A in Islamic Theology) from the most famous Islamic
                university in the world Darul Uloom Deoband. Recently I am
                pursuing a master's degree in Arabic language and literature
                from Islamic University of Minnesota, America, USA. I worked
                hard in the field of learning Arabic language. I also have done
                many courses in this field, which qualify me to teach all levels
                by adopting different methods based on the students level. I use
                different approaches like videos, magazines, books and articles.
                I have a wide experience of language teaching skills.Throughout
                my experience on teaching of Arabic language to foreign students
                I noticed their weakness and difficulties, and planned a strong
                methodology that carefully facilitates teaching in effective
                manners. I can provide you with highly interactive lessons that
                will cover all essential language skills like reading, speaking
                and even writing. So, if you want to learn Arabic language,
                Islamic Studies and the Holy Quran recitation with Tajweed,
                don't worry, I'm here to help you step by step till achieving
                your goal. Please book a lesson, I am sure that you will like my
                teaching. Thank you! See you soon.
              </p>
            </div>
            <div className="w-[50%] flex flex-col gap-y-4">
              <h3 className="font-semibold text-black  leading-2 text-[20px] tracking-tight">
                Contact Details
              </h3>
              <div className=" flex flex-col gap-y-1.5">
                <h3 className="font-semibold text-black">Email Address</h3>
                <p className="text-primary">hello@nungyn.shane.com</p>
              </div>
              <div className=" flex flex-col gap-y-1.5">
                <h3 className="font-semibold text-black">Social Media</h3>
                <div className="flex gap-2">
                  <MdOutlineFacebook size={24} className="text-lightBlack" />
                  <FaInstagram size={24} className="text-lightBlack" />
                </div>
              </div>
            </div>
          </div>
          <div id="experience" className="mt-6">
            <h3 className="font-semibold leading-2 text-[20px] text-black tracking-tight">
              Experience
            </h3>
            <div className="mt-6 pl-2">
              <h2 className="font-semibold text-black">
                {" "}
                Quran & Islamiyat teaching
              </h2>
              <p className="text-lightBlack font-medium">
                I am teaching to kids Basic quran Reading , tajweed , quran
                translation and islamiq rules
              </p>
              <h5 className="italic font-medium text-[#89474b]">
                Jan/2010 - Present
              </h5>
            </div>
          </div>
          <div id="education" className="mt-8 ">
            <h3 className="font-semibold leading-2 text-[20px] tracking-tight">
              Education
            </h3>
            <div className="mt-6 pl-2">
              {Array(4)
                .fill(4)
                .map((item, index) => (
                  <div className="flex flex-col gap-y-1">
                    <h5 className="font-semibold font-poppin text-base leading-[18px]">
                      Fazilat ( B.A in Islamic Studies)
                    </h5>
                    <p className="font-poppin text-lightBlack text-sm leading-[20px] mb-4">
                      Darul Uloom Deoband, Saharanpur, UP
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div id="subject" className="mt-8">
            <h3 className="font-semibold leading-2 text-[20px] tracking-tight">
              Subject
            </h3>
            <div className="mt-6 pl-2">
              {Array(3)
                .fill(3)
                .map((item) => (
                  <div className="flex flex-col mb-6">
                    <h5 className="font-semibold font-poppin text-base leading-[18px]">
                      Basic Quran Reading & Islamic Teachings:
                    </h5>
                    <p className="font-poppin text-lightBlack text-sm leading-[20px] mt-2 sm:mb-0 md:mb-6">
                      This course is designed for beginners who wish to learn
                      The Quran and the fundamentals of Islam including the five
                      pillars. The course has all the important lessons for the
                      correct recitation of the Holy Quran. Noorani Qaida Course
                      starts with the Arabic Alphabet and gradually leads the
                      student from individual letters to joined letters, Arabic
                      words, sentences, and the rules of Tajweed. What you will
                      learn Identify the 28 alphabets in the Arabic language
                      Understand how to apply the vowel signs to Arabic letters
                      Learn how to pronounce Arabic words and sentences
                      Determine how to recite Arabic verses in a flowing manner
                      Grasp basic Islamic principles Read the Holy Quran while
                      applying Tajweed rules Memorize short surahs, duas, and
                      kalimas Study the basics about Islam including the five
                      pillars Learn daily supplications
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-[1180px] mx-auto w-full">
        <div className="flex w-full gap-4 ">
          <div className=" w-[25%] flex flex-col gap-y-2">
            <div>back button</div>
            <div className=" bg-white rounded-md py-8 px-4 flex flex-col ">
              <div className="flex justify-center items-center flex-col space-y-2 mb-8">
                <div className="min-h-[120px] h-auto min-w-[120px] max-w-[120px]  rounded-lg">
                  <img
                    src="/assets/tutor-profile-1.jpg"
                    alt=""
                    className="w-full min-h-[135px] object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold leading-2 text-[20px] tracking-tight">
                  Shiekh Ahmed Gamal
                </h3>
                <div className="bg-secondary h-6 rounded-md flex items-center justify-center">
                  <h3 className="text-sm px-2 text-white font-semibold">
                    Newly Joined
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-3 w-full gap-y-2 ">
                {Array(5)
                  .fill(5)
                  .map((item) => (
                    <div className="col-span-1 ">
                      <div className="flex flex-col justify-center items-center space-y-2">
                        <img
                          src="./assets/flag.png
                    "
                          alt=""
                          className="w-5 h-3 object-cover"
                        />
                        <h3>India</h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className=" bg-white rounded-md py-6 px-4 flex flex-col ">
              <h3 className="font-semibold leading-2 text-[20px] tracking-tight">
                Speak
              </h3>
              <div className="flex flex-col space-y-2 mt-5">
                {Array(3)
                  .fill(3)
                  .map((item) => (
                    <div className="min-w-[130px] w-auto rounded-md">
                      <div className="flex items-center">
                        <span className="px-4 py-1 bg-lightblue  text-[12px] font-medium rounded-l-md ">
                          English
                        </span>
                        <span className="px-4 py-1 bg-primary  text-[12px] font-medium   rounded-r-md">
                          intermediate
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="w-[75%] flex flex-col space-y-8 h-full">
            <div className="flex flex-col rounded-lg ">
              <div className="h-[350px] bg-white ">
                <h2>Video</h2>
              </div>
              <div className=" bg-white  p-6 flex flex-col">
                <h3 className="font-semibold leading-2 text-[20px] tracking-tight">
                  About
                </h3>
                <p className="font-poppin text-lightBlack text-sm leading-[20px] mt-2 sm:mb-0 md:mb-6">
                  Assalamu Alaikum Hi! everyone, I am Mubasshir from India. I'm
                  23 years old. I am an Arabic and Islamic Studies teacher. I
                  can teach Quran, Tajweed, Islamic Studies and Modern Standard
                  Arabic language through five languages. I have completed my
                  Fazilat degree (B.A in Islamic Theology) from the most famous
                  Islamic university in the world Darul Uloom Deoband. Recently
                  I am pursuing a master's degree in Arabic language and
                  literature from Islamic University of Minnesota, America, USA.
                  I worked hard in the field of learning Arabic language. I also
                  have done many courses in this field, which qualify me to
                  teach all levels by adopting different methods based on the
                  students level. I use different approaches like videos,
                  magazines, books and articles. I have a wide experience of
                  language teaching skills.Throughout my experience on teaching
                  of Arabic language to foreign students I noticed their
                  weakness and difficulties, and planned a strong methodology
                  that carefully facilitates teaching in effective manners. I
                  can provide you with highly interactive lessons that will
                  cover all essential language skills like reading, speaking and
                  even writing. So, if you want to learn Arabic language,
                  Islamic Studies and the Holy Quran recitation with Tajweed,
                  don't worry, I'm here to help you step by step till achieving
                  your goal. Please book a lesson, I am sure that you will like
                  my teaching. Thank you! See you soon.
                </p>
              </div>
            </div>
            <div className=" bg-white rounded-md p-6 flex flex-col">
              <h3 className="font-semibold leading-2 text-[20px] tracking-tight">
                Experience
              </h3>
              <div className="flex flex-col space-y-2 mt-6">
                <h5 className="font-semibold font-poppin text-base leading-[18px]">
                  Arabic language
                </h5>
                <p className="font-poppin text-lightBlack text-sm leading-[20px] mb-2 sm:mb-0 md:mb-6">
                  I worked hard in the field of learning Arabic language. I also
                  have done many courses in this field, which qualify me to
                  teach all levels by adopting different methods based on the
                  students level. I use different approaches like videos,
                  magazines, books and articles. I have a wide experience of
                  language teaching skills.Throughout my experience on teaching
                  of Arabic language to foreign students I noticed their
                  weakness and difficulties, and planned a strong methodology
                  that carefully facilitates teaching in effective manners. I
                  can provide you with highly interactive lessons that will
                  cover all essential language skills like reading, speaking and
                  even writing. Jan/1970 - Present
                </p>
              </div>
            </div>
            <div className="bg-white rounded-md p-6 flex flex-col">
              <h3 className="font-semibold leading-2 text-[20px] tracking-tight">
                Education
              </h3>
              <div className="mt-6">
                {Array(4)
                  .fill(4)
                  .map((item, index) => (
                    <div className="flex flex-col gap-y-1">
                      <h5 className="font-semibold font-poppin text-base leading-[18px]">
                        Fazilat ( B.A in Islamic Studies)
                      </h5>
                      <p className="font-poppin text-lightBlack text-sm leading-[20px] mb-4">
                        Darul Uloom Deoband, Saharanpur, UP
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className=" bg-white rounded-md p-6 flex flex-col">
              <h3 className="font-semibold leading-2 text-[20px] tracking-tight">
                Subject
              </h3>
              <div className="mt-6 gap-y-2">
                {Array(3)
                  .fill(3)
                  .map((item) => (
                    <div className="flex flex-col mb-6">
                      <h5 className="font-semibold font-poppin text-base leading-[18px]">
                        Basic Quran Reading & Islamic Teachings:
                      </h5>
                      <p className="font-poppin text-lightBlack text-sm leading-[20px] mt-2 sm:mb-0 md:mb-6">
                        This course is designed for beginners who wish to learn
                        The Quran and the fundamentals of Islam including the
                        five pillars. The course has all the important lessons
                        for the correct recitation of the Holy Quran. Noorani
                        Qaida Course starts with the Arabic Alphabet and
                        gradually leads the student from individual letters to
                        joined letters, Arabic words, sentences, and the rules
                        of Tajweed. What you will learn Identify the 28
                        alphabets in the Arabic language Understand how to apply
                        the vowel signs to Arabic letters Learn how to pronounce
                        Arabic words and sentences Determine how to recite
                        Arabic verses in a flowing manner Grasp basic Islamic
                        principles Read the Holy Quran while applying Tajweed
                        rules Memorize short surahs, duas, and kalimas Study the
                        basics about Islam including the five pillars Learn
                        daily supplications
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TutorDetail;
