import doIt from "../assets/doit.png";
import dies from "../assets/dies.png";
import { Link as LinkUrl } from "react-router-dom";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
export default function Event() {
  const navigate = useNavigate();
  return (
    <>
      <div
        id="event"
        className="grid px-3 content-center justify-center text-white pb-12"
      >
        <div className="text-center">
          <p className="text-3xl font-bold mt-3">3 Events</p>

          <p className="text-lg text-cyan-400">
            There are 3 events managed by Pekan IT
          </p>
        </div>

        <div className="grid max-w-5xl md:grid-cols-3 sm:grid-cols-1 mt-12 md:gap-4 content-center justify-center">
          {/* <LinkUrl to="/pekan-it/webinar"> */}
          <div
            onClick={() => {
              navigate("/pekan-it/webinar");
            }}
            className="grid h-max-content cursor-pointer md:mt-0 sm:mt-8 px-3 border-2 border-cyan-400 border-dotted py-3 bg-[#509291] bg-opacity-30  rounded-lg"
          >
            <div className="mx-auto">
              <img src={dies} />
            </div>
            <div className="mx-auto text-xl font-bold mt-3">Webinar</div>
            <div className="text-center mt-2">
              <span>Webinar pada acara Pekan IT kali ini </span>
              <br />

              <span className="">
                membawakan tema{" "}
                <span className="italic">
                  "Getting Closer with Machine Learning"
                </span>
              </span>
            </div>
          </div>
          {/* </LinkUrl> */}
          <Link to="panduan" duration={800} smooth={true} offset={-85}>
            <div className="grid h-max-content cursor-pointer  md:mt-0 sm:mt-8 px-3 border-2 border-yellow-400 border-dotted py-3 bg-[#509291] bg-opacity-30  rounded-lg">
              <div className="mx-auto">
                <img src={doIt} />
              </div>
              <div className="mx-auto text-xl font-bold mt-3">
                IT Competition
              </div>
              <div className="text-center mt-2">
                <span>Perlombaan Nasional dibidang </span>
                <br />
                <span className="">
                  teknologi yang terbuka bagi Mahasiswa aktif / Umum.
                </span>
              </div>
            </div>
          </Link>
          {/* <LinkUrl to="/pekan-it/workshop"> */}
          <div
            onClick={() => {
              navigate("/pekan-it/workshop");
            }}
            className="grid h-max-content cursor-pointer  md:mt-0 sm:mt-8 px-3 border-2 border-cyan-400 border-dotted py-3 bg-[#509291] bg-opacity-30  rounded-lg"
          >
            <div className="mx-auto">
              <img src={dies} />
            </div>
            <div className="mx-auto text-xl font-bold mt-3">Workshop</div>
            <div className="text-center mt-2">
              <span>Workshop pada acara Pekan IT ini </span>
              <br />

              <span className="italic">
                bertema tentang "Basic Python Programming and Data Science"
              </span>
            </div>
          </div>
          {/* </LinkUrl> */}
        </div>
      </div>
    </>
  );
}
