/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import pekanItIcon from "../../assets/pekanIT.png";
import cursor from "../assets/cursor.gif";
import Login from "../Login/Login";
import { Link as LinkUrl } from "react-router-dom";
import { auth, db, storage } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { FaHome } from "react-icons/Fa";
import { FiRefreshCcw } from "react-icons/Fi";
import { IconContext } from "react-icons";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [user, setUser] = useState(0);
  const [colorChange, setColorchange] = useState(false);
  const [email, setEmail] = useState<any | null>(null);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const [categories] = useState([
    { value: "Beranda", label: "Beranda", goTo: "hero" },
    { value: "Event", label: "Event", goTo: "event" },
    { value: "Panduan", label: "Panduan", goTo: "panduan" },
    { value: "Jadwal", label: "Jadwal", goTo: "jadwal" },
  ]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(1);
      setEmail(user.email);
    } else {
      setUser(0);
    }
  });

  // const [scrollPosition, setScrollPosition] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Popover
        className={`${
          colorChange
            ? "bg-[#30908e] bg-opacity-20 backdrop-blur-lg"
            : "bg-transparent"
        } sticky top-0 `}
      >
        <div
          id="header"
          className="max-w-7xl mx-auto py-2 sm:px-6 backdrop-blur-sm"
        >
          <div className="flex justify-between  items-center py-2 md:justify-start md:space-x-10">
            <div className="flex  justify-start lg:w-0 lg:flex-1">
              <div className=" whitespace-nowrap inline-flex items-center justify-center py-2  text-base font-medium text-white ">
                <img
                  className="h-2 w-auto sm:h-6 mb-1"
                  src={pekanItIcon}
                  alt=""
                />
                <span id="nama" className="ml-3 text-xl font-bold">
                  Pekan IT
                </span>
              </div>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 mr-3">
                <span className="sr-only">Open menu</span>
                <LinkUrl to="/pekan-it/">
                  <IconContext.Provider
                    value={{
                      size: "22px",
                      color: "white",
                      className: "",
                    }}
                  >
                    <FaHome />
                  </IconContext.Provider>
                </LinkUrl>
              </Popover.Button>
              {/* <Popover.Button className="inline-flex items-center justify-center p-2 mr-3">
                <span className="sr-only">Open menu</span>
                <IconContext.Provider
                  value={{
                    size: "22px",
                    color: "white",
                    className: "",
                  }}
                >
                  <FiRefreshCcw />
                </IconContext.Provider>
              </Popover.Button> */}
            </div>

            <div className="hidden md:flex  items-center  justify-end md:flex-1 lg:w-0">
              {/* selectedIndex={selectedIndex}  */}
              <Tab.Group defaultIndex={0}>
                <Tab.List
                  className={`${
                    colorChange ? "bg-blue-900/20" : "bg-tranparent"
                  } flex transition-all  space-x-1 rounded-xl  p-1`}
                >
                  {user != 0 ? (
                    <LinkUrl to="/pekan-it/">
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full rounded-lg py-2.5 text-sm p-5 font-medium leading-5 text-white transition-all duration-300",
                            "",
                            selected
                              ? " ring-0 outline-none"
                              : "text-white  hover:bg-white/[0.12] hover:text-white ",
                          )
                        }
                      >
                        Home
                      </Tab>
                    </LinkUrl>
                  ) : (
                    ""
                  )}
                </Tab.List>
              </Tab.Group>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
}
