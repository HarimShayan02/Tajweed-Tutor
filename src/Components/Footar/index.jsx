/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footar = () => {
  return (
    <>
      <div className="h-[150px] bg-white" />
      <div
        style={{
          backgroundImage: "url(assets/header-banner-bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative min-h-[340px] h-auto  flex justify-center "
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
        <div className="max-w-[1180px] w-full mx-auto absolute -top-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow-card2 p-6 rounded-md">
            {/* Left section */}
            <div className="space-y-4">
              <img
                src="/assets/frame-logo.png"
                alt="aQuran Institute"
                className="h-16 object-cover"
              />
              <p className="text-gray-600 text-sm leading-6">
                Tajweed Tutors helps learners master Quranic recitation with
                expert guidance and personalized lessons. Join us to perfect
                your Tajweed from the comfort of your home!
              </p>
              <div className="flex items-center gap-4 text-gray-500">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Middle section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                What you'll Get in Quran Classes
              </h3>
              <ul className="space-y-2 list-disc pl-5">
                <li className="text-sm">Free Trial sessions</li>
                <li className="text-sm">1 to 1 online session</li>
                <li className="text-sm">Your own selected timings</li>
                <li className="text-sm">Learn from your home</li>
                <li className="text-sm">Monthly parent sessions</li>
                <li className="text-sm">English and Urdu Languages</li>
              </ul>
            </div>

            {/* Contact section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Contact Us for Quran Teaching
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-3">
                  <i className="fas fa-envelope text-red-500"></i>
                  <a
                    href="mailto:support@aquraninstitute.com"
                    className="hover:underline"
                  >
                    support@tajweedtutors.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fab fa-skype text-blue-500 "></i>
                  <h3>TajweedTutor.Support</h3>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-phone text-green-500"></i>
                  <h3>+92 343 2199019</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-white text-sm flex items-end mb-10 ">
          &copy; Copyrights 2024, @TajweedTutors. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footar;
