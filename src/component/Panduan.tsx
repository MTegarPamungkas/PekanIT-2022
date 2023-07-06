import { AiOutlineExclamationCircle } from "react-icons/Ai";
import BPC from "../assets/BPC.jpg";
import CS from "../assets/CS.jpg";
import DM from "../assets/DM.jpg";
import SD from "../assets/SD.jpg";
import UI from "../assets/UI.jpg";
import AlertBPC from "./Alert/AlertBPC";
import AlertCS from "./Alert/AlertCS";
import AlertLCC from "./Alert/AlertDM";
import AlertSD from "./Alert/AlertSD";
import AlertUI from "./Alert/AlertUI";

import { Dialog, Transition } from "@headlessui/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Fragment, useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { auth, storage } from "../firebase";
import PendaftaranDataService from "../service/pendaftaran.service.js";

const perlombaan = [
  {
    nama: "Cyber Security",
    harga: "Rp30.000",
    daftar: "Senin-Selasa",
    panduan: "8:00 am to 5:00 pm",
  },
  {
    nama: "Software Development",
    harga: "Rp30.000",
    daftar: "Senin-Selasa",
    panduan: "8:00 am to 5:00 pm",
  },
  {
    nama: "UI / UX",
    harga: "Rp30.000",
    daftar: "Senin-Selasa",
    panduan: "8:00 am to 5:00 pm",
  },
  {
    nama: "Data Mining",
    harga: "Rp30.000",
    daftar: "Senin-Selasa",
    panduan: "8:00 am to 5:00 pm",
  },
  {
    nama: "Business Plan Competition",
    harga: "Rp30.000",
    daftar: "Senin-Selasa",
    panduan: "8:00 am to 5:00 pm",
  },
];

const background = [CS, SD, UI, DM, BPC];
const alertPanduan = [AlertCS, AlertSD, AlertUI, AlertLCC, AlertBPC];

