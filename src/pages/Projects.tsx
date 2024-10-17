import {
  PageTitle,
  SubcontentContainer,
} from "../components/GlobalStyledComponents";

import Project from "../components/Project";
import { BtnRow, CalcBtnContainer, Calculator } from "../components/Calculator";
import ProjectType from "../interfaces/Projecttype";

const projects: ProjectType[] = [
  {
    title: "TripSync: Shared File Storage App",
    demo: "https://tripsync-zh42.onrender.com/",
    github: "https://github.com/EricNohara/TripSync",
    img: "/src/assets/tripsync-ss.PNG",
    caption: "TripSync Project Image",
    descriptions: [
      "Implemented REST API backend using Node.js with Express, stored user data using MongoDB, integrated cloud storage with AWS (S3), handled authentication with JWT, and utilized Handlebars for server-side rendering.",
      "Supports registration, sign in, 2 factor auth, file storage and sharing with similar functionality to Google Drive.",
    ],
  },
  {
    title: "Webserver Integrated Arduino Based Attendance Metric Tracker",
    demo: "https://drive.google.com/drive/folders/1SGPjzqW3uOtwZvEsnllC91_HD7ibE_Vc",
    github:
      "https://github.com/EricNohara/Webserver-Integrated-Arduino-Attendance-Tracker",
    img: "/src/assets/project11-crop-min.jpg",
    caption: "Arduino Project Image",
    descriptions: [
      "Multithreaded webserver in C using socket interface. Handles HTTP requests, HTML error codes, CGI scripts.",
      "Arduino driven device using ultrasonic sensors that tracks the current attendance in a room and communicates with the webserver via serial communication to send data or receive configuration data from the client.",
      "Supports async data, real-time data plotting utilizing AJAX requests, and email sending via SMTP protocol.",
    ],
  },
  {
    title: "Daily SMS Workout Sender",
    demo: null,
    github: "https://github.com/EricNohara/Python-SMS-Workout_Sender",
    img: "/src/assets/SMS_workouts.jpg",
    caption: "Daily SMS Workout Sender Image",
    descriptions: [
      "Utilized Python code using pandas library and google sheets API to store workout data on google sheets.",
      "Created data fetching algorithm and SMS sending program to send workout data and image to my phone.",
      "Compatibility with windows task scheduler, allowing for automatic daily workout sending at a set time.",
    ],
  },
];

export default function Projects() {
  return (
    <>
      <PageTitle>Projects</PageTitle>
      {projects.map((project) => (
        <Project project={project}></Project>
      ))}
      <SubcontentContainer>
        <h2>Simple Calculator</h2>
        <Calculator>
          <input
            id="num1-input"
            type="number"
            placeholder="Number 1"
            required
          />
          <input
            id="num2-input"
            type="number"
            placeholder="Number 2"
            required
          />
          <CalcBtnContainer>
            <BtnRow>
              <button id="add-btn">
                <i className="fa-solid fa-plus"></i>
              </button>
              <button id="minus-btn">
                <i className="fa-solid fa-minus"></i>
              </button>
              <button id="power-btn">
                <i className="fa-solid fa-superscript"></i>
              </button>
            </BtnRow>
            <BtnRow>
              <button id="divide-btn">
                <i className="fa-solid fa-divide"></i>
              </button>
              <button id="times-btn">
                <i className="fa-solid fa-xmark"></i>
              </button>
              <button id="clear-btn">
                <i className="fa-solid fa-delete-left"></i>
              </button>
            </BtnRow>
          </CalcBtnContainer>
          <div className="calc-output-container">
            <h3 id="output"></h3>
          </div>
        </Calculator>
      </SubcontentContainer>
    </>
  );
}
