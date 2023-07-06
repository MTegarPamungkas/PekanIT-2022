/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Fragment, useState } from "react";
import { storage } from "../../firebase";
import PendaftaranDataService from "../../service/pendaftaran.service";

const UploadKarya = (props) => {
  //login
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  function openModal() {
    if (props.disetujui == false) {
      setIsOpen2(true);
    } else {
      setIsOpen(true);
    }
  }

  const [karya, setKarya] = useState<File | null>();
  const [karyaUrl, setKaryaUrl] = useState("");
  const [percent, setPercent] = useState(0);
  const sendimg = (e) => {
    setKarya(e.target.files);
    setKaryaUrl("");
    setPercent(0);
    const fileName = e.target.files[0].name;
    const extension = fileName.split(".").pop();
    const isSupportedPng = ["png"].includes(extension);
    const isSupportedJpg = ["jpg"].includes(extension);
    const isSupportedZip = ["zip"].includes(extension);
    const isSupportedRar = ["rar"].includes(extension);
    const isSupportedPdf = ["pdf"].includes(extension);

    if (
      !isSupportedPng &&
      !isSupportedJpg &&
      !isSupportedZip &&
      !isSupportedRar &&
      !isSupportedPdf
    ) {
      alert("file tidak disupport");
    } else {
      const storageRef = ref(
        storage,
        `/Karya/${Math.random()}${e.target.files?.[0].name}`,
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
            setKaryaUrl(url);
          });
        },
      );
    }
  };
  const send = async (e) => {
    e.preventDefault();

    if (!karya || percent != 100 || karyaUrl == "") {
      alert("Harap Melengkapi Formulir");
    } else {
      const updatePendaftaran = {
        code_karya: 1,
        karya: karyaUrl,
      };

      try {
        await PendaftaranDataService.updatePendaftaran(
          props.idDoc,
          updatePendaftaran,
        ).then(() => {
          setKaryaUrl("");
          closeModal();
          window.location.reload();
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        // disabled={props.disetujui}
        className={`text-lg text-blue-500 mx-3 ${props.classnameBtn}`}
      >
        {props.status}
      </button>

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
                    Upload Karya {props.data}
                  </Dialog.Title>
                  <form onSubmit={send}>
                    <div className="mt-2">
                      <div>
                        <div className=" flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
                              {karya != null ? karya?.[0].name : "File Empety"}
                            </span>
                            <br />
                            {percent + "% "}{" "}
                            {karyaUrl == "" ? (
                              <span className="text-red-800">Waiting</span>
                            ) : (
                              <span className="text-green-800">Success</span>
                            )}
                            <div className="flex text-sm text-center text-gray-600">
                              <label
                                htmlFor="karya"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  // disabled
                                  id="karya"
                                  name="karya"
                                  type="file"
                                  onChange={sendimg}
                                  accept=".zip,.rar,.png,.jpg,.pdf"
                                  className="sr-only"
                                />
                              </label>

                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, ZIP, RAR, PDF
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-end">
                      <button
                        type="button"
                        className="inline-flex mx-2 justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Simpan
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

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
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Informasi
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Pendaftaran kamu masih dalam tahap verifikasi
                    </p>
                  </div>
                  <div className="mt-4 text-end">
                    <button
                      type="button"
                      className="inline-flex mx-2 justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
};

export default UploadKarya;
