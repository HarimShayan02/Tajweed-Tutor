/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import Container from "../../Components/Container";
import Button from "../../Elements/Button";
import {
  ArrowRightIcon,
  GitPullRequestArrow,
  Handshake,
  Settings,
  Smartphone,
} from "lucide-react";
import HomeCard from "../../Components/HomeCard";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

const Home = () => {
  const containerRefs = useRef([]);
  const [selected, setSelected] = useState(0);

  const faqItems = [
    {
      title: "Is there a refund policy?",
      description:
        "DreamSeat Enterprise Xperience Partners shall issue a full refund to any member who wishes to cancel their enrolment within 45 days prior to the start of the season. Stadium seat memberships are not refundable after the first home event of the football season. If a patron's seat is damaged or removed, DreamSeat EXP shall replace the item at no cost to the customer. Please contact the customer service hotline (864-626-9676) with any questions regarding the return policy. All sales are final. Refunds and adjustments will be considered on an individual basis.",
    },
    {
      title: "Why Can't I log in?",
      description:
        "If you are unable to log in, please make sure you have created a new account first. This ordering portal is different than the one where you purchase your Texas A&M game tickets.",
    },
    {
      title: "How fast can you expand the team?",
      description:
        "It depends on the number of candidates, their experience, etc. Usually, it takes 2-3 weeks. Our IT Staffing and recruitment services allow you to access our vast database and deep network of existing contacts in various industries and take advantage of our latest recruitment technologies.",
    },
    {
      title:
        "How do you ensure the confidentiality and protection of my intellectual property?",
      description:
        "We have stringent confidentiality agreements and security measures in place to ensure that your intellectual property is fully protected.",
    },
    {
      title: "What is the Discovery Phase?",
      description:
        "The Discovery Phase is an initial period where we gather all the necessary information about your project. This includes understanding your goals, requirements, and any potential challenges.",
    },
  ];

  const HomeData = [
    {
      title: "Web Development",
      icon: <Settings size={30} />,
      description:
        "Unlock the power of the web with our innovative web development services. We build responsive, user-friendly websites that drive engagement and enhance your online presence.",
      learnMoreLink: "/services/web-development",
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={30} />, // Replace with actual icon path or data
      description:
        "Empower your business with custom mobile applications. Our mobile development services create intuitive, high-performance apps for iOS and Android, tailored to your needs and goals.",
      learnMoreLink: "/services/mobile-development",
    },
    {
      title: "IT Consulting and Digital Advisory",
      icon: <GitPullRequestArrow size={30} />, // Replace with actual icon path or data
      description:
        "Transform your business with expert IT consulting and digital advisory. We provide strategic guidance to optimize technology investments and drive digital transformation for sustainable growth.",
      learnMoreLink: "/services/it-consulting",
    },
    {
      title: "Quality Assurance",
      icon: <Handshake size={30} />, // Replace with actual icon path or data
      description:
        "Ensure flawless performance with our quality assurance services. We rigorously test your software to identify and resolve issues, guaranteeing a seamless user experience and optimal functionality.",
      learnMoreLink: "/services/quality-assurance",
    },
    {
      title: "Quality Assurance",
      icon: <Handshake size={30} />, // Replace with actual icon path or data
      description:
        "Ensure flawless performance with our quality assurance services. We rigorously test your software to identify and resolve issues, guaranteeing a seamless user experience and optimal functionality.",
      learnMoreLink: "/services/quality-assurance",
    },
  ];

  const tutors = [
    {
      name: "Ahmad Rufai Okuku",
      rate: "£5 per hour",
      description:
        "I am a graduate of Sharee'ah Law, an Islaamic Caller and a teacher of Qur'aan...",
      location: "NIGERIA",
      reviews: 1,
    },
    {
      name: "Zahida Shaheen",
      rate: "£5 per hour",
      description:
        "I am Pakistan based Arabic instructor with 16 years of experience in hand. I have taug...",
      location: "PAKISTAN",
      reviews: 17,
    },
    {
      name: "Hosain Ahmad Qasimee",
      rate: "£5 per hour",
      description:
        "I'm Hosain Ahmad and I'm a well experienced online Quran tutor. I have...",
      location: "BANGLADESH",
      reviews: 5,
    },
    {
      name: "Abdullah Siraajudeen",
      rate: "£5 per hour",
      description:
        "My name is Abdullah Siraajudeen am from Nigeria i am online Quran teacher i teach...",
      location: "NIGERIA",
      reviews: 14,
    },
    {
      name: "Ayyub Muhammad Salis",
      rate: "£5 per hour",
      description:
        "Assalamu Alaikum warahmatullah, I am Ayyub Muhammad Salis a Hafeez of the...",
      location: "NIGERIA",
      reviews: 3,
    },
    {
      name: "Nikmah Mawadati",
      rate: "£5 per hour",
      description:
        "I'm Indonesian native, but studied Qur'an, Arabic and Islamic course in Azhar...",
      location: "INDONESIA",
      reviews: 0,
    },
  ];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 582,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-full">
      <div
        className="min-h-[700px] h-auto flex items-center relative"
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

        <div className="max-w-[1180px] w-full mx-auto">
          <div className="w-full flex gap-8">
            <div className="w-[40%] flex items-center ">
              <h1 className="text-[42px] uppercase font-bold italic tracking-tight text-white leading-20 text-gray-900 ">
                Learn Quran Online With Tajweed and Tafheem
              </h1>
            </div>

            <div className="w-[60%] ">
              <img
                src="/assets/banner-image.png
              "
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* <div className="bg-white">
          <div className="relative">
            <div className="mx-auto max-w-7xl">
              <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                >
                  <polygon points="0,0 90,0 50,100 0,100" />
                </svg>

                <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <h1 className=" text-3xl font-semibold tracking-tight leading-[24px] text-gray-900 sm:text-5xl">
                      Reach your personal learning goals faster with the best
                      Quran teachers from around the World.
                    </h1>
                    <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Illo laboriosam sunt in. Temporibus alias doloremque
                      deserunt, ad harum cumque magni odio incidunt error nisi
                      dicta provident officiis sed autem nesciunt!
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <Button
                        svgIcon={<ArrowRightIcon className="w-3 h-3" />}
                        isPrimary
                        className="h-[45px] text-base px-6"
                      >
                        Find a Tutor
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                alt=""
                src="/assets/hero-header.jpg"
                className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
              />
            </div>
          </div>
        </div> */}
      </div>
      <div
        className="min-h-[100px] h-auto flex flex-col  justify-center items-center"
        style={{
          backgroundImage: "url(/assets/header-banner-style-bg.png)",
          backgroundSize: "cover",
        }}
      >
        <img
          src="/assets/ayat-image.png
        "
          alt=""
        />
        <p className="font-semibold text-white">
          "The Best amongst you is the one, who learns Quran and teaches it"
        </p>
      </div>

      <div
        className="py-24"
        style={{ backgroundImage: "url(/assets/learn-quran-bg.png)" }}
      >
        <div className="max-w-[1180px] w-full mx-auto">
          <div className="flex flex-col ">
            <h2 className="font-semibold text-black text-[40px] ">
              Learn and Read Quran Online
            </h2>
            <h3 className="font-normal text-[30px] text-[#89474b]">
              with Tajweed at Quran Institute
            </h3>
            <p className="text-base font-semibold italic text-lightBlack mt-2">
              Tranquility and Satisfaction are the pivotal ingredients for a
              healthy and productive mind.
            </p>
            <br />
            <p className="text-base font-medium  text-black max-w-[60%] ">
              Being Muslims, it has been made clear around 1400 years ago, that
              Islamic teachings are the only way to attain mental and physical
              solace.
            </p>
            <br />
            <p className="text-base font-medium text-black max-w-[90%]">
              Today's world is full of turmoil, be it social be it political.
              Parents are busy amassing piles of money for their kids' brilliant
              future. Consequently, they find no time to spend some moments with
              their kids. Also the moral and religious obligation to teach kids
              the fundamentals of Noorani Qaida is on the verge of extinction.
            </p>
          </div>
        </div>
      </div>

      <div
        className="py-24 relative"
        style={{
          backgroundImage: "url(/assets/online-quran-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute right-0 top-0">
          <img
            src="assets/about-us-right-corner-image.png
          "
            alt=""
          />
        </div>
        <div className="absolute left-0 top-0">
          <img
            src="assets/about-us-left-corner-image.png
          "
            alt=""
          />
        </div>
        <div className="max-w-[1180px] w-full mx-auto">
          <div className="flex flex-col ">
            <h2 className="font-bold text-white text-[40px] text-center">
              Online Quran Classes Easy and
            </h2>
            <h3 className="font-normal text-center text-[30px] text-white">
              Interactive Learning
            </h3>

            <div className="grid grid-cols-2 mt-10 gap-6">
              <div className="col-span-1 flex flex-col justify-center">
                <p className="text-white font-medium">
                  The Quran Institute is such a platform, which makes it easy
                  for you to Learn Quran Online. Considering the role of
                  technology, we have decided to exploit various benefits of
                  technology and have introduced Teaching Quran Online on Skype
                  and we have collected the best Online Quran Teachers who are
                  quite proficient in Tajweed Rules.
                </p>
                <br />

                <i className="text-white ">
                  Furthermore, they are also quite fluent in English, Urdu and
                  Arabic.
                </i>
              </div>
              <div className="col-span-1 flex items-center">
                <img
                  src="/assets/interactive-online-quran.png
                "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-20 "
        style={{ backgroundImage: "url(/assets/learn-quran-bg.png)" }}
      >
        <div className="max-w-[1180px] w-full mx-auto">
          <div className="flex flex-col ">
            <h2 className="font-bold text-black text-[40px] text-center">
              How to Learn Quran Online
            </h2>
            <h3 className="font-normal text-center text-[30px] text-[#89474b]">
              A Conundrum Now Solved
            </h3>

            <div className="grid grid-cols-2 mt-10 gap-6">
              <div className="col-span-1 ">
                <img
                  src="assets/how-learn-quran-image.png
                "
                  alt=""
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <i className=" text-black font-medium">
                  Various questions come to mind when we talk about Learning
                  Quran Online. We have already prepared a viable solution to
                  each of your questions. All you need to do is to subscribe for
                  the services you want on our website.
                </i>
                <br />
                <p className="text-black font-medium">
                  After subscription, you will find out how to learn Quran
                  Online and how you are going to manage the daily routine
                  tasks. Our Quran Classes Online, are a dawn of the new age as
                  we have made a candid effort by narrowing the gap between the
                  student and the teacher. Our software based products for Quran
                  Reading and Quran Recitation have been developed with keen
                  interest. There is no need for parents to eke out extra time
                  for their kid's religious upbringing.
                </p>
                <br />
                <p className="text-black font-medium ">
                  Just hand them a tablet with our apps running on them and you
                  will see the change yourself. Keep in mind that there should
                  be a specific time for the kid to use the gadget. Otherwise,
                  kids are most likely to get addicted to such things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        style={{
          background:
            "linear-gradient(255.21deg, rgba(92, 179, 222, 0.2) 0%, rgba(159, 253, 142, 0.2) 98.7%), #fff",
        }}
      >
        <Container>
          <div className="py-20 flex flex-col">
            <h3 className="font-semibold text-[30px] md:text-[50px] font-poppin text-black  relative pl-2 z-10 uppercase">
              <div
                className="w-[34px] h-[34px] md:w-full md:h-full absolute top-0 md:-top-2 -left-2  "
                style={{
                  zIndex: -1,
                }}
              >
                <img src={"/assets/heading-circle.svg"} alt={""} />
              </div>
              High quality personalised Quran tutoring
            </h3>
            <p className=" w-[90%] md:max-w-[450px] font-poppin leading-[22px] text-[13px] sm:text-[15px] text-lightBlack">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              hic commodi, similique eos incidunt rerum voluptate sit pariatur
              quas animi impedit aliquid quasi voluptates ex magni. Consectetur
              id quaerat animi.
            </p>

            <div className="grid grid-cols-3 gap-5 mt-4">
              {HomeData.map((item, index) => (
                <div key={index} className="col-span-1">
                  <HomeCard
                    name={item?.title}
                    description={item?.description}
                    icon={item?.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className=" h-full py-[5rem]">
        <Container>
          <div className="flex flex-col">
            <h3 className="font-semibold text-[30px] md:text-[50px] font-poppin text-black  relative pl-2 z-10 uppercase">
              <div
                className="w-[34px] h-[34px] md:w-full md:h-full absolute top-0 md:-top-2 -left-2  "
                style={{
                  zIndex: -1,
                }}
              >
                <img src={"/assets/heading-circle.svg"} alt={""} />
              </div>
              It’s easy to get started
            </h3>
            <p className=" w-[90%] md:max-w-[450px] font-poppin leading-[22px] text-[13px] sm:text-[15px] text-lightBlack">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              hic commodi, similique eos incidunt rerum voluptate sit pariatur
              quas animi impedit aliquid quasi voluptates ex magni. Consectetur
              id quaerat animi.
            </p>
            <div className="grid grid-cols-2 gap-6 w-full mt-8 py-4">
              <div className="col-span-1 ">
                <div className="">
                  <div className="flex justify-center ">
                    <div className="">
                      <div className="">
                        <div className="w-full ">
                          <ul className="">
                            {faqItems.map((item, index) => (
                              <li
                                key={index}
                                className="relative border mb-2 rounded-lg  border-[#d9d9d9] bg-white"
                              >
                                <button
                                  type="button"
                                  className="w-full px-2 sm:py-4 py-2 text-left"
                                  onClick={() =>
                                    setSelected(
                                      selected !== index + 1 ? index + 1 : 0,
                                    )
                                  }
                                >
                                  <div className="flex items-center justify-between hover:text-secondaryLight w-full ">
                                    <span className="font-poppin text-sm sm:text-base font-medium w-[92%] lg:w-full ">
                                      {item.title}
                                    </span>
                                    <div className="w-[8%] lg:w-auto">
                                      <svg
                                        className={`w-5 h-5 ${
                                          selected === index + 1
                                            ? "transform rotate-180"
                                            : ""
                                        }`}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 30 30"
                                        stroke="currentColor"
                                      >
                                        <path d="M19 9l-7 7-7-7"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </button>
                                <div
                                  className="relative overflow-hidden transition-all max-h-0 duration-700"
                                  style={{
                                    maxHeight:
                                      selected === index + 1 &&
                                      containerRefs.current[index]?.scrollHeight
                                        ? containerRefs.current[index]
                                            .scrollHeight
                                        : "0",
                                  }}
                                  ref={(el) => {
                                    if (
                                      el &&
                                      !containerRefs.current.includes(el)
                                    ) {
                                      containerRefs.current.push(el);
                                    }
                                  }}
                                >
                                  <div className="px-2 pb-6 font-poppin text-[12px] leading-[18px] sm:text-sm sm:leading-[20px] md:text-[15px] md:leading-[24px] lg:text-base font-normal text-black">
                                    <p>{item.description}</p>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1"> Image</div>
            </div>
            <h3 className="font-semibold text-center leading-normal text-[30px] md:text-[50px] font-poppin text-black capitalize relative pl-2 z-10 my-8 ">
              Trusted, experienced and dedicated{" "}
              <span className="text-secondary">Quran tutors</span>
            </h3>
            <div>
              <h3 className="text-center">
                "Verily the most superior amongst you ( Muslims ) are those who
                learn the Quran and teach it."
              </h3>
            </div>
          </div>
        </Container>
      </div> */}

      <div className=" bg-white py-20 relative">
        <div className="absolute right-0 top-0">
          <img
            src="assets/flower-right-corner-image.png
          "
            alt=""
          />
        </div>
        <div className="absolute left-0 top-0">
          <img
            src="assets/flower-left-corner-image.png
          "
            alt=""
          />
        </div>
        <Container>
          <h2 className="font-bold text-black text-[40px] text-center">
            Featured Tutors
          </h2>
          <p className="font-normal text-center text-md text-[#89474b]">
            Reach your personal learning goals faster with expert Quran teachers
            from around the World.
          </p>

          <div className="slider-container">
            <Slider {...settings}>
              {tutors.map((item, index) => (
                <div className="mt-8 pr-4 " key={index}>
                  <div
                    style={{
                      backgroundImage: "url(assets/header-banner-bg.png)",
                      backgroundBlendMode: "multiply",
                      backgroundSize: "cover",
                    }}
                    className={`w-[380px] min-h-[230px] h-full border-2 border-white rounded-[10px] p-[20px] `}
                  >
                    <div className="flex gap-3">
                      <div className="w-14 h-14 rounded-md">
                        <img
                          src="https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
                          alt=""
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-poppin font-medium leading-[22px] text-sm sm:text-base text-lightBlack ">
                          {item?.rate}
                        </h4>
                        <h1 className="text-white font-semibold text-[17px]">
                          {item?.name}
                        </h1>
                      </div>
                    </div>
                    <p className="whitespace-normal text-ellipsis text-white overflow-hidden mt-2 mb-6 line-clamp-2">
                      {item?.description}
                    </p>
                    <div className="flex gap-3">
                      <div className="min-w-[100px] w-auto flex items-center justify-center gap-2 py-1 px-2 rounded-sm bg-lightGray">
                        <CiLocationOn />
                        <h3 className="text-base font-medium">
                          {item?.location}
                        </h3>
                      </div>
                      <div className="min-w-[100px] w-auto flex items-center justify-center gap-2 py-1 px-2 rounded-sm bg-lightGray text-[#f71e3f]">
                        <FaStar />
                        <h3 className="text-base font-medium">
                          {item?.reviews} Review
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>

      <div
        className="pt-20 pb-32"
        style={{ backgroundImage: "url(/assets/learn-quran-bg.png)" }}
      >
        <Container>
          <h2 className="font-bold text-black text-[40px] text-center">
            Online Quran courses we offer
          </h2>
          <h3 className="font-normal text-center text-[26px] text-[#89474b]">
            Quran Courses
          </h3>
          {/* <h3 className="font-semibold text-[30px] md:text-[50px] font-poppin text-black  relative pl-2 z-10 uppercase">
            <div
              className="w-[34px] h-[34px] md:w-full md:h-full absolute top-0 md:-top-2 -left-2  "
              style={{
                zIndex: -1,
              }}
            >
              <img src={"/assets/heading-circle.svg"} alt={""} />
            </div>
            Online Quran courses we offer
          </h3>
          <p className=" w-[90%] md:max-w-[450px] font-poppin leading-[22px] text-[13px] sm:text-[15px] text-lightBlack">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            hic commodi, similique eos incidunt rerum voluptate sit pariatur
            quas animi impedit aliquid quasi voluptates ex magni. Consectetur id
            quaerat animi.
          </p> */}

          <div className="grid grid-cols-3 ">
            {Array(3)
              .fill(3)
              .map((item, index) => (
                <div
                  className="col-span-1 relative flex justify-center"
                  key={index}
                >
                  <div className="cursor-pointer group relative flex flex-col my-6 border border-[#89474b] bg-white shadow rounded-lg w-96  ">
                    <div className="relative h-50 m-2.5 overflow-hidden text-white rounded-md">
                      <img
                        className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110 w-full "
                        src="assets/offer-online-image-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="py-3 px-2 rounded-lg shadow shadow-card bg-white border border-black absolute w-[300px] -bottom-5 ">
                    {/* <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                        Successful Seed Round
                      </h6> */}
                    <p className="text-slate-600 leading-normal text-sm font-medium">
                      We are thrilled to announce the completion of our seed
                      round, securing $2M in investment to fuel product
                      development and market expansion.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </div>

      <div className="py-[5rem]">
        <Container>
          <h3 className="font-bold text-black text-[40px]">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <div className="flex justify-between items-end mt-1 ">
            <p className="max-w-[861px] font-poppin leading-[22px] text-sm sm:text-[15px] text-lightBlack">
              Find out everything you need to know about the terms of
              cooperation with us, our technological expertise, and other
              details that may interest you.
            </p>
          </div>
          <div className="">
            <div className="flex justify-center pt-10">
              <div className="">
                <div className="gap-8 ">
                  <div className="bg-white w-full border-t border-[#d9d9d9]">
                    <ul className="shadow-box">
                      {faqItems.map((item, index) => (
                        <li
                          key={index}
                          className="relative mb-2 rounded-lg border-b border-[#d9d9d9] bg-white"
                        >
                          <button
                            type="button"
                            className="w-full px-2 sm:py-4 py-2 text-left"
                            onClick={() =>
                              setSelected(
                                selected !== index + 1 ? index + 1 : 0,
                              )
                            }
                          >
                            <div className="flex items-center justify-between hover:text-secondaryLight w-full">
                              <span className="font-poppin text-sm sm:text-base font-medium w-[92%] lg:w-full ">
                                {item.title}
                              </span>
                              <div className="w-[8%] lg:w-auto">
                                <svg
                                  className={`w-5 h-5 ${
                                    selected === index + 1
                                      ? "transform rotate-180"
                                      : ""
                                  }`}
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  viewBox="0 0 30 30"
                                  stroke="currentColor"
                                >
                                  <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          <div
                            className="relative overflow-hidden transition-all max-h-0 duration-700"
                            style={{
                              maxHeight:
                                selected === index + 1 &&
                                containerRefs.current[index]?.scrollHeight
                                  ? containerRefs.current[index].scrollHeight
                                  : "0",
                            }}
                            ref={(el) => {
                              if (el && !containerRefs.current.includes(el)) {
                                containerRefs.current.push(el);
                              }
                            }}
                          >
                            <div className="px-2 pb-6 font-poppin text-[12px] leading-[18px] sm:text-sm sm:leading-[20px] md:text-[15px] md:leading-[24px] lg:text-base font-normal text-black">
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
