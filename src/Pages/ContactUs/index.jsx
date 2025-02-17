import React from "react";
import Input from "../../Elements/Input";
import Container from "../../Components/Container";
import Button from "../../Elements/Button";
import { ArrowRightIcon } from "lucide-react";

const Contact = () => {
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
                  className="border bg-transparent border-black focus:outline-none focus:border focus:border-[#924444] w-full rounded-md py-2 pl-3 text-sm leading-[24px]"
                />
                <Input
                  type="email"
                  placeholder="Your e-mail"
                  className="border bg-transparent border-black  focus:outline-none focus:borderfocus:border-[#924444] w-full rounded-md py-2 pl-3 text-sm leading-[24px]"
                />
                <Input
                  type="number"
                  placeholder="Enter Phone Number"
                  className="border bg-transparent border-black focus:outline-none focus:border focus:border-[#924444] w-full rounded-md py-2 pl-3 text-sm leading-[24px]"
                />

                <textarea
                  className="border bg-transparent border-black  focus:outline-none focus:border focus:border-[#924444] w-full h-[164px] rounded-md py-2 pl-3 text-sm leading-[24px]"
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
                    Commitment to Quality Learning
                  </h3>
                  <p className="font-poppin text-lightBlack text-sm leading-[20px] mb-2 sm:mb-0 md:mb-6">
                    Experience our teaching curriculum firsthand, connect with
                    our certified Tajweed tutors, and become part of our
                    learning community all at no cost! We value your time and
                    want you to feel confident that Tajweed Tutors is the right
                    place for your Quranic journey. Upon completing a course,
                    you’ll receive a certification of achievement.
                  </p>
                  <h3 className="font-semibold  font-poppin text-base leading-[18px]">
                    Connect with Expert Tutors
                  </h3>
                  <p className="font-poppin text-lightBlack text-sm leading-[20px] mb-2 sm:mb-0 md:mb-6">
                    Register today and learn the Quran with our highly qualified
                    Tajweed instructors, recognized for their expertise and
                    effective teaching methods.
                  </p>
                  <h3 className="font-semibold  font-poppin text-base leading-[18px]">
                    Find Your Perfect Tutor
                  </h3>
                  <p className="font-poppin text-lightBlack text-sm leading-[20px] mb-2 sm:mb-0 md:mb-6">
                    Browse through our verified tutors, check student reviews,
                    and choose the one that best fits your learning goals.
                  </p>
                  <h3 className="font-semibold  font-poppin text-base leading-[18px]">
                    Track Your Progress & Excel
                  </h3>
                  <p className="font-poppin text-lightBlack text-sm leading-[20px] mb-2 sm:mb-0 md:mb-6">
                    With personalized lessons and regular feedback, achieve your
                    learning milestones at your own pace. Grow spiritually and
                    master Tajweed with the right guidance.
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
