/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

const FAQ = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button onClick={openModal} className="text-white">
        {props.obj}
      </button>
      <Transition appear={false} show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed  inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex max-w-screen-2xl p-5  items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
                  <section className="bg-white dark:bg-gray-900">
                    <div
                      id="topModal"
                      className="py-8 px-4 max-w-screen-xl sm:py-4 lg:px-6"
                    >
                      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Frequently asked questions
                      </h2>
                      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        <div>
                          <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg
                                className="flex-shrink-0 sm:hidden md:block mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              Berapa lama proses verifikasi bukti pembayaran?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                              Proses pengecekan dan verifikasi paling lama
                              maksimal 3*24 jam
                            </p>
                          </div>
                          <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg
                                className="flex-shrink-0 sm:hidden md:block mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              Status transaksi pembayaran?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                              <span className="text-red-600">Pending</span>:
                              Belum diperiksa <br />
                              <span className="text-green-600">Completed</span>:
                              Sudah diperiksa dan diverifikasi kebenarannya
                            </p>
                          </div>
                          <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg
                                className="flex-shrink-0 sm:hidden md:block mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              Bagaimana cara upload karya?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                              1. Pastikan sudah login pada halaman
                              https://himtika.cs.unsika.ac.id/pekan-it <br />
                              2. Pilih menu Dashboard <br />
                              3. Upload karya
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg
                                className="flex-shrink-0 sm:hidden md:block mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              Bagaimana cara mengikuti perlombaan?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                              1. Pastikan sudah login pada halaman
                              https://himtika.cs.unsika.ac.id/pekan-it <br />
                              2. Pilih daftar pada menu perlombaan <br />
                              3. Lengkapi formulir yang sudah disediakan <br />
                              4. Lengkapi juga bukti KTM dan bukti pembayaran
                            </p>
                          </div>
                          <div className="mb-10">
                            <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                              <svg
                                className="flex-shrink-0 sm:hidden md:block mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              Jika mengalami kendala apa yang harus dilakukan?
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                              Jika mengalami kendala silahkan untuk menghubungi
                              salah satu contact person dibawah ini:
                              <br />
                              085871262080 (Wanda) <br />
                              082111511400 (Sophia)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <div className="mt-4 flex text-end items-end content-end justify-end ">
                    <button
                      type="button"
                      className="rounded-md border border-transparent bg-blue-300  px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
    </>
  );
};

export default FAQ;
