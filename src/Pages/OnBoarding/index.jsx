import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../Elements/Input";
import Button from "../../Elements/Button";
import { CiSaveUp2 } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { MdDeleteOutline } from "react-icons/md";
import supabase from "../../supabase/supabaseClient";
import { Success } from "../../Response/Response";

const OnBoarding = () => {
  const { id, role } = useParams();
  const navigate = useNavigate();
  const [tutorData, setTutorData] = useState(null);
  const [tutorDetail, setTutorDetail] = useState({
    fullname: "",
    country: "",
    badge: "",
    payment: "",
    description: "",
    experience: [],
    education: [],
    subject: [],
    language: [],
    specialized: [],
  });

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setTutorDetail((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (arrayName, id, name, value) => {
    setTutorDetail((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName]?.map((item) =>
        item.id === id ? { ...item, [name]: value } : item,
      ),
    }));
  };

  const addToArray = (arrayName, newItem) => {
    setTutorDetail((prev) => ({
      ...prev,
      [arrayName]: [...prev[arrayName], newItem],
    }));
  };

  const removeFromArray = (arrayName, id) => {
    setTutorDetail((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName]?.filter((item) => item.id !== id),
    }));
  };

  const createTutor = async (tutorDetail) => {
    if (!id || !role) return;
    try {
      const { data: tutorProfile, error } = await supabase
        .from("tutors")
        .insert([{ ...tutorDetail, user_id: id, role: role }])
        .select();

      if (error) {
        console.error("Error inserting tutor:", error.message);
        return;
      }

      Success("Registered Successfully");
      setTutorData(tutorProfile);
      navigate("/tutor-list");
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const getTutors = async (id) => {
    try {
      let { data: tutors, error } = await supabase
        .from("tutors")
        .select("*")
        .eq("user_id", id);
      if (error) {
        console.error("", error.message);
        return;
      }

      if (tutors && tutors.length > 0) {
        setTutorDetail(tutors[0]);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
    }
  };

  useEffect(() => {
    if (tutorData?.user_id) {
      getTutors(tutorData.user_id);
    }
  }, [tutorData]);

  const handleSubmit = () => {
    createTutor(tutorDetail);
  };

  return (
    <div style={{ backgroundImage: "url(/assets/learn-quran-bg.png)" }}>
      <div className="min-h-screen h-auto">
        <div className="mx-auto max-w-[1200px] pt-[7.5rem] pb-4 w-full">
          <div className="">
            <h2 className="text-4xl italic font-semibold text-gray-900 sm:text-5xl">
              Welcome On Board Tutor
            </h2>
            <p className="mt-2 italic font-medium text-lg text-lightBlack">
              Fill out your detail to show in the list
            </p>
          </div>
          <div>
            <div className=" gap-6 flex flex-col mt-8">
              <h3 className="font-semibold text-xl font-poppin tracking-wide">
                Personal Detail:
              </h3>
              <div className="flex flex-col gap-y-2">
                <label className="text-md font-medium"> Full Name</label>
                <Input
                  type="text"
                  placeholder="Full Name"
                  name="fullname"
                  onChange={handleDetailChange}
                  value={tutorDetail.fullname}
                  className="border border-[#837f76] bg-transparent  focus:outline-none  w-[50%] rounded-md py-2 pl-3 text-sm leading-[24px] mb-6 mt-2"
                />
                <label className="text-sm font-medium"> Descriptiom</label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Write a information about you"
                  onChange={handleDetailChange}
                  value={tutorDetail.description}
                  className="border border-[#837f76] bg-transparent resize-none h-[150px]  focus:outline-none    w-[50%]  rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                />
                <label className="text-sm font-medium">Badge</label>
                <Input
                  type="text"
                  name="badge"
                  placeholder="Badge"
                  onChange={handleDetailChange}
                  value={tutorDetail.badge}
                  className="border border-[#837f76] bg-transparent  focus:outline-none  w-[50%] rounded-md py-2 pl-3 text-sm leading-[24px] mb-6 mt-2"
                />
                <label className="text-sm font-medium">Country</label>
                <Input
                  type="text"
                  name="country"
                  placeholder="type your country"
                  onChange={handleDetailChange}
                  value={tutorDetail.country}
                  className="border border-[#837f76] bg-transparent  focus:outline-none   w-[50%]  rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                />
                <label className="text-sm font-medium">
                  Payment (per hour)
                </label>
                <Input
                  type="text"
                  name="payment"
                  placeholder="rate per hour"
                  onChange={handleDetailChange}
                  value={tutorDetail.payment}
                  className="border border-[#837f76] bg-transparent  focus:outline-none   w-[50%]  rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                />
              </div>

              <div>
                <div>
                  <h3 className="font-semibold pb-2 text-xl font-poppin tracking-wide">
                    Experience:
                  </h3>

                  {tutorDetail?.experience?.map((exp) => (
                    <div key={exp.id} className="flex flex-col mb-6">
                      <Input
                        type="text"
                        name="title"
                        placeholder="Type the title"
                        value={exp.title}
                        onChange={(e) =>
                          handleArrayChange(
                            "experience",
                            exp.id,
                            e.target.name,
                            e.target.value,
                          )
                        }
                        className="border border-[#837f76] bg-transparent focus:outline-none w-[50%] rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                      />
                      <Input
                        type="text"
                        name="description"
                        placeholder="Type your Description"
                        value={exp.description}
                        onChange={(e) =>
                          handleArrayChange(
                            "experience",
                            exp.id,
                            e.target.name,
                            e.target.value,
                          )
                        }
                        className="border border-[#837f76] bg-transparent focus:outline-none w-[50%] rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                      />
                      <div className="flex gap-3">
                        <Input
                          type="date"
                          name="start_date"
                          placeholder="Type the start date"
                          value={exp.start_date}
                          onChange={(e) =>
                            handleArrayChange(
                              "experience",
                              exp.id,
                              e.target.name,
                              e.target.value,
                            )
                          }
                          className="border border-[#837f76] bg-transparent focus:outline-none w-full rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                        />
                        <Input
                          type="date"
                          name="end_date"
                          placeholder="Type your end date"
                          value={exp.end_date}
                          onChange={(e) =>
                            handleArrayChange(
                              "experience",
                              exp.id,
                              e.target.name,
                              e.target.value,
                            )
                          }
                          className="border border-[#837f76] bg-transparent focus:outline-none w-full rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                        />
                      </div>
                      <Button
                        onClick={() => removeFromArray("experience", exp.id)}
                        className="text-white bg-[#BA0021] px-2 py-1.5 rounded-md"
                      >
                        <MdDeleteOutline size={17} />
                      </Button>
                    </div>
                  ))}
                  <Button
                    isPrimary
                    onClick={() =>
                      addToArray("experience", {
                        id: uuidv4(),
                        title: "",
                        description: "",
                        start_date: "",
                        end_date: "",
                      })
                    }
                    className="px-4 py-1.5 flex items-center mt-1"
                  >
                    <IoMdAddCircle size={17} />
                    Add
                  </Button>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold pb-2 text-xl font-poppin tracking-wide">
                    Subject:
                  </h3>
                  {tutorDetail?.subject?.map((exp) => (
                    <div key={exp.id} className="flex flex-col mb-6">
                      <Input
                        type="text"
                        name="title"
                        placeholder="Type the title"
                        value={exp.title}
                        onChange={(e) =>
                          handleArrayChange(
                            "subject",
                            exp.id,
                            e.target.name,
                            e.target.value,
                          )
                        }
                        className="border border-[#837f76] bg-transparent focus:outline-none w-[50%] rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                      />
                      <Input
                        type="text"
                        name="description"
                        placeholder="Type your Description"
                        value={exp.description}
                        onChange={(e) =>
                          handleArrayChange(
                            "subject",
                            exp.id,
                            e.target.name,
                            e.target.value,
                          )
                        }
                        className="border border-[#837f76] bg-transparent focus:outline-none w-[50%] rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                      />
                      <Button
                        onClick={() => removeFromArray("subject", exp.id)}
                        className="text-white bg-[#BA0021] px-2 py-1.5 rounded-md"
                      >
                        <MdDeleteOutline size={17} />
                      </Button>
                    </div>
                  ))}
                  <Button
                    isPrimary
                    onClick={() =>
                      addToArray("subject", {
                        id: uuidv4(),
                        title: "",
                        description: "",
                      })
                    }
                    className="px-4 py-1.5 flex items-center mt-1"
                  >
                    <IoMdAddCircle size={17} />
                    Add
                  </Button>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold pb-2 text-xl font-poppin tracking-wide">
                    Education:
                  </h3>
                  {tutorDetail?.education?.map((exp) => (
                    <div key={exp.id} className="flex flex-col mb-6">
                      <Input
                        type="text"
                        name="title"
                        placeholder="Type the title"
                        value={exp.title}
                        onChange={(e) =>
                          handleArrayChange(
                            "education",
                            exp.id,
                            e.target.name,
                            e.target.value,
                          )
                        }
                        className="border border-[#837f76] bg-transparent focus:outline-none w-[50%] rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                      />
                      <Input
                        type="text"
                        name="description"
                        placeholder="Type your Description"
                        value={exp.description}
                        onChange={(e) =>
                          handleArrayChange(
                            "education",
                            exp.id,
                            e.target.name,
                            e.target.value,
                          )
                        }
                        className="border border-[#837f76] bg-transparent focus:outline-none w-[50%] rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                      />
                      <Button
                        onClick={() => removeFromArray("education", exp.id)}
                        className="text-white bg-[#BA0021] px-2 py-1.5 rounded-md"
                      >
                        <MdDeleteOutline size={17} />
                      </Button>
                    </div>
                  ))}
                  <Button
                    isPrimary
                    onClick={() =>
                      addToArray("education", {
                        id: uuidv4(),
                        title: "",
                        description: "",
                      })
                    }
                    className="px-4 py-1.5 flex items-center mt-1"
                  >
                    <IoMdAddCircle size={17} />
                    Add
                  </Button>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold pb-2 text-xl font-poppin tracking-wide">
                    Specialized:
                  </h3>
                  {tutorDetail?.specialized?.map((exp) => (
                    <div key={exp.id} className="flex flex-col mb-6">
                      <Input
                        type="text"
                        name="title"
                        placeholder="Type the title"
                        value={exp.title}
                        onChange={(e) =>
                          handleArrayChange(
                            "specialized",
                            exp.id,
                            e.target.name,
                            e.target.value,
                          )
                        }
                        className="border border-[#837f76] bg-transparent focus:outline-none w-[50%] rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                      />
                      <Button
                        onClick={() => removeFromArray("specialized", exp.id)}
                        className="text-white bg-[#BA0021] px-2 py-1.5 rounded-md"
                      >
                        <MdDeleteOutline size={17} />
                      </Button>
                    </div>
                  ))}
                  <Button
                    isPrimary
                    onClick={() =>
                      addToArray("specialized", {
                        id: uuidv4(),
                        title: "",
                      })
                    }
                    className="px-4 py-1.5 flex items-center mt-1"
                  >
                    <IoMdAddCircle size={17} />
                    Add
                  </Button>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold pb-2 text-xl font-poppin tracking-wide">
                    Language:
                  </h3>
                  {tutorDetail?.language?.map((exp) => (
                    <div key={exp.id} className="flex flex-col mb-6">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Type the title"
                        value={exp.title}
                        onChange={(e) =>
                          handleArrayChange(
                            "language",
                            exp.id,
                            e.target.name,
                            e.target.value,
                          )
                        }
                        className="border border-[#837f76] bg-transparent focus:outline-none w-[50%] rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                      />
                      <Input
                        type="text"
                        name="level"
                        placeholder="Type your level"
                        value={exp.level}
                        onChange={(e) =>
                          handleArrayChange(
                            "language",
                            exp.id,
                            e.target.name,
                            e.target.value,
                          )
                        }
                        className="border border-[#837f76] bg-transparent focus:outline-none w-[50%] rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
                      />
                      <Button
                        onClick={() => removeFromArray("language", exp.id)}
                        className="text-white bg-[#BA0021] px-2 py-1.5 rounded-md"
                      >
                        <MdDeleteOutline size={17} />
                      </Button>
                    </div>
                  ))}
                  <Button
                    isPrimary
                    onClick={() =>
                      addToArray("language", {
                        id: uuidv4(),
                        name: "",
                        level: "",
                      })
                    }
                    className="px-4 py-1.5 flex items-center mt-1"
                  >
                    <IoMdAddCircle size={17} />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center items-center ">
            <Button
              className={"px-8 py-2"}
              onClick={() => handleSubmit()}
              isPrimary
            >
              <CiSaveUp2 size={17} />
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
