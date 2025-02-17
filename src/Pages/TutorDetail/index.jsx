/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { TbMessage } from "react-icons/tb";
import { PiMedalFill } from "react-icons/pi";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { useParams } from "react-router-dom";
import supabase from "../../supabase/supabaseClient";
import Button from "../../Elements/Button";
import { useGlobalContext } from "../../hook/Context";
import SignInModal from "../../Components/SignInModal";

const TutorDetail = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [tutorDetail, setTutorsDetail] = useState(null);
  const [activeTab, setActiveTab] = useState("about");
  const { user } = useGlobalContext();
  const { id } = useParams();

  const detailFilterOptions = [
    { key: 1, id: "about", label: "About" },
    { key: 2, id: "experience", label: "Experience" },
    { key: 3, id: "education", label: "Education" },
    { key: 4, id: "subject", label: "Subject" },
    { key: 5, id: "review", label: "Review" },
  ];

  // console.log(tutorDetail);

  const getTutors = async () => {
    try {
      let { data: tutors, error } = await supabase.from("tutors").select("*");
      if (error) {
        console.error("", error.message);
        return;
      }
      const filteredTutor = tutors?.find((tutor) => tutor.user_id === id);
      setTutorsDetail(filteredTutor);
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
    }
  };

  const selectedTutor = async (tutorId) => {
    try {
      // Step 1: Fetch the current tutor's data
      const { data: tutorData, error: fetchError } = await supabase
        .from("tutors")
        .select("students")
        .eq("id", tutorId)
        .single();

      if (fetchError) {
        console.error("Error fetching tutor data:", fetchError.message);
        return;
      }

      // Step 2: Check if the student is already in the array
      if (tutorData.students?.includes(user?.user_id)) {
        console.log("Student is already booked with this tutor.");
        return;
      }

      // Step 3: Append the student's ID to the students array
      const updatedStudents = [...(tutorData.students || []), user?.user_id];

      const { data: updatedTutor, error: updateError } = await supabase
        .from("tutors")
        .update({ students: updatedStudents })
        .eq("id", tutorId)
        .select();

      if (updateError) {
        console.error("Error updating tutor data:", updateError.message);
        return;
      }

      console.log("Tutor updated successfully:", updatedTutor);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const handleTabClick = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    getTutors();
  }, [id]);

  return (
    <div className="h-full">
      <div
        className="h-full pt-32 pb-24 relative"
        style={{
          backgroundImage: "url(/assets/header-banner-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute right-0 top-0">
          <img src="/assets/footar-right-corner-image.png" alt="" />
        </div>
        <div className="absolute left-0 top-0">
          <img src="/assets/footar-left-corner-image.png" alt="" />
        </div>

        <div className="max-w-[1180px] mx-auto w-full">
          <div className="h-full w-full flex gap-10">
            <div className="w-[20%] h-[270px]">
              <img
                src={
                  tutorDetail?.profile_img
                    ? tutorDetail?.profile_img
                    : "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
                }
                alt="Tutor Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-[80%] h-full flex flex-col justify-center gap-y-3">
              <div className="flex gap-4 items-center">
                <h3 className="font-semibold leading-2 text-white text-[26px] tracking-tight">
                  {tutorDetail?.fullname}
                </h3>
                <img
                  src={`https://flagsapi.com/${tutorDetail?.country}/shiny/64.png`}
                  alt=""
                  className="w-8 h-5 object-cover"
                />
                {tutorDetail?.is_verified && (
                  <VscVerifiedFilled size={22} color="green" />
                )}
              </div>
              {tutorDetail?.specialized?.map((item) => (
                <div key={item?.id}>
                  <p className="text-white text-lg">
                    {Array.isArray(item) ? item?.title.join(", ") : item?.title}
                  </p>
                </div>
              ))}

              <div className="flex gap-2">
                <div className="flex gap-1 items-center text-white">
                  <TbMessage size={18} color="white" />
                  Speaks:
                </div>
                <div className="flex items-center gap-2">
                  {tutorDetail?.language?.map((lang, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <h3 className="text-[12px] font-medium text-white">
                        {lang?.name}
                      </h3>
                      <span className="px-1 py-1 uppercase text-[#2E7D32] bg-[#E6F4EA] text-[12px] font-medium rounded-xl">
                        {lang?.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="max-w-[400px] p-1.5 border border-white rounded-full flex items-center gap-2">
                <div className="p-2 bg-[#2c846e] rounded-full">
                  <PiMedalFill size={20} className="text-white" />
                </div>
                <h1 className="text-white">{tutorDetail?.badge}</h1>
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
          <div className="flex gap-10 py-1 items-center">
            {detailFilterOptions?.map((tab) => (
              <div
                key={tab.key}
                className="flex-shrink-0 max-w-[180px] text-center"
              >
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`font-poppin font-semibold text-md leading-[15px] pt-2 pb-1 break-words cursor-pointer ${
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
                {tutorDetail?.description}
              </p>
            </div>
            <div className="w-[50%] flex flex-col gap-y-4">
              <h3 className="font-semibold text-black leading-2 text-[20px] tracking-tight">
                Contact Details
              </h3>
              <div className="flex flex-col gap-y-1.5">
                <h3 className="font-semibold text-black">Email Address</h3>
                <p className="text-primary">hello@nungyn.shane.com</p>
                <Button
                  disabled={user?.role === "tutor"}
                  onClick={() =>
                    !user ? setisModalOpen(true) : selectedTutor(tutorDetail.id)
                  }
                  className="px-5 py-2 bg-main text-white disabled:!bg-lightBlack rounded-md  disabled:!cursor-not-allowed disabled:!text-black"
                >
                  Book now
                </Button>
              </div>
              <div className="flex flex-col gap-y-1.5">
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
            {tutorDetail?.experience?.map((exp, index) => (
              <div key={index} className="mt-6 pl-2">
                <h2 className="font-semibold text-black">{exp.title}</h2>
                <p className="text-lightBlack font-medium">{exp.description}</p>
                <h5 className="italic font-medium text-[#89474b]">
                  {exp.start_date} - {exp.end_date}
                </h5>
              </div>
            ))}
          </div>
          <div id="education" className="mt-8">
            <h3 className="font-semibold leading-2 text-[20px] tracking-tight">
              Education
            </h3>
            {tutorDetail?.education?.map((edu, index) => (
              <div key={index} className="mt-6 pl-2">
                <h5 className="font-semibold font-poppin text-base leading-[18px]">
                  {edu.title}
                </h5>
                <p className="font-poppin text-lightBlack text-sm leading-[20px] mb-4">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
          <div id="subject" className="mt-8">
            <h3 className="font-semibold leading-2 text-[20px] tracking-tight">
              Subject
            </h3>
            {tutorDetail?.subject?.map((sub, index) => (
              <div key={index} className="mt-6 pl-2">
                <h5 className="font-semibold font-poppin text-base leading-[18px]">
                  {sub.name}
                </h5>
                <p className="font-poppin text-lightBlack text-sm leading-[20px] mt-2 sm:mb-0 md:mb-6">
                  {sub.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SignInModal
        isOpen={isModalOpen}
        setIsModalOpen={setisModalOpen}
        title={"Sign in as Student"}
      />
    </div>
  );
};

export default TutorDetail;
