import { Link } from "react-scroll";
import bg from "../assets/Bghero.png";

export default function Hero() {
  return (
    <>
      <div
        id="hero"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${bg})`,
        }}
        className="flex xl:h-[86vh] md:h-[95vh] sm:h-[65vh] lg:h-[95vh] text-white"
      >
        <div className="xl:m-auto lg:m-auto md:m-auto sm:my-[4vh]">
          <div className="lg:text-5xl animate-fade-in-2.5s sm:text-4xl md:text-4xl whitespace-normal sm:px-5 xl:text-center md:text-center lg:text-center font-bold">
            <p className="">Develop Your Smart Innnovation</p>
            <p className="">With Technology</p>
          </div>

          <div className="xl:text-center sm:mt-7 animate-fade-in-2.5s sm:text-justify break-words max-w-2xl lg:text-center md:text-center px-5 sm:text-sm md:text-lg mx-auto mt-5">
            <span className="text-cyan-400">Pekan IT </span>merupakan ajang
            tahunan yang diadakan oleh{" "}
            <span className="text-cyan-400">
              Himpunan Mahasiswa Prodi Teknik Informatika (HIMTIKA) Unsika{" "}
            </span>
            . Pekan IT adalah suatu kegiatan yang bertema{" "}
            <span className="text-cyan-400">Teknologi </span>yang didalamnya
            terdapat beberapa rangkaian acara seperti{" "}
            <span className="text-cyan-400">
              IT Competition, Webinar dan Workshop.
            </span>{" "}
            Pada acara Pekan IT tahun ini mengusung tema{" "}
            <span className="text-cyan-400">
              "Develop Your Smart Innovation With Technology"
            </span>
          </div>
          <div className="xl:text-center animate-fade-in-2.5s sm:mb-5 sm:text-justify break-words max-w-2xl lg:text-center md:text-center px-5 sm:text-sm md:text-lg mx-auto mt-1">
            <br />
            <Link
              key="start"
              to="event"
              spy={true}
              duration={600}
              smooth={true}
              offset={-85}
            >
              <button className=" bg-cyan-500 py-4 px-10 rounded-lg md:w-auto sm:w-full text-white font-semibold">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
