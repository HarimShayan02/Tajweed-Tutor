/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Input from "../../Elements/Input";
import Container from "../../Components/Container";
import Button from "../../Elements/Button";
import { ArrowRightIcon } from "lucide-react";

const Contact = () => {
  //   const [textInput, setTextInput] = useState<string>("");
  //   const [phoneNumber, setPhoneNumber] = useState<string>("");

  //   const handleTextChange = (value: string) => {
  //     setTextInput(value);
  //   };

  //   const handlePhoneChange = (value: string) => {
  //     console.log(value);
  //     setPhoneNumber(value);
  //   };

  return (
    <div className="h-full ">
      <div
        className="py-28"
        style={{ backgroundImage: "url(/assets/learn-quran-bg.png)" }}
      >
        <Container>
          <div className=" h-full">
            <h3 className="font-poppin font-extrabold text-3xl sm:text-[50px] leading-[40px] sm:leading-[56px] my-5 gap-2 flex">
              <span className="bg-[#924444] rounded-md px-2">Contact </span> Us
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="col-span-1 py-4 flex flex-col gap-4 gap-y-6">
                <Input
                  type="text"
                  placeholder="Your name"
                  // onChange={handleTextChange}
                  // value={textInput}
                  className="border border-black focus:outline-none focus:border focus:border-[#924444] w-full rounded-md py-2 pl-3 text-sm leading-[24px]"
                />
                <Input
                  type="email"
                  placeholder="Your e-mail"
                  className="border border-black  focus:outline-none focus:borderfocus:border-[#924444] w-full rounded-md py-2 pl-3 text-sm leading-[24px]"
                  // onChange={handleTextChange}
                  // value={textInput}
                />
                <Input
                  type="number"
                  placeholder="Enter Phone Number"
                  // onChange={handlePhoneChange}
                  // value={phoneNumber}
                  className="border border-black focus:outline-none focus:border focus:border-[#924444] w-full rounded-md py-2 pl-3 text-sm leading-[24px]"
                />

                <textarea
                  className="border border-black  focus:outline-none focus:border focus:border-[#924444] w-full h-[164px] rounded-md py-2 pl-3 text-sm leading-[24px]"
                  name=""
                  id=""
                  placeholder="Your message"
                />
                <Button
                  svgIcon={<ArrowRightIcon className="w-4 h-4" />}
                  isPrimary
                  className="h-[48px] min-w-[130px] text-base px-5"
                >
                  Send
                </Button>
              </div>

              <div className="col-span-1 py-3">
                <div className="flex flex-col space-y-4">
                  <h3 className="font-semibold font-poppin text-base leading-[18px]">
                    Making Commitments the Right Way
                  </h3>
                  <p className="font-poppin text-lightBlack text-sm leading-[20px] mb-2 sm:mb-0 md:mb-6">
                    Gain first-hand real exposure into our teaching curriculum,
                    meet with our certified tutors, and dive into our community
                    for no cost at all! We cherish your time and want you to
                    decide if Quran Teacher Live is the right place for you. We
                    ensure a complete certification after every course.
                  </p>
                  <h3 className="font-semibold  font-poppin text-base leading-[18px]">
                    Largest Pool of Tutors
                  </h3>
                  <p className="font-poppin text-lightBlack text-sm leading-[20px] mb-2 sm:mb-0 md:mb-6">
                    Register to study the Quran with our colony of expert tutors
                    renowned for their professional teaching practices. Choose a
                    tutor to match your learning goals.
                  </p>
                  <h3 className="font-semibold  font-poppin text-base leading-[18px]">
                    The Perfect Match
                  </h3>
                  <p className="font-poppin text-lightBlack text-sm leading-[20px] mb-2 sm:mb-0 md:mb-6">
                    From background checks, to pupil reviews, pick your perfect
                    tutor to match your learning needs.
                  </p>
                  <h3 className="font-semibold  font-poppin text-base leading-[18px]">
                    Grow Profoundly
                  </h3>
                  <p className="font-poppin text-lightBlack text-sm leading-[20px] mb-2 sm:mb-0 md:mb-6">
                    Keeping track of your learning progress, reach your goals at
                    your pace, and grow as your learning expands with the help
                    of a Quran Tutor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
