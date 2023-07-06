import {
  createTheme,
  Events,
  TextEvent,
  themes,
  Timeline,
} from "@merc/react-timeline";
import "react-calendar/dist/Calendar.css";

import "react-vertical-timeline-component/style.min.css";

const dateEvent = [
  {
    bulan: "September",
    tanggal: "05",
    hari: "Senin",
    jam: "00:01 am to 23:59",
    note: "Pendaftaran IT Competition dibuka",
  },
  {
    bulan: "September",
    tanggal: "10",
    hari: "Sabtu",
    jam: "8:00 am to 5:00 pm",
    note: "Pendaftaran Webinar dan Workshop dibuka",
  },
  {
    bulan: "September",
    tanggal: "20",
    hari: "Selasa",
    jam: "8:00 am to 5:00 pm",
    note: "Pengumpulan karya lomba UI/UX, Data Mining, Business Plan, dan Software Development dibuka",
  },
  {
    bulan: "Oktober",
    tanggal: "07",
    hari: "Jumat",
    jam: "8:00 am to 5:00 pm",
    note: "Virtual Technical Meeting IT Competition",
  },
  {
    bulan: "Oktober",
    tanggal: "09",
    hari: "Minggu",
    jam: "8:00 am to 5:00 pm",
    note: "Pelaksanaan Webinar Pekan IT",
  },
  {
    bulan: "Oktober",
    tanggal: "10",
    hari: "Senin",
    jam: "8:00 am to 5:00 pm",
    note: "Presentasi finalis Business Plan dan Data Mining",
  },
  {
    bulan: "Oktober",
    tanggal: "11",
    hari: "Selasa",
    jam: "8:00 am to 5:00 pm",
    note: "Demo UI/UX Design, Demo Software Development, Pelaksanaan Capture the Flag (CTF cyber security)",
  },
  {
    bulan: "Oktober",
    tanggal: "13",
    hari: "Kamis",
    jam: "8:00 am to 5:00 pm",
    note: "Pengumuman pemenang IT Competition di Sosial media Pekan IT",
  },
];

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
    color: "#000",
  },

  date: {
    backgroundColor: "#2f8484",
  },
  marker: {
    borderColor: "#2f8484",
  },
  timelineTrack: {
    backgroundColor: "#2f8484",
  },
});

export default function Jadwal() {
  return (
    <>
      {/* <hr className="m-4" /> */}
      <div
        id="jadwal"
        className="sm:pb-14 md:pb-0 grid content-center  md:justify-center"
      >
        <p className="text-center overflow-hidden text-3xl text-white my-5">
          Timeline Pekan IT
        </p>
        <Timeline theme={customTheme} className="z-10">
          <Events className="z-10">
            {dateEvent.map((event, id) => {
              return (
                <TextEvent
                  key={id}
                  date={event.hari + ", " + event.tanggal + " " + event.bulan}
                  text={event.note}
                />
              );
            })}
          </Events>
        </Timeline>
        {/* <VerticalTimeline animate={true} className="z-0">
          {dateEvent.map((event, id) => {
            return (
              <VerticalTimelineElement
                key={id}
                className="vertical-timeline-element--work "
                contentStyle={{
                  background: "#1b2354a0",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={`${
                  event.hari + ", " + event.tanggal + " " + event.bulan
                }`}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
              >
                <div>{event.note}</div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline> */}
      </div>
    </>
  );
}
