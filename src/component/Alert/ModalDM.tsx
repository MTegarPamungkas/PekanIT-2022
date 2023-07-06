import { useEffect } from "react";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/Fi";

// eslint-disable-next-line react/prop-types
export default function Modal({ destroy }) {
  useEffect(() => {
    return () => {
      destroy();
    };
  }, [destroy]);

  return (
    <div>
      <div
        id="top-left-modal"
        data-modal-placement="top-left"
        tabIndex={-1}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full"
      >
        <div className="relative w-full  h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-[#f1eeee]   shadow">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center p-5 rounded-t border-b">
              <h3 className="text-xl font-bold text-black ">Data Mining</h3>
              <button
                type="button"
                onClick={destroy}
                className="text-black bg-transparent hover:bg-gray-200 hover:text-black rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="top-left-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="px-6 py-3">
              <p className="font-medium text-[#2428a5] pb-3">
                <a
                  href="https://bit.ly/GuidebookPekanIT2022"
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  Link Guidebook Perlombaan{" "}
                  <IconContext.Provider
                    value={{
                      color: "#2428a5",
                      size: "22px",
                      className: "inline-block",
                    }}
                  >
                    <FiExternalLink />
                  </IconContext.Provider>
                </a>
              </p>
              <p className="font-bold">Deskripsi Lomba </p>
              <p className="text-base text-justify leading-relaxed text-black">
                Data mining adalah proses memilah-milah kumpulan data besar
                untuk mengidentifikasi pola dan hubungan yang dapat membantu
                memecahkan suatu permasalahan melalui analisis data. Teknik dan
                alat penambangan data yang dilakukan memungkinkan untuk membuat
                keputusan yang lebih tepat.
                <div className="mt-1">
                  Pada perlombaan Data Mining Pekan IT ini diharapkan para
                  peserta mampu melakukan proses penambangan data terhadap data
                  yang telah tersedia secara publik yang sudah terverifikasi dan
                  tervalidasi kelayakannya. Selanjutnya para peserta
                  memvisualisasikan hasil dari penambangan data yang telah
                  dilakukan sehingga hasil tersebut berguna untuk masyarakat
                  luas.
                </div>
              </p>

              <p className="text-base text-justify mt-3 leading-relaxed text-black">
                <span className="font-bold">Ketentuan Peserta</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>1. &nbsp;</div>Peserta perlombaan Data Mining Pekan IT
                  2022 dapat terdiri dari 2-3 orang.
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>2. &nbsp;</div>
                  <div>
                    Peserta yang mengikuti perlombaan Data Mining Pekan IT 2022
                    merupakan kalangan Mahasiswa/Umum.
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>a. &nbsp;</div>Bagi peserta yang merupakan mahasiswa
                      aktif (D3/D4/S1) dapat melampirkan softcopy kartu
                      mahasiswa atau surat keterangan aktif mahasiswa.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>b. &nbsp;</div>Bagi kalangan masyarakat umum dapat
                      melampirkan softcopy Kartu Tanda Penduduk (KTP).
                    </div>
                  </div>
                </div>

                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>3. &nbsp;</div>Peserta lomba telah terdaftar sebagai
                  peserta lomba Data Mining Pekan IT 2022.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>4. &nbsp;</div>Peserta lomba telah melunasi biaya
                  pendaftaran Rp. 30.000,- sesuai dengan prosedur pada Mekanisme
                  Pendaftaran.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>5. &nbsp;</div>Peserta lomba diwajibkan untuk mengikuti
                  akun sosial media Pekan IT (@pekanit_unsika) dan akun sosial
                  media Himtika (@himtika_unsika).
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>6. &nbsp;</div>Peserta lomba diwajibkan untuk mengikuti
                  technical meeting yang diadakan oleh panitia Pekan IT.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>7. &nbsp;</div>Ketentuan Peserta dapat berubah
                  sewaktu-waktu tanpa pemberitahuan kepada peserta oleh Panitia
                  Pekan IT.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>8. &nbsp;</div>Peserta yang melanggar atau tidak memenuhi
                  ketentuan dapat didiskualifikasi oleh pihak terkait.
                </div>
              </p>

              <p className="font-bold mt-4">Mekanisme Perlombaan </p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">1. Babak Penyisihan</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  Pengumpulan makalah hasil penambangan data dengan tema bebas
                  dan dengan contoh studi kasus yang ada di Indonesia, file
                  makalah yang dikumpulkan berupa file pdf dengan format file:
                  PekanIT_Judul Studi Kasus Data Mining_Nama Tim.pdf.
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  <div>
                    Makalah disajikan dengan beberapa poin sebagai berikut:
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Makalah merupakan karya orisinil
                      dari studi kasus yang ada di Indonesia dan belum pernah
                      dilombakan maupun dipublikasikan.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Makalah tidak mengandung unsur
                      yang bersifat melanggar, menghina, dan menyinggung SARA
                      (Suku, Agama, Ras, dan Antar Golongan).
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Data dipastikan bersifat terbuka
                      untuk publik dan boleh digunakan untuk perlombaan.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Peserta diperbolehkan menggunakan
                      GPU (Graphical Processing Unit) untuk melakukan komputasi
                      algoritmanya dan menggunakan tools, library, atau
                      framework apa saja.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Peserta wajib menyertakan sumber
                      asli maupun sumber inspirasi yang dirujuk jika solusi
                      algoritma yang dicantumkan telah dimodifikasi dari
                      algoritma yang telah ada sebelumnya.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Jumlah maksimal keseluruhan
                      halaman makalah adalah 30 halaman.
                    </div>
                  </div>
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Format penulisan makalah bisa diakses
                  di link berikut :{" "}
                </div>
                <a
                  className="text-[#2428a5] sm:ml-[4vh] md:ml-[4vh] lg:ml-[4.5vh] xl:ml-[4.5vh]"
                  href="https://bit.ly/TemplateDataMining"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://bit.ly/TemplateDataMining
                </a>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Peserta menunggu pengumuman hasil
                  penilaian dari panitia untuk lanjut ke babak final.
                </div>
              </p>
              <p className="text-base text-justify mt-3 ml-[1vh] leading-relaxed text-black">
                <span className="font-bold">2. Babak Final</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  Pengumpulan makalah hasil penambangan data dengan tema bebas
                  dan dengan contoh studi kasus yang ada di Indonesia, file
                  makalah yang dikumpulkan berupa file pdf dengan format file:
                  PekanIT_Judul Studi Kasus Data Mining_Nama Tim.pdf.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Pada tahap ini dilakukan penjurian
                  untuk peserta tim yang telah lolos dari tahap penyisihan.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Peserta tim diperbolehkan untuk
                  memperbaiki makalah untuk tahap final ini.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Peserta tim akan memvisualisasikan
                  hasil dari pengambilan studi kasus penambangan data yang ada
                  di makalah yang telah dibuat di hadapan juri.
                </div>
              </p>

              <p className="font-bold mt-4">Kriteria Penilaian</p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">1. Babak Penyisihan</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Makalah adalah syarat mutlak bagi
                  peserta untuk dapat mengikuti tahap selanjutnya.
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  <div>
                    Makalah peserta akan dinilai dan diseleksi untuk ditetapkan
                    sebagai peserta yang lolos ke babak final. Adapun kriteria
                    penilaian sebagai berikut:
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Kelengkapan dari makalah yang
                      dikumpulkan..
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Analisa dan perancangan makalah
                      dengan studi kasus yang diangkat (kompleks/tidak kompleks)
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Penjelasan permasalahan dan
                      solusi pada data mining dijelaskan dengan data riil.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Dampak implementasi dapat
                      diaplikasikan secara visualisasi data serta dapat memberi
                      manfaat bagi kepentingan masyarakat.
                    </div>
                  </div>
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Makalah yang dikumpulkan tidak
                  menentukan urutan.
                </div>
                <div className="overflow-x-auto relative md:ml-[4vh] sm:ml-[2vh] sm:my-2  sm:rounded-lg max-w-max bg-black">
                  <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="py-3 px-6">
                          No
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Kriteria Penilaian
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Nilai Minimum
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Nilai Maximum
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Bobot Penilaian
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="py-4 px-6">Kelengkapan Makalah</td>
                        <td className="py-4 px-6">1</td>
                        <td className="py-4 px-6">10</td>
                        <td className="py-4 px-6">10%</td>
                      </tr>

                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          2
                        </th>
                        <td className="py-4 px-6">Originalitas</td>
                        <td className="py-4 px-6">1</td>
                        <td className="py-4 px-6">10</td>
                        <td className="py-4 px-6">20%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          3
                        </th>
                        <td className="py-4 px-6">Kedalaman Kajian</td>
                        <td className="py-4 px-6">1</td>
                        <td className="py-4 px-6">10</td>
                        <td className="py-4 px-6">40%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          4
                        </th>
                        <td className="py-4 px-6">Implementasi</td>
                        <td className="py-4 px-6">1</td>
                        <td className="py-4 px-6">10</td>
                        <td className="py-4 px-6">20%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          5
                        </th>
                        <td className="py-4 px-6">Kebermanfaatan</td>
                        <td className="py-4 px-6">1</td>
                        <td className="py-4 px-6">10</td>
                        <td className="py-4 px-6">10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Peserta menunggu pengumuman hasil
                  penilaian dari panitia untuk lanjut ke babak final.
                </div>
              </p>
              <p className="text-base text-justify mt-3 ml-[1vh] leading-relaxed text-black">
                <span className="font-bold">2. Babak Final</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Peserta tim yang telah lolos ke tahap
                  final harus menghadiri presentasi tahap final melalui Zoom
                  Meeting.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Peserta tim dengan nilai terbaik akan
                  ditetapkan sebagai pemenang pada kategori data mining.
                </div>
                <div className="overflow-x-auto relative md:ml-[4vh] sm:ml-[2vh] sm:my-2  sm:rounded-lg max-w-max bg-black">
                  <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="py-3 px-6">
                          No
                        </th>
                        <th scope="col" className="py-3  px-6">
                          Kriteria Penilaian
                        </th>

                        <th scope="col" className="py-3 px-6">
                          Bobot Penilaian
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td className="py-4 px-6">
                          Pemaparan :
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Sistematika penyajian dan isi
                            presentasi
                          </p>
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Alat bantu pendukung presentasi
                          </p>
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Pembawaan saat presentasi
                          </p>
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Manajemen waktu presentasi
                          </p>
                        </td>

                        <td className="py-4 px-6">20%</td>
                      </tr>

                      <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          2
                        </th>
                        <td className="py-4  px-6 min-w-[400px]">
                          Kreativitas :
                          <p className="ml-[1vh] ">
                            &bull; &nbsp;Adopsi dan kemutahiran IPTEKS
                          </p>
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Kesesuaian metode data mining terhadap
                            permasalahan yang diangkat
                          </p>
                        </td>

                        <td className="py-4 px-6">50%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          3
                        </th>
                        <td className="py-4 px-6">
                          Diskusi :
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Tingkat pemahaman terhadap studi kasus
                            yang diangkat
                          </p>
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Konstribusi setiap anggota tim
                          </p>
                        </td>

                        <td className="py-4 px-6">30%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </p>
              <p className="font-bold mt-4">Hadiah </p>
              <p className="text-base text-justify leading-relaxed text-black">
                Bagi pemenang (Juara 1, 2, 3) diberikan penghargaan berupa
                sertifikat dan dana pembinaan sesuai dengan peringkat juara.
              </p>
              <p className="text-base leading-relaxed text-black">
                Juara 1: Sertifikat + Uang Pembinaan + Merchandise
              </p>
              <p className="text-base leading-relaxed text-black">
                Juara 2: Sertifikat + Uang Pembinaan + Merchandise
              </p>
              <p className="text-base leading-relaxed text-black">
                Juara 3: Sertifikat + Uang Pembinaan + Merchandise
              </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="top-left-modal"
                type="button"
                onClick={destroy}
                className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-black focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
