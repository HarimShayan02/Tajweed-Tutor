/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../hook/Context";
import supabase from "../../supabase/supabaseClient";

const TutorDashboard = () => {
  const { user } = useGlobalContext();
  const [tutor, setTutor] = useState(null);
  const [matchedStudents, setMatchedStudents] = useState([]);

  const getTutors = async () => {
    try {
      let { data: tutors, error } = await supabase
        .from("tutors")
        .select("*")
        .eq("user_id", user?.user_id);
      if (error) {
        console.error("", error.message);
        return;
      }
      setTutor(tutors[0]);
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
    }
  };

  const getStudent = async () => {
    try {
      let { data: students, error } = await supabase
        .from("students")
        .select("*");
      if (error) {
        console.error("", error.message);
        return;
      }

      if (tutor && tutor.students) {
        const matched = students.filter((student) =>
          tutor?.students?.includes(student.user_id),
        );
        setMatchedStudents(matched);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  console.log("Student:", matchedStudents);

  useEffect(() => {
    if (!user) return;
    getTutors();
  }, [user]);

  useEffect(() => {
    if (tutor) {
      getStudent();
    }
  }, [tutor]);

  return (
    <div className="min-h-[60vh]">
      <div className="mx-auto max-w-[1200px] pt-[7rem]">
        <h3 className="text-3xl font-bold tracking-wide text-black">
          Assigned Student
        </h3>
        <div className="mt-10  border rounded-md border-lightBlack">
          <div className="flex bg-main  items-center h-[80px] border-primary w-full  ">
            <h3 className=" px-4 text-2xl tracking-wide font-semibold text-white ">
              {user?.fullname}
            </h3>
          </div>
          {matchedStudents?.map((student) => (
            <div
              key={student?.id}
              className="p-4 border-b border-lightBlack flex justify-between items-center shadow-sm transition"
            >
              <div>
                <h3 className="text-lg font-semibold text-black">
                  {student.fullname}
                </h3>
                <p className="text-lightBlack">
                  Tutor:{" "}
                  <span className="font-medium text-main">
                    {user?.fullname}
                  </span>
                </p>
                {/* <p className="text-gray-500">Subject: {session.subject}</p>
                <p className="text-gray-400 text-sm">{session.time}</p> */}
              </div>
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full bg-primary text-white`}
              >
                Scheduled
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;
