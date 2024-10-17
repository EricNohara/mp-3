import {
  PageTitle,
  SubcontentContainer,
  ImgContentContainer,
} from "../components/GlobalStyledComponents";

export default function Projects() {
  return (
    <>
      <PageTitle>Projects</PageTitle>
      <SubcontentContainer>
        <h2>
          TripSync: Shared File Storage App
          <span>
            {" ("}
            <a href="https://tripsync-zh42.onrender.com/" target="_blank">
              Website
            </a>
            {") ("}
            <a href="https://github.com/EricNohara/TripSync" target="_blank">
              GitHub
            </a>
            {")"}
          </span>
        </h2>
        <ImgContentContainer>
          <img
            src="/src/assets/tripsync-ss.PNG"
            alt="TripSync Project Image"
            loading="lazy"
            height="200px"
          />
          <ul>
            <li>
              Implemented REST API backend using Node.js with Express, stored
              user data using MongoDB, integrated cloud storage with AWS (S3),
              handled authentication with JWT, and utilized Handlebars for
              server-side rendering.
            </li>
            <li>
              Supports registration, sign in, 2 factor auth, file storage and
              sharing with similar functionality to Google Drive.
            </li>
          </ul>
        </ImgContentContainer>
      </SubcontentContainer>
      <SubcontentContainer>
        <h2>
          Webserver Integrated Arduino Based Attendance Metric Tracker {"("}
          <span>
            <a
              href="https://github.com/EricNohara/Webserver-Integrated-Arduino-Attendance-Tracker"
              target="_blank"
            >
              GitHub
            </a>
          </span>
          {") ("}
          <span>
            <a
              href="https://drive.google.com/drive/folders/1SGPjzqW3uOtwZvEsnllC91_HD7ibE_Vc"
              target="_blank"
            >
              Demo
            </a>
          </span>
          {")"}
        </h2>
        <ImgContentContainer>
          <img
            src="/src/assets/project11-crop-min.jpg"
            alt="Arduino Project Image"
            loading="lazy"
            height="200px"
          />
          <ul>
            <li>
              Multithreaded webserver in C using socket interface. Handles HTTP
              requests, HTML error codes, CGI scripts.
            </li>
            <li>
              Arduino driven device using ultrasonic sensors that tracks the
              current attendance in a room and communicates with the webserver
              via serial communication to send data or receive configuration
              data from the client.
            </li>
            <li>
              Supports async data, real-time data plotting utilizing AJAX
              requests, and email sending via SMTP protocol.
            </li>
          </ul>
        </ImgContentContainer>
      </SubcontentContainer>
      <SubcontentContainer>
        <h2>
          Daily SMS Workout Sender {"("}
          <span>
            <a
              href="https://github.com/EricNohara/Python-SMS-Workout_Sender"
              target="_blank"
            >
              GitHub
            </a>
          </span>
          {")"}
        </h2>
        <ImgContentContainer>
          <img
            src="/src/assets/SMS_workouts.jpg"
            alt="Workout Sender Project Image"
            loading="lazy"
            height="200px"
          />
          <ul>
            <li>
              Utilized Python code using pandas library and google sheets API to
              store workout data on google sheets.
            </li>
            <li>
              Created data fetching algorithm and SMS sending program to send
              workout data and image to my phone.
            </li>
            <li>
              Compatibility with windows task scheduler, allowing for automatic
              daily workout sending at a set time.
            </li>
          </ul>
        </ImgContentContainer>
      </SubcontentContainer>
      <SubcontentContainer>
        <h2>Simple Calculator</h2>
        <form id="calculator">
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
          <div class="calc-btn-container">
            <div class="btn-row">
              <button id="add-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
              <button id="minus-btn">
                <i class="fa-solid fa-minus"></i>
              </button>
              <button id="power-btn">
                <i class="fa-solid fa-superscript"></i>
              </button>
            </div>
            <div class="btn-row">
              <button id="divide-btn">
                <i class="fa-solid fa-divide"></i>
              </button>
              <button id="times-btn">
                <i class="fa-solid fa-xmark"></i>
              </button>
              <button id="clear-btn">
                <i class="fa-solid fa-delete-left"></i>
              </button>
            </div>
          </div>
          <div class="calc-output-container">
            <h3 id="output"></h3>
          </div>
        </form>
      </SubcontentContainer>
    </>
  );
}
