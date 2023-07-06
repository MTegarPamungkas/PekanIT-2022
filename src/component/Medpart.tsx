import Algoritma from "../assets/medpart_sponsor/Algoritma.png";
import BNCneobank from "../assets/medpart_sponsor/BNC-neobank.png";
import Dicoding from "../assets/medpart_sponsor/Dicoding.png";
import GDSCUnsika from "../assets/medpart_sponsor/GDSCUnsika.png";
import HMIFO from "../assets/medpart_sponsor/HMIFO.png";
import LionParcel from "../assets/medpart_sponsor/LionParcel.png";
import PERMIKOMNAS from "../assets/medpart_sponsor/PERMIKOMNAS.png";
import sukacode from "../assets/medpart_sponsor/sukacode.png";
const MediaPartner = () => {
  return (
    <div className=" sm:pb-24 md:pb-8">
      <div className="grid content-center px-4 mt-12 md:justify-center text-white">
        <div className="grid sm:grid-cols-2 px-8 py-4 md:grid-cols-4 bg-[#fff] place-items-center items-center grid-flow-row rounded-xl  gap-6 max-w-5xl">
          <div className="md:col-span-4 sm:col-span-2">
            <p className="text-3xl text-black mb-6 text-center font-medium">
              Thanks to{" "}
              <span className="font-bold text-red-700">
                our Sponsor & Media partners
              </span>
            </p>
          </div>
          <img src={Dicoding} title="Dicoding" alt="" className=" w-48" />
          <img src={BNCneobank} title="BNC Neobank" alt="" className=" w-72" />
          <img src={Algoritma} alt="" title="Algoritma" className=" w-64" />
          <img src={LionParcel} alt="" title="Lion Parcel" className=" w-72" />
          <img src={GDSCUnsika} alt="" title="GDSC UNSIKA" className="w-72" />
          <img
            src={PERMIKOMNAS}
            alt=""
            title="Permikomnas"
            className=" sm:w-24 md:w-36"
          />
          <img src={HMIFO} alt="" title="HMIFO" className="md:w-40 sm:w-28" />
          <img
            src={sukacode}
            alt=""
            title="SukaCode"
            className=" md:w-32 sm:w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default MediaPartner;
