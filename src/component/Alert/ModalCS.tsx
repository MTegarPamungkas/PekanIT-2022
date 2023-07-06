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
              <h3 className="text-xl font-bold text-black ">Cyber Security</h3>
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
                Kompetisi Cyber Security bertujuan untuk menguji kemampuan
                peserta dalam menghadapi kasus keamanan informasi dan jaringan
                yang telah disiapkan. Daya analisis dan kreativitas peserta
                ditantang untuk mencari kelemahan pada suatu system yang telah
                dirancang untuk memiliki celah atau informasi tertentu yang
                memungkinkan terjadinya peretasan pada system tersebut.
              </p>

              <p className="text-base text-justify mt-3 leading-relaxed text-black">
                <span className="font-bold">Ketentuan Peserta</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>1. &nbsp;</div>Peserta perlombaan Cyber Security Pekan IT
                  2022 dapat terdiri dari 1-3 orang.
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>2. &nbsp;</div>
                  <div>
                    Peserta yang mengikuti perlombaan Cyber Security Pekan IT
                    2022 merupakan kalangan Mahasiswa/Umum.
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
                  peserta lomba Cyber Security Pekan IT 2022.
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

                <div className="mt-1 ml-[2vh] justify-start">
                  <div>
                    Format lomba Cyber Security adalah Capture The Flag ( CTF ).
                    Pada CTF, peserta akan dihadapkan scenario keamanan dan
                    mencari data khusus ( Flag ) yang bisa didapat dengan
                    mengkesploitasi celah pada sistem maupun mencari informasi
                    penting terkait dengan keamanan data yang disiapkan.
                    Kategori soal yang mungkin ada pada perlombaan CTF Pekan IT
                    ini :
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Web
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Digital Forensic
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Cryptographic
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Binary Analysis
                    </div>
                  </div>
                </div>
              </p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">2. Teknis Pelaksanaan </span>

                <div className="mt-1 ml-[2vh] justify-start">
                  <div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>1.&nbsp;</div>Pada hari pelaksanaan peserta akan
                      diberikan link platform CTF.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>2.&nbsp;</div>Segala masalah teknis yang perlu
                      diketahui atau mau diketahui bisa ditanyakan dan akan
                      disampaikan di grub WA peserta.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>3.&nbsp;</div>Peserta login menggunakan kredensial
                      yang diberikan panitia pada saat pelaksanaan.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>4.&nbsp;</div>Pada platform peserta dapat melihat
                      semua tantangan yang tersedia
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>5.&nbsp;</div>Setiap tantangan berisi “clue” dalam
                      penyelesaian masalah.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>6.&nbsp;</div>Setiap soal memiliki bobot point yang
                      berbeda-beda tergantung tingkat kesulitannya.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>7.&nbsp;</div>Flag berformat PEKANIT{"{flag}"}
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>8.&nbsp;</div>Peserta dapat mensubmit Flag pada
                      platform CTF yang disediakan agar mendapatkan point.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>9.&nbsp;</div>Peserta memiliki waktu 1x24 jam untuk
                      menyelesaikan semua soal yang disediakan.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>10.&nbsp;</div>Peserta diwajibkan membuat bahan
                      presentasi tentang Proof of Concept penyelesaian CTF yang
                      akan dipresentasikan dihari kedua perlombaan. Peserta akan
                      didisqualifikasi jika tidak membuat Proof Of Concept.
                    </div>
                  </div>
                </div>
              </p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">3. Ketentuan Khusus </span>

                <div className="mt-1 ml-[2vh] justify-start">
                  <div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>1.&nbsp;</div>Dilarang melakukan Scanning dir / Brute
                      Force berlebihan yang dapat menggangu server. Semua jenis
                      soal tidak memerlukan brute force.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>2.&nbsp;</div>Dilarang berbagi Flag atau bekerjasama
                      dengan tim lain, Melakukan Joki dengan orang diluar tim.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>3.&nbsp;</div>Dilarang melakukan eksploitasi
                      berlebihan pada server yang membuat server lomba
                      terganggu.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>4.&nbsp;</div>Jika menemukan bug / celah diluar soal
                      CTF peserta diharapkan melaporkannya kepada Panitia yang
                      bersangkutan untuk mendapatkan kemungkinan nilai tambahan.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>5.&nbsp;</div>Diperbolehkan menggunakan tool yang
                      membantu dalam menyelesaikan soal. Namun peserta wajib
                      mempresentasikan dan menjelaskan celah / penemuan
                      tersebut.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>6.&nbsp;</div>Segala pelanggaran yang telah ditulis
                      diatas maupun tidak tertulis akan ditindak lanjut dengan
                      sesuai, dapat berupa pengurangan point maupun
                      pendiskualifikasian.
                    </div>
                  </div>
                </div>
              </p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">4. Kriteria Penilaian </span>

                <div className="mt-1 ml-[2vh] justify-start">
                  <div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>1.&nbsp;</div>Waktu dalam menyelesaikan semua soal
                      yang disediakan.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>2.&nbsp;</div>Jumlah point yang didapat dalam
                      menyelesaikan soal.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>3.&nbsp;</div>Presentasi yang dilakukan peserta dalam
                      memaparkan Proof Of Concept juga mungkin masuk kedalam
                      penilaian.
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
