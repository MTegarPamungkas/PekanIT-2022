import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-scroll";
import { AiOutlineHome } from "react-icons/Ai";
import { IconContext } from "react-icons";
import { GoBook } from "react-icons/Go";
import { FaQuestion } from "react-icons/Fa";
import { VscCalendar } from "react-icons/vsc";
import { MdOutlineEmojiEvents } from "react-icons/Md";
import FAQ from "../FAQ";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabbar() {
  const [categories] = useState([
    {
      value: "Beranda",
      label: "Beranda",
      goTo: "hero",
    },
    {
      value: "event",
      label: "event",
      goTo: "event",
    },
    {
      value: "Panduan",
      label: "Panduan",
      goTo: "panduan",
    },
    {
      value: "Jadwal",
      label: "Jadwal",
      goTo: "jadwal",
    },
    // { value: "FAQ", label: "FAQ", goTo: "haha" },
  ]);

  const icons = [AiOutlineHome, MdOutlineEmojiEvents, GoBook, VscCalendar];

  return (
    <div className="w-full px-3 items-stretch z-30 md:hidden fixed bottom-0">
      <Tab.Group defaultIndex={0}>
        <Tab.List
          className={`grid grid-cols-5 rounded-xl  p-3 bg-[#30908e] bg-opacity-20 backdrop-blur-xl`}
        >
          {categories.map((category, idx) => {
            // must be a capitalized name in order for react to treat it as a component
            const Icon = icons[idx];

            return (
              <Link
                key={category.value}
                to={category.goTo}
                duration={800}
                smooth={true}
                offset={-85}
              >
                <Tab
                  key={category.value}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-3 text-sm flex justify-center items-center font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-1 ring-offset-blue-400 focus:outline-none focus:ring-1",
                      selected
                        ? "bg-white/[0.9] shadow "
                        : "text-blue-100  hover:bg-white/[0.12] hover:text-white ",
                    )
                  }
                >
                  <IconContext.Provider
                    value={{
                      color: "#5CCFEE",
                      size: "22px",
                      className: "",
                    }}
                  >
                    <Icon />
                  </IconContext.Provider>
                </Tab>
              </Link>
            );
          })}
          <Tab
            className={`w-full rounded-lg py-3 text-sm flex justify-center items-center font-medium leading-5 text-blue-700 `}
          >
            <IconContext.Provider
              value={{
                color: "#5CCFEE",
                size: "22px",
                className: "",
              }}
            >
              <FAQ obj={<FaQuestion />} />
            </IconContext.Provider>
          </Tab>
          {/* {categories.map((category, idx) => (
            <Link
              key={category.value}
              to={category.goTo}
              duration={800}
              smooth={true}
              offset={-70}
            >
              <Tab
                key={category.value}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm p-5 font-medium leading-5 text-blue-700 transition-all duration-300",
                    "ring-white ring-opacity-60 ring-offset-1 ring-offset-blue-400 focus:outline-none focus:ring-1",
                    selected
                      ? "bg-white/[0.9] shadow"
                      : "text-blue-100  hover:bg-white/[0.12] hover:text-white ",
                  )
                }
              ></Tab>
            </Link>
          ))} */}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
