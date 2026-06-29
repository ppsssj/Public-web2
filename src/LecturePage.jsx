import { useState } from "react";

const semesterData = {
  spring: {
    label: "1학기",
    englishLabel: "Spring semester",
    courses: [
      {
        code: "CSE 201",
        title: "모바일프로그래밍",
        englishTitle: "Mobile Programming",
        day: 0,
        dayLabel: "Monday",
        start: 10,
        duration: 2,
        time: "10:00 — 12:00",
        room: "M507",
        tone: "orange",
      },
      {
        code: "CSE 312",
        title: "인공지능",
        englishTitle: "Artificial Intelligence",
        day: 1,
        dayLabel: "Tuesday",
        start: 13,
        duration: 2,
        time: "13:00 — 15:00",
        room: "M502",
        tone: "dark",
      },
      {
        code: "CSE 324",
        title: "HCI프로그래밍",
        englishTitle: "HCI Programming",
        day: 3,
        dayLabel: "Thursday",
        start: 10,
        duration: 2,
        time: "10:00 — 12:00",
        room: "M507",
        tone: "stone",
      },
      {
        code: "CSE 491",
        title: "캡스톤디자인",
        englishTitle: "Capstone Design",
        day: 4,
        dayLabel: "Friday",
        start: 13,
        duration: 3,
        time: "13:00 — 16:00",
        room: "Project Studio",
        tone: "paper",
      },
    ],
  },
  fall: {
    label: "2학기",
    englishLabel: "Fall semester",
    courses: [
      {
        code: "CSE 101",
        title: "창의공학설계",
        englishTitle: "Creative Engineering Design",
        day: 0,
        dayLabel: "Monday",
        start: 13,
        duration: 2,
        time: "13:00 — 15:00",
        room: "Project Studio",
        tone: "orange",
      },
      {
        code: "CSE 231",
        title: "로봇프로그래밍",
        englishTitle: "Robot Programming",
        day: 1,
        dayLabel: "Tuesday",
        start: 10,
        duration: 2,
        time: "10:00 — 12:00",
        room: "Robotics Lab",
        tone: "dark",
      },
      {
        code: "CSE 341",
        title: "영상처리",
        englishTitle: "Image Processing",
        day: 2,
        dayLabel: "Wednesday",
        start: 13,
        duration: 2,
        time: "13:00 — 15:00",
        room: "M502",
        tone: "stone",
      },
      {
        code: "CSE 492",
        title: "캡스톤디자인",
        englishTitle: "Capstone Design",
        day: 4,
        dayLabel: "Friday",
        start: 10,
        duration: 3,
        time: "10:00 — 13:00",
        room: "Project Studio",
        tone: "paper",
      },
    ],
  },
};

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const hours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

export default function LecturePage() {
  const [semester, setSemester] = useState("spring");
  const activeSemester = semesterData[semester];

  return (
    <main className="lecture-page">
      <section
        className="lecture-hero"
        id="lecture-overview"
        aria-labelledby="lecture-title"
      >
        <div className="lecture-page-kicker lecture-page-enter">
          <span>Courses &amp; teaching</span>
          <span>Soonchunhyang University</span>
        </div>

        <h1 className="lecture-page-title lecture-page-enter" id="lecture-title">
          Lectures
        </h1>

        <div className="lecture-page-intro lecture-page-enter">
          <p>
            Courses connecting software fundamentals with intelligent systems,
            human-centered interaction, and practical engineering.
          </p>
          <dl>
            <div>
              <dt>Courses</dt>
              <dd>08</dd>
            </div>
            <div>
              <dt>Semesters</dt>
              <dd>02</dd>
            </div>
            <div>
              <dt>Academic year</dt>
              <dd>2026</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="lecture-timetable" id="lecture-schedule">
        <header className="lecture-timetable-heading" data-reveal>
          <span>Weekly timetable</span>
          <h2>Class<br />Schedule</h2>
          <p>
            Sample schedule — class times and rooms are temporary placeholders.
          </p>
        </header>

        <div className="lecture-semester-tabs" role="tablist" aria-label="Semester">
          {Object.entries(semesterData).map(([key, data]) => (
            <button
              className={semester === key ? "is-active" : ""}
              type="button"
              role="tab"
              aria-selected={semester === key}
              onClick={() => setSemester(key)}
              key={key}
            >
              <span>{data.label}</span>
              <strong>{data.englishLabel}</strong>
            </button>
          ))}
        </div>

        <div className="lecture-schedule-viewport" data-reveal>
          <div className="lecture-schedule" key={semester}>
            <div className="lecture-schedule-corner">KST</div>
            {weekdays.map((day, index) => (
              <div
                className="lecture-schedule-day"
                style={{ gridColumn: index + 2 }}
                key={day}
              >
                {day}
              </div>
            ))}

            {hours.map((hour, index) => (
              <div
                className="lecture-schedule-time"
                style={{ gridRow: index + 2 }}
                key={hour}
              >
                {hour}
              </div>
            ))}

            {weekdays.map((day, index) => (
              <div
                className="lecture-schedule-column"
                style={{ gridColumn: index + 2 }}
                aria-hidden="true"
                key={day}
              />
            ))}

            {activeSemester.courses.map((course) => (
              <article
                className={`lecture-schedule-course lecture-schedule-course--${course.tone}`}
                style={{
                  "--schedule-column": course.day + 2,
                  "--schedule-row": course.start - 9 + 2,
                  "--schedule-span": course.duration,
                }}
                key={course.code}
              >
                <span>{course.code}</span>
                <h3>{course.title}</h3>
                <p>{course.time}</p>
                <small>{course.room}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lecture-course-section" id="lecture-courses">
        <header className="lecture-course-heading" data-reveal>
          <span>{activeSemester.label}</span>
          <h2>{activeSemester.englishLabel}</h2>
        </header>

        <div className="lecture-course-list" key={semester}>
          {activeSemester.courses.map((course, index) => (
            <article className="lecture-course-row" key={course.code}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <span>{course.code}</span>
                <h3>{course.title}</h3>
                <p>{course.englishTitle}</p>
              </div>
              <dl>
                <div>
                  <dt>Day</dt>
                  <dd>{course.dayLabel}</dd>
                </div>
                <div>
                  <dt>Time</dt>
                  <dd>{course.time}</dd>
                </div>
                <div>
                  <dt>Room</dt>
                  <dd>{course.room}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
