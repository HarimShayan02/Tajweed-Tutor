import React, { useState } from "react";
import Input from "../../Elements/Input";
import { LuSearch } from "react-icons/lu";
import Card from "../../Components/Card";
import Container from "../../Components/Container";

const FindTutor = () => {
  // const [selectedSearch, setSelectedSearch] = useState([]);

  // const minuteData = [
  //   { id: "1", name: "15 minutes" },
  //   { id: "2", name: "30 minutes" },
  //   { id: "3", name: "1 hour" },
  // ];

  // const tutorDetails = [
  //   {
  //     name: "Mufti Mubasshir Qasmi",
  //     detail:
  //       "Assalamu Alaikum Hi! everyone, I am Mubasshir from India. I'm 23 years old. I am an Arabic and Islamic Studies teacher. I can teach Quran, Tajweed, Islamic Studies and Modern Standard Arabic language through five languages. I have completed my Fazilat degree (B.A in Islamic Theology) from the most famous Islamic university in the world Darul Uloom Deoband. Recently I am pursuing a master's degree in Arabic language and literature from Islamic University of Minnesota, America, USA. I worked hard in the field of learning Arabic language. I also have done many courses in this field, which qualify me to teach all levels by adopting different methods based on the students level. I use different approaches like videos, magazines, books and articles. I have a wide experience of language teaching skills.Throughout my experience on teaching of Arabic language to foreign students I noticed their weakness and difficulties, and planned a strong methodology that carefully facilitates teaching in effective manners. I can provide you with highly interactive lessons that will cover all essential language skills like reading, speaking and even writing. So, if you want to learn Arabic language, Islamic Studies and the Holy Quran recitation with Tajweed, don't worry, I'm here to help you step by step till achieving your goal. Please book a lesson, I am sure that you will like my teaching. Thank you! See you soon.",
  //     profileImg: "/assets/tutor-profile-1.jpg",
  //     isNew: "Newly Joined",
  //     country: "india",
  //     checked: "Checked",
  //     price: "6",
  //     language: [
  //       {
  //         name: "English",
  //         status: "Advanced ",
  //       },
  //       {
  //         name: "Urdu",
  //         status: "Intermediate ",
  //       },
  //       {
  //         name: "Arabic",
  //         status: "Advanced ",
  //       },
  //     ],
  //     timeSlot: "",
  //     experience: [
  //       {
  //         title: "Arabic language",
  //         detail:
  //           "I worked hard in the field of learning Arabic language. I also have done many courses in this field, which qualify me to teach all levels by adopting different methods based on the students level. I use different approaches like videos, magazines, books and articles. I have a wide experience of language teaching skills.Throughout my experience on teaching of Arabic language to foreign students I noticed their weakness and difficulties, and planned a strong methodology that carefully facilitates teaching in effective manners. I can provide you with highly interactive lessons that will cover all essential language skills like reading, speaking and even writing Jan/1970 - Present",
  //       },
  //     ],
  //     education: [
  //       {
  //         degree: "Fazilat (B.A in Islamic Studies)",
  //         institution: "Darul Uloom Deoband , Saharanpur, UP",
  //       },
  //       {
  //         degree: "M.A in Arabic Language and Literature",
  //         institution: "Islamic University of Minnesota ,America, USA",
  //       },
  //       {
  //         degree: "Diploma in English Language and Literature",
  //         institution: "Al Mahadul Aali Al-Islami , Hyderabad",
  //       },
  //       {
  //         degree: "Certificate course",
  //         institution: "Al Azhar University , Egypt",
  //       },
  //       {
  //         degree: "Specialization in Ifta (Islamic Jurisprudence)",
  //         institution: "Al Mahadul Aali Al-Islami , Hyderabad",
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="h-full ">
      {/* <div
        className="min-h-[600px] h-auto flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('/assets/turtor-hero-1.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1180px] mx-auto w-full flex flex-col items-center justify-center  ">
          <h1 className="font-poppin font-bold text-[30px] leaading-[35px] text-white">
            Find tutors
          </h1>
          <p className="font-poppin font-medium text-base leaading-[19px] text-white  my-2">
            Reach your personal learning goals faster with expert Quran teachers
            from around the World.
          </p>

          <div className="w-[70%] flex gap-2 mx-auto p-2 mt-4">
            <div className="w-[90%] ">
              <Input
                type="text"
                placeholder="type the keyword"
                // onChange={handleTextChange}
                // value={textInput}
                className=" border-2 border-white bg-transparent placeholder:text-white placeholder:font-medium focus:outline-none  w-full backdrop-blur-lg shadow shadow-card   rounded-full py-4 pl-3 text-sm leading-[24px]"
              />
            </div>
            <div className="w-[8%]">
              <button className="rounded-full w-full h-full border-2  border-white outline-none flex items-center justify-center shadow shadow-card  ">
                <LuSearch
                  size={22}
                  className="text-white font-semibold hover:text-lightblue"
                />
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="py-28 relative"
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
        <div className="max-w-[1180px] mx-auto w-full">
          <div className="flex md:justify-between items-center ">
            <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col ">
              <h1 className="font-semibold text-[28px] text-white leading-[30px] md:text-[40px] md:leading-[40px] lg:text-[60px] lg:leading-[60px] font-poppin tracking-tight md:tracking-normal">
                <span className="has-gradient">C</span>onnect with Top Tutors
                Near You
              </h1>
              <p className="font-poppin max-w-[595px] font-normal text-[14px] md:text-[15px] lg:text-base leading-[20px] sm:leading-[24px] text-white mt-7">
                Achieve your personal learning goals with ease through
                personalized guidance from expert Quran teachers from around the
                globe. Whether you're a beginner or seeking advanced knowledge,
                our qualified instructors provide tailored lessons to suit your
                needs, helping you deepen your understanding and connection with
                the Quran at your own pace
              </p>
            </div>
            <div className="w-[25%]  hidden md:block">
              <img
                src="assets/findtutorheader.png"
                alt=""
                className="w-full h-full object-cover rotate-45"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-10"
        style={{ backgroundImage: "url(/assets/learn-quran-bg.png)" }}
      >
        <div className="w-[70%] flex gap-2 mx-auto mb-6 ">
          <div className="w-[50%]">
            <Input
              type="text"
              placeholder="Type the Keyword"
              // onChange={handleTextChange}
              // value={textInput}
              className=" border-2 border-white placeholder:text-white bg-[#451416] placeholder:font-medium focus:outline-none text-white  w-full backdrop-blur-xl shadow shadow-card  rounded-full py-4 pl-4 text-sm leading-[24px]"
            />
          </div>

          <button className="rounded-full border-2 w-16 h-16 border-white outline-none flex items-center bg-[#451416] justify-center shadow shadow-card ">
            <LuSearch
              size={22}
              className="text-white font-semibold hover:text-lightblue"
            />
          </button>
        </div>

        <div className="max-w-[1280px] mx-auto w-full">
          <div className="grid grid-cols-1 gap-y-6 ">
            {Array(4)
              ?.fill(4)
              ?.map((item) => (
                <Card />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTutor;
