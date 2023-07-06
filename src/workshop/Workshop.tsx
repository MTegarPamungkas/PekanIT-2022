import { IconContext } from "react-icons";
import { BsFillCalendarCheckFill } from "react-icons/Bs";
import { FaInstagram } from "react-icons/Fa";
import { GoLocation, GoNote } from "react-icons/Go";
import bgWebinar from "../assets/bgWebinar3.jpg";
import WS from "../assets/WS.jpg";
const Workshop = () => {
  document.body.style.backgroundImage = `url(${bgWebinar})`;
  document.body.style.backgroundSize = "cover";
  return (
    <>
      <div className=" h-max w-screen backdrop-blur-[5px]">
        <div className="max-w-5xl flex items-center h-max lg:h-screen flex-wrap mx-auto md:px-5  md:my-16 sm:my-16 lg:my-16 xl:my-0 xl:py-0 ">
          {/* <!--Main Col--> */}
          <div
            id="profile"
            className="w-full lg:w-[50%]  sm:rounded-l-xl sm:rounded-r-xl md:rounded-r-none  sm:bg-[#ffffffdd] sm:backdrop-blur-3xl md:backdrop-blur-none border-dashed sm:border-r-2 md:border-r-0 shadow-3xl border-y-2 border-l-2 sm:mx-3 lg:mx-0"
          >
            <div className="p-4  md:p-6 text-center  lg:text-left">
              {/* <!-- Image for mobile view--> */}
              <div className="block lg:hidden  shadow-xl mx-auto   bg-center">
                <img src={WS} className="rounded-lg shadow-2xl " />
              </div>
              <h1 className="text-3xl font-bold  md:text-black pt-8 lg:pt-0">
                Workshop Pekan IT
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500">
                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                  <IconContext.Provider
                    value={{
                      color: "",
                      size: "22px",
                      className: "x    sm:hidden md:block md:text-green-700 ",
                    }}
                  >
                    <GoNote className="" />
                  </IconContext.Provider>
                  <span className="ml-2 x    md:text-green-700 ">
                    UI/UX Design with Figma
                  </span>
                </p>
                <p className="pt-2 text-black font-bold text-base flex items-center justify-center lg:justify-start">
                  <IconContext.Provider
                    value={{
                      color: "",
                      size: "22px",
                      className: "x    md:text-green-700",
                    }}
                  >
                    <GoLocation className="" />
                  </IconContext.Provider>
                  <span className="ml-2 x    md:text-green-700 ">
                    Mall Technomart Karawang
                  </span>
                </p>
                <p className="pt-2 text-black font-bold text-base flex items-center justify-center lg:justify-start">
                  <IconContext.Provider
                    value={{
                      color: "",
                      size: "20px",
                      className: "x    md:text-green-700",
                    }}
                  >
                    <BsFillCalendarCheckFill className="" />
                  </IconContext.Provider>
                  <span className="ml-2 x    md:text-green-700 ">
                    Rabu, 12 Oktober 2022
                  </span>
                </p>

                <p className="pt-4 text-sm  x    md:text-green-700 ">
                  Workshop pada acara Pekan IT kali ini membawakan tema
                  <span className="italic">"UI/UX Design with Figma"</span>
                </p>
              </div>

              <div className="pt-4 pb-8">
                <a
                  href="https://forms.gle/1h6VCfBpDpNuULXc9"
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
              </div>
              {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}
            </div>
          </div>

          {/* <!--Img Col--> */}
          <div className="w-full  lg:w-[40%]">
            {/* <!-- Big profile image for side bar (desktop) --> */}
            <img
              src={WS}
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

export default Workshop;

// import { IconContext } from "react-icons";
// import { BsFillCalendarCheckFill } from "react-icons/Bs";
// import { FaInstagram, FaWhatsapp } from "react-icons/Fa";
// import { GoLocation, GoNote } from "react-icons/Go";
// import bgWebinar from "../assets/bgWebinar3.jpg";
// import WS from "../assets/WS.jpg";
// const Workshop = () => {
//   document.body.style.backgroundImage = `url(${bgWebinar})`;
//   document.body.style.backgroundSize = "cover";
//   return (
//     <>
//       <div className=" h-max w-screen backdrop-blur-[5px]">
//         <div className="max-w-4xl flex items-center h-max lg:h-screen flex-wrap mx-auto md:px-5  md:my-16 sm:my-16 lg:my-16 xl:my-0 xl:py-0 ">
//           {/* <!--Main Col--> */}
//           <div
//             id="profile"
//             className="w-full lg:w-3/5  sm:rounded-l-xl sm:rounded-r-xl sm:bg-[#2b1b7c69] md:bg-[#ffffffdd]  sm:backdrop-blur-3xl md:backdrop-blur-none border-dashed sm:border-r-2 md:border-r-0 md:rounded-r-none shadow-3xl border-y-2 border-l-2 sm:mx-3 lg:mx-0"
//           >
//             <div className="p-4  md:p-6 text-center  lg:text-left">
//               {/* <!-- Image for mobile view--> */}
//               <div className="block lg:hidden  shadow-xl mx-auto   bg-center">
//                 <img src={WS} className="rounded-lg shadow-2xl " />
//               </div>

//               <h1 className="text-3xl font-bold  md:text-black pt-8 lg:pt-0">
//                 Workshop Pekan IT
//               </h1>
//               <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500">
//                 <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
//                   <IconContext.Provider
//                     value={{
//                       color: "",
//                       size: "22px",
//                       className:
//                         "x    sm:hidden md:block md:text-green-700 ",
//                     }}
//                   >
//                     <GoNote className="" />
//                   </IconContext.Provider>
//                   <span className="ml-2 x     md:text-green-700 ">
//                     Basic Python Programming & Data Science
//                   </span>
//                 </p>
//                 <p className="pt-2 font-bold text-base flex items-center justify-center lg:justify-start">
//                   <IconContext.Provider
//                     value={{
//                       color: "",
//                       size: "22px",
//                       className: "x     md:text-green-700",
//                     }}
//                   >
//                     <GoLocation className="" />
//                   </IconContext.Provider>
//                   <span className="ml-2 x     md:text-green-700 ">
//                     Aula Unsika
//                   </span>
//                 </p>
//                 <p className="pt-2 text-black font-bold text-base flex items-center justify-center lg:justify-start">
//                   <IconContext.Provider
//                     value={{
//                       color: "",
//                       size: "20px",
//                       className: "x     md:text-green-700",
//                     }}
//                   >
//                     <BsFillCalendarCheckFill className="" />
//                   </IconContext.Provider>
//                   <span className="ml-2 x     md:text-green-700 ">
//                     Rabu, 12 Oktober 2022
//                   </span>
//                 </p>
//                 <p className="pt-8 text-sm x    font-  md:text-green-700 ">
//                   Webinar pada acara Pekan IT kali ini membawakan tema{" "}
//                   <span className="italic">
//                     "Basic Python Programming & Data Science"
//                   </span>
//                 </p>
//               </div>

//               <div className="pt-12 pb-8">
//                 <a
//                   href="https://forms.gle/1h6VCfBpDpNuULXc9"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <button className="bg-green-700 hover:bg-green-900 x    font-bold py-2 px-4 rounded-full">
//                     Daftar Sekarang
//                   </button>
//                 </a>
//               </div>

//               <div className="mt-3 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center gap-8">
//                 <a
//                   className="link"
//                   href="#"
//                   data-tippy-content="@facebook_handle"
//                 >
//                   <IconContext.Provider
//                     value={{
//                       color: "",
//                       size: "40px",
//                       className: "text-pink-600",
//                     }}
//                   >
//                     <a
//                       href="https://www.instagram.com/pekanit_unsika/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <FaInstagram
//                         style={{ stroke: "text-pink-600", strokeWidth: "20" }}
//                       />
//                     </a>
//                   </IconContext.Provider>
//                 </a>
//                 <a
//                   className="link "
//                   href="#"
//                   data-tippy-content="@twitter_handle"
//                 >
//                   <IconContext.Provider
//                     value={{
//                       color: "",
//                       size: "40px",
//                       className: "text-green-700",
//                     }}
//                   >
//                     <FaWhatsapp
//                       style={{ stroke: "text-green-700", strokeWidth: "20" }}
//                     />
//                   </IconContext.Provider>
//                 </a>
//               </div>

//               {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}
//             </div>
//           </div>

//           {/* <!--Img Col--> */}
//           <div className="w-full lg:w-2/5">
//             {/* <!-- Big profile image for side bar (desktop) --> */}
//             <img
//               src={WS}
//               className="rounded-none lg:rounded-lg shadow-2xl max-h-[95vh]  hidden lg:block"
//             />
//             {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
//           </div>

//           {/* <!-- Pin to top right corner --> */}
//           <div className="absolute top-0 right-0 h-12 w-18 p-4">
//             <button className="js-change-theme focus:outline-none">🌙</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Workshop;
