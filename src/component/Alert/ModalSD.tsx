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
              <h3 className="text-xl font-bold text-black ">
                Software Development
              </h3>
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
                Software Development adalah perlombaan tingkat Nasional dalam
                ajang event Pekan IT yang diselenggarakan oleh Program Studi
                Teknik Informatika Fakultas Ilmu Komputer Universitas
                Singaperbangsa Kawarawang. Kompetisi ini menantang peserta
                tingkat mahasiswa di seluruh Indonesia untuk menciptakan
                aplikasi berbasis web atau mobile. Peserta ditantang
                mengeksplorasi ide-ide kreatif dan inovatif dengan memanfaatkan
                teknologi informasi
              </p>

              <p className="text-base text-justify mt-3 leading-relaxed text-black">
                <span className="font-bold">Ketentuan Peserta</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>1. &nbsp;</div>Peserta perlombaan Software Development
                  Pekan IT 2022 dapat terdiri dari 2-3 orang.
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>2. &nbsp;</div>
                  <div>
                    Peserta yang mengikuti perlombaan Software Development Pekan
                    IT 2022 merupakan kalangan Mahasiswa/Umum.
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
                  peserta lomba Software Development Pekan IT 2022.
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
                <span className="font-bold">1. Ketentuan Karya</span>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  <div>
                    Tema yang digunakan pada Perlombaan Software Development
                    adalah
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Pendidikan
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Sosial
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Teknologi
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Lingkungan
                    </div>
                  </div>
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Software yang dibuat harus berbasis
                  android atau Web
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Teknik pembuatan software bersifat
                  bebas.
                </div>

                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Design software disesuaikan dengan
                  tema yang diberikan.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Diperbolehkan menggunakan framework.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Membuat halaman software yang
                  konsisten dan berfungsi pada berbagai perangkat dan perbedaan
                  resolusi layar.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Dilarang menggunakan template yang
                  sudah ada.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Membuat software yang orisinal (asli)
                  dan kreatif.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Software yang diikutsertakan belum
                  pernah dilombakan sebelumnya.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Isi tidak boleh mengandung pornografi
                  ataupun SARA.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Hal-hal yang perlu diperhatikan dalam
                  pembuatan software ini yaitu:
                </div>
                <div className="mt-1 ml-[4vh] justify-start grid grid-flow-col">
                  <div>1.&nbsp;</div>
                  <div>
                    Design & User Experience
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>a.&nbsp;</div>Dapat membuat, menganalisa,
                      mengembangkan dan dapat menyampaikan informasi dengan baik
                      sesuai pemahaman komposisi hirarki, tipografi dan
                      estetika.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>b.&nbsp;</div>Penerapan website dalam beragam device
                      seperti PC, Tablet dan Smartphone.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>c.&nbsp;</div>Penerapan apk dalam device berbasis
                      android
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>d.&nbsp;</div>Penerapan design yang konsisten dan
                      mengikuti tren.
                    </div>
                  </div>
                </div>
                <div className="mt-1 ml-[4vh] justify-start grid grid-flow-col">
                  <div>2.&nbsp;</div>
                  <div>
                    Penerapan Teknologi
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>a.&nbsp;</div>Framework yang digunakan the lastest
                      framework version dan popular saat ini.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>b.&nbsp;</div>Menggunakan database yang popular dan
                      banyak digunakan saat ini.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>c.&nbsp;</div>Aplikasi berbasis android minimal
                      berjalan di OS 7.0 Naogat.
                    </div>
                  </div>
                </div>
                <div className="mt-1 ml-[4vh] justify-start grid grid-flow-col">
                  <div>3.&nbsp;</div>
                  <div>
                    Database
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>a.&nbsp;</div>Memilih database sesuai permasalahan
                      yang ingin dipecahkan
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>b.&nbsp;</div>Memberikan solusi kebutuhan database
                      yang sesuai.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>c.&nbsp;</div>Menggunakan Relational Database ataupun
                      Non-Relational Database.
                    </div>
                  </div>
                </div>
              </p>

              <p className="font-bold mt-4">2. Ketentuan Perlombaan </p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">A. Babak Penyisihan</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  Pengumpulan proposal hasil Software Development, Proposal yang
                  dikumpulkan berupa file pdf dengan format file: PekanIT_judul
                  Karya_ _Nama Tim_Universitas.pdf.
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  <div>
                    Proposal disajikan dengan beberapa poin sebagai berikut:
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Proposal wajib menggunakan Bahasa
                      Indonesia yang sesuai dengan PUEBI.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Proposal yang diajukan merupakan
                      ide orisinal.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Aplikasi yang dibuat dalam
                      proposal harus bisa direalisasikan menjadi sebuah aplikasi
                      berbasis android atau web yang kreatif dan inovatif.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Aplikasi yang dibuat dalam
                      proposal harus mengacu pada ruang lingkup permasalahan
                      yang telah diberikan.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Proposal diharapkan menjelaskan
                      keunikan aplikasi berbasis android atau web dan
                      kelebihannya jika dibandingkan dengan aplikasi lain yang
                      serupa.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Margin kanan, atas, dan bawah 3
                      cm dan margin kiri 4 cm.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&minus; &nbsp;</div>Proposal ditulis dalam format
                      .pdf dan maksimal 30 halaman. Peserta dapat menambahkan
                      poin-poin pendukung lain pada proposal.
                    </div>
                  </div>
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Format penulisan proposal bisa diakses
                  di link berikut :{" "}
                </div>
                <a
                  className="text-[#2428a5] sm:ml-[4vh] md:ml-[4vh] lg:ml-[4.5vh] xl:ml-[4.5vh]"
                  href="https://bit.ly/TemplateProposalPekanIT"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://bit.ly/TemplateProposalPekanIT
                </a>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Peserta menunggu pengumuman hasil
                  penilaian dari panitia untuk lanjut ke babak final.
                </div>
              </p>
              <p className="text-base text-justify mt-3 ml-[1vh] leading-relaxed text-black">
                <span className="font-bold">B. Babak Final</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  Pada tahap ini dilakukan penjurian untuk peserta tim yang
                  telah lolos dari tahap penyisihan.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Peserta tim membuat powerpoint untuk
                  menjelaskan hasil atau karya yang telah dibuat.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Peserta tim akan mempresentasikan
                  powerpoint yang telah dibuat yang tercantum pada point kedua
                  dan mendemontrasikan hasil dari pembuatan karya yang telah
                  dibuat di hadapan juri.
                </div>
              </p>

              <p className="font-bold mt-4">Kriteria Penilaian</p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">1. Babak Penyisihan</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>&bull; &nbsp;</div>Proposal adalah syarat mutlak bagi
                  peserta untuk dapat mengikuti tahap selanjutnya.
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>&bull; &nbsp;</div>
                  <div>
                    Proposal peserta akan dinilai dan diseleksi untuk ditetapkan
                    sebagai peserta yang lolos ke babak final.
                  </div>
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
                        <td className="py-4 px-6">Kelengkapan Proposal</td>
                        <td className="py-4 px-6">1</td>
                        <td className="py-4 px-6">10</td>
                        <td className="py-4 px-6">20%</td>
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
                        <td className="py-4 px-6">Isi dan pembahasan</td>
                        <td className="py-4 px-6">1</td>
                        <td className="py-4 px-6">10</td>
                        <td className="py-4 px-6">20%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          4
                        </th>
                        <td className="py-4 px-6">Analisis dan kesimpulan</td>
                        <td className="py-4 px-6">1</td>
                        <td className="py-4 px-6">10</td>
                        <td className="py-4 px-6">20%</td>
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
                  ditetapkan sebagai pemenang pada kategori Software
                  Development.
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
                          Karya :
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Orisinalitas dan kreativitas
                          </p>
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Fungsi dan fitur
                          </p>
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Pemanfaatan teknologi terkini
                          </p>
                          <p className="ml-[1vh]">&bull; &nbsp;UI dan UX</p>
                        </td>

                        <td className="py-4 px-6">
                          &nbsp;
                          <p className="ml-[1vh]">15%</p>
                          <p className="ml-[1vh]">15%</p>
                          <p className="ml-[1vh]">15%</p>
                          <p className="ml-[1vh]">15%</p>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          2
                        </th>
                        <td className="py-4 px-6 min-w-[400px]">
                          Presentasi :
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Sikap presentasi dan penyampaian
                          </p>
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Efesiensi waktu
                          </p>
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Pemahaman terhadap aplikasi yang dibuat
                          </p>
                          <p className="ml-[1vh]">
                            &bull; &nbsp;Cara dan sikap menjawab
                          </p>
                        </td>

                        <td className="py-4 px-6">
                          &nbsp;
                          <p className="ml-[1vh]">10%</p>
                          <p className="ml-[1vh]">5%</p>
                          <p className="ml-[1vh]">10%</p>
                          <p className="ml-[1vh]">15%</p>
                        </td>
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
