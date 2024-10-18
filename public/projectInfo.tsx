import ProjectType from "../src/interfaces/ProjectType";

const projects: ProjectType[] = [
  {
    title: "TripSync: Shared File Storage App",
    demo: "https://tripsync-zh42.onrender.com/",
    github: "https://github.com/EricNohara/TripSync",
    img: "/tripsync-ss.PNG",
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
    img: "/project11-crop-min.jpg",
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
    img: "/SMS_workouts.jpg",
    caption: "Daily SMS Workout Sender Image",
    descriptions: [
      "Utilized Python code using pandas library and google sheets API to store workout data on google sheets.",
      "Created data fetching algorithm and SMS sending program to send workout data and image to my phone.",
      "Compatibility with windows task scheduler, allowing for automatic daily workout sending at a set time.",
    ],
  },
];

export default projects;
