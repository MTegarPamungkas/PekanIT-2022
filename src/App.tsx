import "./App.css";
import Hero from "./component/Hero";
import Tabbar from "./component/tabbar/Tabbar";
import Event from "./component/Event";
import Jadwal from "./component/calender/Calender";
import Panduan from "./component/Panduan";
import Header from "./component/Header";
import MediaPartner from "./component/Medpart";
import bg from "./assets/Bghero.png";

function App() {
  return (
    <div
      style={{
        backgroundColor: "rgb(4, 120, 87)",
        backgroundImage:
          "radial-gradient(at 98% 8%, rgb(30, 41, 59) 0, transparent 93%), radial-gradient(at 74% 3%, rgb(22, 163, 74) 0, transparent 76%), radial-gradient(at 3% 26%, rgb(39, 39, 42) 0, transparent 4%), radial-gradient(at 61% 40%, rgb(64, 64, 64) 0, transparent 100%), radial-gradient(at 24% 64%, rgb(28, 25, 23) 0, transparent 28%), radial-gradient(at 28% 75%, rgb(28, 141, 75) 0, transparent 86%)",
      }}
    >
      <Header />
      <Hero />
      <Event />
      <div
        className=""
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${bg})`,
        }}
      >
        <Panduan />
        <Jadwal />
        <MediaPartner />
      </div>
      <Tabbar />
    </div>
  );
}

export default App;
