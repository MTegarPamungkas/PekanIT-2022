import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BiInfoCircle } from "react-icons/Bi";
import { useLocation } from "react-router-dom";
import { auth } from "../../firebase";
import PendaftaranDataService from "../../service/pendaftaran.service";
import Header from "./Header";
import UploadKarya from "./UploadKarya";
import UploadLinkUiUx from "./UploadLinkUiUx";

export default function Dashboard() {
  const location = useLocation();

  const [daftar, setDaftar] = useState([] as any[]);
  const [status, setStatus] = useState(0);
  const [user, setUser] = useState(0);
  const [email, setEmail] = useState<any | null>(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(1);
      setEmail(user.email);
    } else {
      setUser(0);
      window.location.href = "/pekan-it/";
    }
  });

  useEffect(() => {
    if (location.state == null) {
      window.location.href = "/pekan-it/";
    }
    getPendaftaran();
  }, []);

  // console.log(email);

  const getPendaftaran = async () => {
    const data = await PendaftaranDataService.getAllPendaftaran(email);
    setDaftar(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // console.log
    const cekData = data.docs.map((doc) => doc.data());
    const found = cekData.filter((obj) => {
      return obj.email_login == location.state;
    });
    if (found.length == 0) {
      setStatus(1);
    } else {
      setStatus(0);
    }
    // console.log(found);
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(4, 120, 87)",
        backgroundImage:
          "radial-gradient(at 98% 8%, rgb(30, 41, 59) 0, transparent 93%), radial-gradient(at 74% 3%, rgb(22, 163, 74) 0, transparent 76%), radial-gradient(at 3% 26%, rgb(39, 39, 42) 0, transparent 4%), radial-gradient(at 61% 40%, rgb(64, 64, 64) 0, transparent 100%), radial-gradient(at 24% 64%, rgb(28, 25, 23) 0, transparent 28%), radial-gradient(at 28% 75%, rgb(28, 141, 75) 0, transparent 86%)",
      }}
    >
      <Header />

      <div className="grid min-h-[85vh] justify-center  content-center items-center">
        <>
          {status == 1 ? (
            <div
              className="md:w-[50rem]
              mx-4 p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse"
            >
              <div className=" h-full w-full mr-2 rounded-2xl ">
                <h1 className="m-2 text-4xl font-bold text-center dark:text-white">
                  Kamu tidak terdaftar dalam perlombaan Pekan IT
                </h1>
              </div>
            </div>
          ) : (
            ""
          )}

          {daftar.map((doc, index) => {
            if (doc.email_login == location.state) {
              return (
                <div
                  key={index}
                  className="md:w-[50rem]
                mb-5 w-[20.5rem] p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse"
                >
                  <div className=" h-full w-full mr-2 rounded-2xl ">
                    <p className="m-2 font-bold pl-1 text-lg text-[#5865F2]">
                      Pekan IT
                    </p>

                    <h1 className="m-2 text-4xl font-bold dark:text-white">
                      Perlombaan {doc.lomba}
                    </h1>
                    <p className="m-2 font-bold pl-1 text-lg ]">
                      Universits / Institut : {doc.asal_univ}
                    </p>
                    <p className="m-2 font-bold pl-1 text-lg ]">
                      Ketua Tim : {doc.ketua_team}
                    </p>
                    {doc.anggota1 != "" ? (
                      <p className="m-2 font-bold pl-1 text-lg ]">
                        Anggota : {doc.anggota1}
                      </p>
                    ) : null}
                    {doc.anggota2 != "" ? (
                      <p className="m-2 font-bold pl-1 text-lg ]">
                        Anggota : {doc.anggota2}
                      </p>
                    ) : null}
                    {doc.anggota3 != "" ? (
                      <p className="m-2 font-bold pl-1 text-lg ]">
                        Anggota : {doc.anggota3}
                      </p>
                    ) : null}

                    <a
                      href={doc.bukti_pembayaran}
                      target="_black"
                      className="m-2 font-bold pl-1 text-lg text-blue-500"
                    >
                      Lihat Bukti Pembayaran
                    </a>

                    {doc.code_status != 0 ? (
                      <UploadKarya
                        classnameBtn={"cursor-pointer"}
                        status={"Upload Karya"}
                        disetujui={true}
                        email={location.state}
                        idDoc={doc.id}
                        ketua={doc.ketua_team}
                        lomba={doc.lomba}
                        univ={doc.asal_univ}
                      />
                    ) : (
                      <UploadKarya
                        classnameBtn={"cursor-not-allowed text-red-800"}
                        status={"Upload Karya"}
                        disetujui={false}
                        idDoc={doc.id}
                        email={location.state}
                        ketua={doc.ketua_team}
                        lomba={doc.lomba}
                        univ={doc.asal_univ}
                      />
                    )}

                    {doc.lomba == "UI / UX" ? (
                      <UploadLinkUiUx
                        classnameBtn={"cursor-pointer"}
                        status={"Add Link"}
                        disetujui={true}
                        idDoc={doc.id}
                        link={doc.link}
                        email={location.state}
                        ketua={doc.ketua_team}
                        lomba={doc.lomba}
                        univ={doc.asal_univ}
                      />
                    ) : (
                      ""
                    )}
                    {doc.code_karya != 0 ? (
                      <a
                        href={doc.karya}
                        target="_blank"
                        className="text-lg text-green-600"
                        rel="noreferrer"
                      >
                        (File)
                      </a>
                    ) : (
                      ""
                    )}

                    <div className="flex flex-row">
                      <button
                        className={`${
                          doc.code_status != 0 ? "bg-green-600" : "bg-red-600"
                        } md:m-2 m-auto mt-8  shadow-md shadow-[#5865f28a]  pt-2 pb-2 pl-4 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300`}
                      >
                        <BiInfoCircle
                          className="animate-ping font-bold"
                          size={18}
                          color="#fff"
                        />
                        <h1 className="text-white  text-md font-semibold pl-2">
                          {doc.status}
                        </h1>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </>
      </div>
    </div>
  );
}
