import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Input from "../../Elements/Input";
import Button from "../../Elements/Button";
import supabase from "../../supabase/supabaseClient";
import { useGlobalContext } from "../../hook/Context";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const Signup = ({ isOpen, setIsModalOpen }) => {
  const { login } = useGlobalContext();
  const [isShowPassword, setIsShowPassword] = useState(false);
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
      // Sign up the user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: fields?.email,
        password: fields?.password,
      });

      if (authError) {
        console.error("Supabase sign-up error:", authError.message);
        return;
      }
      // Insert into the profile table
      const { data: profileData, error: profileError } = await supabase
        .from("profile")
        .insert([
          {
            user_id: authData.user.id,
            role: "student",
            email: fields?.email,
            fullname: fields?.fullname,
            location: fields?.location,
          },
        ])
        .select();

      if (profileError) {
        console.error("Profile insertion error:", profileError.message);
        return;
      }

      const { error: studentError } = await supabase
        .from("students")
        .insert([{ fullname: fields?.fullname, user_id: authData.user.id }])
        .select();

      if (studentError) {
        console.error("Student insertion error:", studentError.message);
        return;
      }

      login(profileData[0]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      console.log("Sign-up process complete.");
    }
  };

  // const signUpAdmin = async (fields) => {
  //   try {
  //     // Sign up the user with Supabase Auth
  //     const { data: authData, error: authError } = await supabase.auth.signUp({
  //       email: fields?.email,
  //       password: fields?.password,
  //     });

  //     if (authError) {
  //       console.error("Supabase sign-up error:", authError.message);
  //       setIsModalOpen(false);
  //       return;
  //     }

  //     // Insert into the profile table
  //     const { data: profileData, error: profileError } = await supabase
  //       .from("profile")
  //       .insert([
  //         {
  //           user_id: authData.user.id,
  //           role: "admin",
  //           email: fields?.email,
  //           fullname: fields?.fullname,
  //           location: fields?.location,
  //         },
  //       ])
  //       .select();

  //     if (profileError) {
  //       console.error("Profile insertion error:", profileError.message);
  //       return;
  //     }

  //     login(profileData[0]);
  //     setIsModalOpen(false);
  //   } catch (error) {
  //     console.error("Unexpected error:", error);
  //   } finally {
  //     console.log("Sign-up process complete.");
  //   }
  // };

  const handleClick = () => {
    signUpStudent(studentDetail);
    // signUpAdmin(studentDetail);
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
            <Dialog.Title className="text-[1.8rem] font-medium text-white pt-4 px-3 tracking-wider">
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
            <div className="relative">
              <Input
                type={isShowPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                value={studentDetail?.password}
                className="border border-[#837f76] bg-transparent  focus:outline-none  w-full rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
              />
              <button
                className="absolute top-4 right-0 pr-3"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <IoEyeSharp /> : <FaEyeSlash />}
              </button>
            </div>

            <label className="text-sm font-medium">Confirm Password</label>
            <div className="relative">
              <Input
                type={isShowPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={(e) => handleChange(e)}
                value={studentDetail?.confirmPassword}
                className="border border-[#837f76] bg-transparent  focus:outline-none   w-full rounded-md py-2 pl-3 text-sm leading-[24px] mb-4 mt-1"
              />
              <button
                className="absolute top-4 right-0 pr-3"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <IoEyeSharp /> : <FaEyeSlash />}
              </button>
            </div>

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
