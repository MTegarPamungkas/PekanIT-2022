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
          <div className="relative bg-[#f1eeee] shadow">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center p-5 rounded-t border-b">
              <h3 className="text-xl font-bold text-black ">UI / UX</h3>
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
                UI/UX design adalah salah satu pelombaan tingkat nasional yang
                diadakan oleh Himpunan Teknik Informatika dalam rangka
                memeriahkan acara Pekan IT 2022. Perlombaan ini dapat diikuti
                oleh semua kalangan masyarakat mulai dari mahasiswa (D3/D4/S1)
                dan semua kalangan umum di seluruh Indonesia.
                <div className="mt-1">
                  User Interface adalah proses menampilkan sebuah produk dengan
                  desain yang semenarik dan sekreatif mungkin yang dapat dilihat
                  oleh pengguna. Tujuan dari User Interface ini adalah
                  memudahkan komunikasi antara user dengan produk yang dibuat
                  dan membuat produk menjadi menarik. luas.
                </div>
                <div className="mt-1">
                  UUser Experience adalah proses dimana pengguna
                  berinteraksi/menggunakan produk secara baik dan nyaman. Dengan
                  adanya User Experince ini pengguna akan merasa nyaman dengan
                  tampilan yang ada dan didukung dengan user experience yang
                  baik.
                </div>
              </p>

              <p className="text-base text-justify mt-3 leading-relaxed text-black">
                <span className="font-bold">Ketentuan Peserta</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>1. &nbsp;</div>Peserta perlombaan UI/UX Pekan IT 2022
                  dapat terdiri dari 1-3 orang.
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>2. &nbsp;</div>
                  <div>
                    Peserta yang mengikuti perlombaan UI/UX Pekan IT 2022
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
                  peserta lomba UI/UX Pekan IT 2022.
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
                <span className="font-bold">1. Ketentuan Perlombaan</span>

                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  <div>
                    Tema yang digunakan pada Perlombaan UI/UX adalah
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Pendidikan
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Hiburan
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Industry
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Produktifitas
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Gaya hidup sehat
                    </div>
                  </div>
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&nbsp; &nbsp;</div>(Catatan : Peserta hanya dapat memilih
                  salah satu tema saja)
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Hasil karya Peserta merupakan
                  Prototype orisinal, tidak diperbolehkan menjiplak, mengambil
                  dan memodifikasi karya orang lain.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Hasil karya Peserta harus berkaitan
                  dengan salah satu tema yang telah ditentukan.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Peserta harus mengumpulkan prototype
                  sebelum batas waktu yang telah ditentukan oleh panitia.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Karya yang telah dibuat peserta
                  merupakan karya yang belum pernah digunakan dan diperlombakan
                  di acara manapun dan peserta tidak diperbolehkan untuk
                  mempublikasikan karyanya di akun sosial media atau acara
                  offline manapun hingga perlombaan berakhir.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Pada saat pelaksanaan demo hasil
                  karya, peserta diharuskan hadir tepat waktu pada tanggal (isi)
                  melalui (tempatnya)
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Keputusan yang dibuat oleh dewan juri
                  dan panitia bersifat mutlak dan tidak dapat diganggu gugat.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Panitia mempunyai hak untuk
                  mempublikasikan hasil karya peserta di akun media sosial Pekan
                  IT atau HIMTIKA dengan tetap mencantumkan nama peserta/tim.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Penilaian hasil karya peserta akan
                  ditinjau secara keseluruhan mulai dari interface hingga
                  experience.
                </div>
              </p>

              <p className="font-bold mt-4">Kriteria Penilaian</p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">1. Babak Penyisihan</span>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  <div>
                    Orisinil Karya
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Karya yang dibuat benar-benar
                      hasil dari sendiri, bukan memodifikasi atau mengambil
                      karya orang lain.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Karya yang dibuat belum pernah
                      digunakan atau dipublish di event manapun.
                    </div>
                  </div>
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  <div>
                    Isi
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Kesesuaian dengan tema yang telah
                      dipilih : Setiap tim harus memilih salah satu tema yang
                      ada di ketentuan perlombaan.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>User friendly : Desain UI yang
                      friendly, produk yang ringan untuk diakses dan menu yang
                      tidak berbelit-belit, dan lain sebagainya.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Metodologi yang digunakan untuk
                      mendeskripsikan latar belakang produk serta kejelasan atas
                      desain produk dan kekuatan desain
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Estetika user interface
                    </div>
                  </div>
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  <div>
                    Kualitas UI/UX
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Design yang mudah mengerti dan
                      tidak berbelit-belit, mudah dipelajari dan dapat digunakan
                      dengan baik oleh pengguna (user)
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Adanya daya Tarik pada tampilan
                      produk yang telah dibuat sehingga dapat menarik perhatian
                      pengguna (User).
                    </div>
                  </div>
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  <div>
                    Presentasi
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Percaya diri dalam presentasi
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Kemampuan memahami produk yang
                      telah dibuat
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Kualitas hasil karya
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Aspek kemenarikan isi presentasi
                    </div>
                  </div>
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