export default function Panduan() {
  //lomba
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [lomba, setLomba] = useState("");
  const [Ilomba, setILomba] = useState(0);
  const cancelButtonRef = useRef(null);

  //daftar
  const [email, setEmail] = useState("");
  const [asal_univ, setAsal_univ] = useState("");
  const [ketua_team, setKetua_team] = useState("");
  const [NoWhatsapp, setNomorWhatsapp] = useState("");
  const [anggota1, setAnggota1] = useState("");
  const [anggota2, setAnggota2] = useState("");
  const [anggota3, setAnggota3] = useState("");
  const [team, setTeam] = useState("");
  const [fileKTM, setFileKTM] = useState<File | null>();
  const [fileKTMUrl, setFileKTMUrl] = useState("");
  const [fileBukti, setFileBukti] = useState<File | null>();
  const [fileBuktiUrl, setFileBuktiUrl] = useState("");
  const [percent, setPercent] = useState(0);
  const [percent2, setPercent2] = useState(0);
  // const [email, setEmail] = useState("");

  //login
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  function openModal2() {
    setIsOpen2(true);
  }

  function onClosePendaftaran() {
    setFileKTM(null);
    setOpen(false);
  }

  const sendimg = (e) => {
    setFileKTM(e.target.files);
    setFileKTMUrl("");
    setPercent(0);

    const fileName = e.target.files[0].name;
    const extension = fileName.split(".").pop();
    const isSupportedPng = ["png"].includes(extension);
    const isSupportedJpg = ["jpg"].includes(extension);
    const isSupportedZip = ["zip"].includes(extension);
    const isSupportedRar = ["rar"].includes(extension);

    if (
      !isSupportedPng &&
      !isSupportedJpg &&
      !isSupportedZip &&
      !isSupportedRar
    ) {
      alert("file tidak disupport");
    } else {
      const storageRef = ref(
        storage,
        `/KTM/${e.target.files?.[0].name}${Math.random()}`,
      );
      const uploadTask = uploadBytesResumable(storageRef, e.target.files?.[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );

          // update progress
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            // download url
            setFileKTMUrl(url);
          });
        },
      );
    }
  };
  const sendimg2 = (e) => {
    setFileBukti(e.target.files);
    setFileBuktiUrl("");
    setPercent2(0);
    const fileName = e.target.files[0].name;
    const extension = fileName.split(".").pop();
    const isSupportedPng = ["png"].includes(extension);
    const isSupportedJpg = ["jpg"].includes(extension);
    const isSupportedZip = ["zip"].includes(extension);
    const isSupportedRar = ["rar"].includes(extension);

    if (
      !isSupportedPng &&
      !isSupportedJpg &&
      !isSupportedZip &&
      !isSupportedRar
    ) {
      alert("file tidak disupport");
    } else {
      const storageRef = ref(
        storage,
        `/Bukti/${e.target.files?.[0].name}${Math.random()}`,
      );
      const uploadTask = uploadBytesResumable(storageRef, e.target.files?.[0]);
      uploadTask.on(
        "state_changed",

        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );
          // update progress
          setPercent2(percent);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            // download url
            setFileBuktiUrl(url);
          });
        },
      );
    }
  };
  const send = async (e) => {
    e.preventDefault();

    if (
      !fileKTM ||
      !fileBukti ||
      !email ||
      !asal_univ ||
      !ketua_team ||
      !NoWhatsapp ||
      !anggota1 ||
      percent != 100 ||
      percent2 != 100 ||
      fileBuktiUrl == "" ||
      fileKTMUrl == ""
    ) {
      alert("Harap Lengkapi Formulir");
    } else {
      const newPendaftaran = {
        email: email,
        asal_univ: asal_univ,
        ketua_team: ketua_team,
        noWhatsapp: NoWhatsapp,
        team: team,
        lomba: lomba,
        email_login: user,
        KTM: fileKTMUrl,
        anggota1: anggota1,
        anggota2: anggota2,
        anggota3: anggota3,
        bukti_pembayaran: fileBuktiUrl,
        status: "Pending",
        code_status: 0,
        code_karya: 0,
      };

      try {
        await PendaftaranDataService.addPendaftaran(newPendaftaran);
        alert("Berhasil Mendaftar");
        setPercent(0);
        setPercent2(0);
        setFileKTM(null);
        setFileBukti(null);
        setFileBuktiUrl("");
        setFileKTMUrl("");
        setOpen(false);
      } catch (err) {
        // console.log(err);
      }
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        setUser(user.email);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <div
        id="panduan"
        className="grid pb-12 content-center px-4  md:justify-center"
      >
        <p className="text-center text-3xl text-white mb-2 mt-8">
          Panduan dan Pendaftaran IT Competition
        </p>
        <p className="text-center text-xl font-bold text-red-400 mb-8 mt-2">
          Mohon Maaf Pendaftaran Pekan IT Competition Sudah ditutup.
        </p>
        <div className="grid xl:grid-cols-3 justify-center content-center max-w-5xl sm:grid-cols-1 gap-5">
          {perlombaan.map((perlombaan, id) => {
            const Gambar = background[id];
            return (
              <div
                key={id}
                style={{ backgroundImage: `url(${Gambar})` }}
                className="w-full min-w-full rounded-lg content-center"
              >
                <div className="flex place-content-end ">
                  <IconContext.Provider
                    value={{
                      color: "#fff",
                      size: "48px",
                      className: "cursor-pointer",
                    }}
                  >
                    <AiOutlineExclamationCircle
                      onClick={alertPanduan[id]}
                      style={{ stroke: "text-[#07f898]", strokeWidth: "60" }}
                      title={`Panduan ${perlombaan.nama}`}
                      className="p-2"
                    />
                  </IconContext.Provider>
                </div>
                <div className=" pt-[9.5rem]">
                  <div className="px-96"></div>
                  <div className="px-5 py-4 bg-[#198d98] backdrop-blur-sm bg-opacity-60 rounded-b-lg rounded-t-xl">
                    <h5 className="text-xl font-semibold tracking-tight text-white dark:text-white">
                      {perlombaan.nama}
                    </h5>

                    <div className="flex justify-between items-center mt-3">
                      <span className="text-3xl font-medium text-white dark:text-white">
                        {perlombaan.harga}
                      </span>
                      <button
                        onClick={() => {
                          openModal2();
                          // if (!user) {
                          //   openModal();
                          //   // return alert("aa");
                          //   // console.log("Kamu Belum Login");
                          //   // setOpen(true);
                          //   // setLomba(perlombaan.nama);
                          //   // setILomba(id);
                          // } else {
                          //   setOpen(true);
                          //   setLomba(perlombaan.nama);
                          //   setILomba(id);
                          // }
                        }}
                        className="text-white font-bold bg-[#ffffff33] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Daftar
                      </button>
                    </div>
                    {/* <div className="py-4">
                      <a
                        href="#"
                        className="text-white w-full bg-[#ffffff33] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Daftar
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={() => null}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 px-2 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full">
                  <form onSubmit={send}>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <AiOutlinePlusCircle
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div> */}
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-lg leading-6 font-medium text-[#047033]"
                          >
                            Daftar Perlombaan {lomba}
                          </Dialog.Title>
                          <div className="mt-2">
                            <div>
                              <div className="md:grid md:grid-cols-1 md:gap-6">
                                <div className="mt-5 md:mt-0 md:col-span-2">
                                  <form action="#" method="POST">
                                    <div className="shadow max-w-2xl sm:rounded-md sm:overflow-hidden">
                                      <div className="px-4 py-5 bg-white space-y-6 sm:p-4">
                                        <div className="col-span-6 sm:col-span-4">
                                          <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            Email address
                                          </label>
                                          <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) =>
                                              setEmail(e.target.value)
                                            }
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                          <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            Asal Universitas/Institut
                                          </label>
                                          <input
                                            type="text"
                                            value={asal_univ}
                                            onChange={(e) =>
                                              setAsal_univ(e.target.value)
                                            }
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                          <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            Nama Team
                                          </label>
                                          <input
                                            type="text"
                                            value={team}
                                            onChange={(e) =>
                                              setTeam(e.target.value)
                                            }
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                          <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            Nomor Whatsapp
                                          </label>
                                          <input
                                            type="text"
                                            value={NoWhatsapp}
                                            onChange={(e) =>
                                              setNomorWhatsapp(e.target.value)
                                            }
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                          <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            Ketua Team
                                          </label>
                                          <input
                                            type="text"
                                            value={ketua_team}
                                            onChange={(e) =>
                                              setKetua_team(e.target.value)
                                            }
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                          <label
                                            htmlFor="anggota1"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            Anggota 1
                                          </label>
                                          <input
                                            type="text"
                                            value={anggota1}
                                            onChange={(e) =>
                                              setAnggota1(e.target.value)
                                            }
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                          <label
                                            htmlFor="anggota1"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            Anggota 2
                                          </label>
                                          <input
                                            type="text"
                                            value={anggota2}
                                            onChange={(e) =>
                                              setAnggota2(e.target.value)
                                            }
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                          <label
                                            htmlFor="anggota1"
                                            className="block text-sm font-medium text-gray-700"
                                          >
                                            Anggota 3
                                          </label>
                                          <input
                                            type="text"
                                            value={anggota3}
                                            onChange={(e) =>
                                              setAnggota3(e.target.value)
                                            }
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                          />
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700">
                                            Kartu Tanda Mahasiswa / KRS Terakhir
                                            / Surat Keterangan Mahasiswa Aktif
                                            (jika anggota lebih dari 1 file
                                            berbentuk .ZIP)
                                          </label>
                                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                              <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                  strokeWidth={2}
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                />
                                              </svg>
                                              <span>
                                                {fileKTM != null
                                                  ? fileKTM?.[0].name
                                                  : "File Empety"}
                                              </span>
                                              <br />
                                              {percent + "% "}{" "}
                                              {fileKTMUrl == "" ? (
                                                <span className="text-red-800">
                                                  Waiting
                                                </span>
                                              ) : (
                                                <span className="text-green-800">
                                                  Success
                                                </span>
                                              )}
                                              <div className="flex text-sm text-gray-600">
                                                <label
                                                  htmlFor="ktm"
                                                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                >
                                                  <span>Upload a file</span>
                                                  <input
                                                    id="ktm"
                                                    name="ktm"
                                                    accept=".zip,.rar,.png,.jpg"
                                                    type="file"
                                                    onChange={sendimg}
                                                    className="sr-only"
                                                  />
                                                </label>

                                                <p className="pl-1">
                                                  or drag and drop
                                                </p>
                                              </div>
                                              <p className="text-xs text-gray-500">
                                                PNG, JPG, ZIP, RAR
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-gray-700">
                                            Bukti Transfer
                                          </label>
                                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                              <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                  strokeWidth={2}
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                />
                                              </svg>
                                              <span>
                                                {fileBukti
                                                  ? fileBukti?.[0].name
                                                  : "File Empety"}
                                              </span>
                                              <br />
                                              {percent2 + "% "}
                                              {fileBuktiUrl == "" ? (
                                                <span className="text-red-800">
                                                  Waiting
                                                </span>
                                              ) : (
                                                <span className="text-green-800">
                                                  Success
                                                </span>
                                              )}
                                              <div className="flex text-sm text-gray-600">
                                                <label
                                                  htmlFor="bukti"
                                                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                >
                                                  <span>Upload a file</span>
                                                  <input
                                                    id="bukti"
                                                    name="bukti"
                                                    type="file"
                                                    accept=".zip,.rar,.png,.jpg"
                                                    onChange={sendimg2}
                                                    className="sr-only"
                                                  />
                                                </label>

                                                <p className="pl-1">
                                                  or drag and drop
                                                </p>
                                              </div>
                                              <p className="text-xs text-gray-500">
                                                PNG, JPG, ZIP, RAR
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Daftar
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={onClosePendaftaran}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* login alert */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-6 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Informasi
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Sebelum mendaftar perlombaan kamu diwajibkan untuk login
                      dulu ya!
                    </p>
                  </div>

                  <div className="mt-4 text-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* close alert */}
      <Transition appear show={isOpen2} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal2}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-6 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-red-900"
                  >
                    Opps, Pendaftaran Pekan IT Competition Sudah Ditutup😥.
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Jangan khawatir teman-teman, Event Pekan IT Competition
                      akan hadir kembali ditahun 2023 😍😍
                    </p>
                  </div>

                  <div className="mt-4 text-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal2}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
