import { IconContext } from "react-icons";
import { BsFillCalendarCheckFill } from "react-icons/Bs";
import { FaInstagram, FaTelegramPlane } from "react-icons/Fa";
import { FiAlertTriangle } from "react-icons/Fi";
import { GoLocation, GoNote } from "react-icons/Go";
import bgWebinar from "../assets/bgWebinar3.jpg";
import webinar from "../assets/medpart_sponsor/webinar.jpg";
const Webinar = () => {
  document.body.style.backgroundImage = `url(${bgWebinar})`;
  document.body.style.backgroundSize = "cover";
  return (
    <>
      <div className=" h-max w-screen backdrop-blur-[5px]">
        <div className="max-w-5xl flex items-center h-max lg:h-screen flex-wrap mx-auto md:px-5  md:my-16 sm:my-16 lg:my-16 xl:my-0 xl:py-0 ">
          {/* <!--Main Col--> */}
          <div
            id="profile"
            className="w-full lg:w-[50%]  sm:rounded-l-xl sm:rounded-r-xl md:rounded-r-none sm:bg-[#2b1b7c69] md:bg-[#ffffffdd] sm:backdrop-blur-3xl md:backdrop-blur-none border-dashed sm:border-r-2 md:border-r-0 shadow-3xl border-y-2 border-l-2 sm:mx-3 lg:mx-0"
          >
            <div className="p-4  md:p-6 text-center  lg:text-left">
              {/* <!-- Image for mobile view--> */}
              <div className="block lg:hidden  shadow-xl mx-auto   bg-center">
                <img src={webinar} className="rounded-lg shadow-2xl " />
              </div>
              <h1 className="text-3xl font-bold sm:text-white md:text-black pt-8 lg:pt-0">
                Webinar Pekan IT
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500">
                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                  <IconContext.Provider
                    value={{
                      color: "",
                      size: "22px",
                      className:
                        "text-white sm:hidden md:block md:text-green-700 ",
                    }}
                  >
                    <GoNote className="" />
                  </IconContext.Provider>
                  <span className="ml-2 text-white md:text-green-700 ">
                    Getting Closer with Machine Learning
                  </span>
                </p>
                <p className="pt-2 text-black font-bold text-base flex items-center justify-center lg:justify-start">
                  <IconContext.Provider
                    value={{
                      color: "",
                      size: "22px",
                      className: "text-white md:text-green-700",
                    }}
                  >
                    <GoLocation className="" />
                  </IconContext.Provider>
                  <span className="ml-2 text-white md:text-green-700 ">
                    Zoom Meeting
                  </span>
                </p>
                <p className="pt-2 text-black font-bold text-base flex items-center justify-center lg:justify-start">
                  <IconContext.Provider
                    value={{
                      color: "",
                      size: "20px",
                      className: "text-white md:text-green-700",
                    }}
                  >
                    <BsFillCalendarCheckFill className="" />
                  </IconContext.Provider>
                  <span className="ml-2 text-white md:text-green-700 ">
                    Minggu, 09 Oktober 2022
                  </span>
                </p>
                <div className="sm:hidden md:block">
                  <p className="pt-2 text-black font-bold  text-base flex items-center justify-center lg:justify-start">
                    <IconContext.Provider
                      value={{
                        color: "",
                        size: "22px",
                        className: "text-red-700",
                      }}
                    >
                      <FiAlertTriangle className="" />
                    </IconContext.Provider>
                    <span className="ml-2 text-red-700 ">
                      Peserta Wajib memiliki akun Dicoding
                    </span>
                  </p>
                </div>
                <p className="pt-4 text-sm  text-white md:text-green-700 ">
                  Webinar pada acara Pekan IT kali ini membawakan tema{" "}
                  <span className="italic">
                    "Getting Closer with Machine Learning"
                  </span>
                </p>
              </div>
              <div className="sm:block md:hidden">
                <p className="pt-4 text-black font-bold  text-base flex items-center justify-center lg:justify-start">
                  <span className="ml-2 font-bold text-[#d85656]">
                    Peserta Wajib memiliki akun Dicoding
                  </span>
                </p>
              </div>

              <div className="pt-4 pb-8">
                <a
                  href="https://www.dicoding.com/events/4780"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                    Daftar Sekarang
                  </button>
                </a>
              </div>
              <div className=" pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center gap-8">
                <a
                  className="link"
                  href="https://www.instagram.com/pekanit_unsika/"
                  target="_blank"
                  data-tippy-content="@facebook_handle"
                  rel="noreferrer"
                >
                  <IconContext.Provider
                    value={{
                      color: "",
                      size: "40px",
                      className: "text-pink-600",
                    }}
                  >
                    <FaInstagram
                      style={{ stroke: "text-pink-600", strokeWidth: "20" }}
                    />
                  </IconContext.Provider>
                </a>
                <a
                  className="link "
                  href="https://t.me/+LxZvmT5NOJpmZjll"
                  target="_blank"
                  data-tippy-content="@twitter_handle"
                  rel="noreferrer"
                >
                  <IconContext.Provider
                    value={{
                      color: "",
                      size: "40px",
                      className: "md:text-[#316ba8] sm:text-cyan-600",
                    }}
                  >
                    <FaTelegramPlane
                      style={{ stroke: "md:text-[#316ba8] sm:text-cyan-600" }}
                    />
                  </IconContext.Provider>
                </a>
              </div>
              {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}
            </div>
          </div>

          {/* <!--Img Col--> */}
          <div className="w-full  lg:w-[40%]">
            {/* <!-- Big profile image for side bar (desktop) --> */}
            <img
              src={webinar}
              className="rounded-none my-class my-class lg:rounded-lg shadow-2xl hidden lg:block"
            />
            {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
          </div>

          {/* <!-- Pin to top right corner --> */}
          {/* <div className="absolute top-0 right-0 h-12 w-18 p-4">
            <button className="js-change-theme focus:outline-none">🌙</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Webinar;
