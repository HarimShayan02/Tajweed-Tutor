import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Input from "../../Elements/Input";
import Button from "../../Elements/Button";
import supabase from "../../supabase/supabaseClient";

const Signup = ({ isOpen, setIsModalOpen }) => {
  const [studentDetail, setStudentDetail] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const signUpStudent = async (fields) => {
    try {
      const { data: authData, error } = await supabase.auth.signUp({
        email: fields?.email,
        password: fields?.password,
      });

      if (error) {
        console.error("Supabase sign-up error:", error.message);
        return;
      }

      const [profileData, studentData] = await Promise.all([
        supabase
          .from("profile")
          .insert([
            {
              user_id: authData?.user?.id,
              role: "student",
              email: fields?.email,
              fullname: fields?.fullname,
              location: fields?.location,
            },
          ])
          .select()
          .then((res) => res.data),

        supabase
          .from("students")
          .insert([{ fullname: fields?.fullname, user_id: authData?.user?.id }])
          .select()
          .then((res) => res.data),
      ]);

      console.log({ studentData });

      console.log("Sign-up and data insertion successful.");
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      console.log("Sign-up process complete.");
    }
  };

  const handleClick = () => {
    signUpStudent(studentDetail);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsModalOpen(false)}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 flex w-screen items-center justify-center p-4"
        style={{
          background: " rgba(0, 0, 0, 0.2)",
        }}
      >
        <Dialog.Panel className="max-w-2xl w-full min-h-[550px] rounded-lg flex max-h-auto shadow shadow-lg   bg-white">
          <div
            className="w-[35%] "
            style={{
              backgroundImage: "url(assets/header-banner-bg.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Dialog.Title className="text-[1.8rem] font-medium text-white pt-4 px-3 tracking-tighter">
              Sign up as Student
            </Dialog.Title>
          </div>

          <div className=" px-3 pt-4 w-[65%] border border-black">
            <label className="text-sm font-medium"> Full Name</label>
            <Input
              type="text"
              placeholder="Full Name"
              name="fullname"
              onChange={(e) => handleChange(e)}
              value={studentDetail?.fullname}
              className="border border-[#837f76] bg-transparent  focus:outline-none  w-full rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
            />
            <label className="text-sm font-medium"> Email</label>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
              value={studentDetail?.email}
              className="border border-[#837f76] bg-transparent  focus:outline-none   w-full rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
            />
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
              value={studentDetail?.password}
              className="border border-[#837f76] bg-transparent  focus:outline-none  w-full rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
            />
            <label className="text-sm font-medium">Confirm Password</label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => handleChange(e)}
              value={studentDetail?.confirmPassword}
              className="border border-[#837f76] bg-transparent  focus:outline-none   w-full rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
            />
            <label className="text-sm font-medium">Location</label>
            <Input
              type="text"
              name="location"
              placeholder="Location"
              onChange={(e) => handleChange(e)}
              value={studentDetail?.location}
              className="border border-[#837f76] bg-transparent  focus:outline-none   w-full rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
            />

            <div className="w-full">
              <Button
                isPrimary
                className="h-[42px] w-full text-base px-5"
                onClick={handleClick}
              >
                Sign up
              </Button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Signup;
