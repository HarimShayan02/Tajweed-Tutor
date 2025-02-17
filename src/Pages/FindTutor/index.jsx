import React, { useEffect, useMemo, useState } from "react";
import Input from "../../Elements/Input";
import { LuSearch } from "react-icons/lu";
import Card from "../../Components/Card";
import supabase from "../../supabase/supabaseClient";
import { FaRegUserCircle } from "react-icons/fa";
import Loader from "../../Components/Loader";
import Skeleton from "react-loading-skeleton";

const FindTutor = () => {
  const [tutors, setTutors] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const filteredTutors = useMemo(() => {
    if (!debouncedSearchTerm) return tutors;

    const term = debouncedSearchTerm.toLowerCase();
    return tutors.filter((tutor) => {
      return tutor.fullname?.toLowerCase().includes(term);
    });
  }, [tutors, debouncedSearchTerm]);

  const getTutors = async () => {
    try {
      setLoading(true);
      let { data: tutors, error } = await supabase.from("tutors").select("*");
      if (error) {
        console.error("", error.message);
        return;
      }
      const filtered = tutors?.filter((item) => item?.is_approved);
      setTutors(filtered);
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTutors();
  }, []);

  return (
    <div className="h-full ">
      <div>
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
                  Enhance your Quranic recitation with personalized guidance
                  from experienced Tajweed tutors worldwide. Whether you're a
                  beginner or advancing your skills, our certified instructors
                  provide tailored lessons to help you perfect your
                  pronunciation and deepen your connection with the Quran at
                  your own pace. Start your journey today!
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
          <div className=" max-w-[1180px] mx-auto w-full flex gap-2 mb-6 ">
            <div className="w-[60%] flex flex-col gap-y-2">
              <label
                className="text-lg pl-3 text-black font-semibold"
                htmlFor=""
              >
                {" "}
                Search the Tutors :
              </label>
              <Input
                type="text"
                placeholder="Type the Keyword"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                className=" border  bg-transparent placeholder:text-lightBlack border-main placeholder:font-medium focus:outline-none text-white  w-full backdrop-blur-xl shadow shadow-card  rounded-full py-4 pl-4 text-sm leading-[24px]"
              />
            </div>
          </div>
          <div className="max-w-[1180px] mx-auto w-full">
            <div className="grid grid-cols-1 gap-y-6 ">
              {tutors?.length === 0 ? (
                <div className="min-h-[200px] flex rounded-md justify-center items-center">
                  <div className="flex flex-col items-center justify-center gap-y-2">
                    <FaRegUserCircle size={40} />
                    <h3 className="font-medium text-lg text-black">
                      Tutor is not Approved Yet Wait for admin to approved
                    </h3>
                  </div>
                </div>
              ) : filteredTutors?.length === 0 ? (
                <div className="min-h-[200px] flex rounded-md justify-center items-center">
                  <div className="flex flex-col items-center justify-center gap-y-2">
                    <FaRegUserCircle size={40} />
                    <h3 className="font-medium text-lg text-black">
                      No tutors found matching your search
                    </h3>
                  </div>
                </div>
              ) : (
                <>
                  {loading
                    ? filteredTutors?.map((_, index) => (
                        <div key={index} className="flex flex-col gap-2">
                          <Skeleton width={"100%"} height={280} />
                        </div>
                      ))
                    : filteredTutors?.map((tutor, index) => (
                        <Card
                          key={index}
                          id={tutor?.user_id}
                          title={tutor?.fullname}
                          description={tutor?.description}
                          verified={tutor?.is_verified}
                          language={tutor?.language}
                          payment={tutor?.payment}
                        />
                      ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTutor;
