import React, { useState } from "react";

// dependencies
import { FaExternalLinkSquareAlt } from "react-icons/fa";

// components
import GeneralModal from "./GeneralModal";
import CodeButton from "./ui/CodeButton";
import DemoButton from "./ui/DemoButton";

const projects = [
  {
    id: "findit360",
    title: "Find It 360",
    codeDisabled: true,
    demoDisabled: false,
    codeLink: "private",
    demoLink: "https://www.findit360.uk/",
    image: "findit360",
    shortDescription:
      "In this project, I was part of a small team with really talented developers. The main goal of the website was to develop an application and give power to agencies, add, delete and manage properties with simple and fast user experience. In the process we were requested to implement extra pages for clients, to be able to have access to see all the properties.",
    description:
      "In this project, i was part of a small team with really talented developers. As part of a small team, we were required to build an application that allows only agencies to be able to add, remove and edit properties but also clients to be able to navigate throw properties. My responsibility was to work only to react and implement all the restful APIs requests, Aws Cognito user authentication, login and register. Implement Redux data structure and making APIs calls with redux-thunk. The big challenge was that we need to reuse the same components for agencies and clients and make sure the data flow depends on the user type.",
    technologies: ["Javascript", "React", "Redux", "Thunk", "Bootstrap"],
  },
  {
    id: "findit360mobile",
    title: "Find It 360 Mobile App",
    codeDisabled: true,
    demoDisabled: true,
    demoTooltip: "App is progress.",
    codeLink: "none",
    demoLink: "none",
    image: "findit360mobile",
    shortDescription:
      "After find it 360 website build, i was chosen to be part of the development team to find it 360 mobile application. We are challenged to build a mobile app with Ionic React and reuse as many as possible components, redux data flow and restful APIs from the find it 360 website.",
    description:
      "Completing the first challenge building the find it 360 website, the next challenge was to build the find it 360 mobile application. We chose the Ionic framework and develop a hybrid application writing a single code for ios and android platform. We manage to develop the Ionic React in top of find it 360 web React application reusing most of the components, using the same Redux data flow and AWS Cognito user authentication, login and register. We also were able to reuse some of the functions making both applications simple and fast. I was responsible for building the app components with React. Add extra functionalities to Redux and AWS Cognito and implement new Restful Apis requests.",
    technologies: ["Javascript", "Ionic", "React", "Redux", "Thunk"],
  },
  {
    id: "longitude",
    title: "Longitude",
    codeDisabled: true,
    demoDisabled: true,
    codeLink: "none",
    demoLink: "none",
    image: "findit360",
    shortDescription:
      "Longitude is an internal application for task management similar to Trello. This was an individual project and I was called to build a full stack application with React Typescript in frontend. Strapi and PostgreSql to sit on the backend.",
    description:
      "Longitude application was designed and build for the Carterhaugh company as an internal tool for task management. This project was developed only by me both front end and back end. I was requested to build and simple application dashboard for the users to be able to create delete edit and manage tasks with other colleagues. To the front end, i used React, Typescript, Redux Tool Kit and Thunk. To the back end, i used Strapi implementing user authentication with JWT token and PostgreSQL as a database. ",
    technologies: [
      "Javascript",
      "React",
      "Typescript",
      "Strapi",
      "PostgreSql",
      "Redux",
      "Thunk",
    ],
  },
  {
    id: "kanbanboard",
    title: "Kanban Board",
    codeDisabled: true,
    demoDisabled: true,
    codeLink: "none",
    demoLink: "none",
    demoTooltip: "App is progress.",
    image: "kanbanboard",
    shortDescription:
      "Kanban board is a task management application similar Trello. The unique about this project which i am proud of is that we build a mobile application with react native and a web application with react native web and listen now carefully from a single code source. Yeah, you heard right!",
    description:
      "Kanban board is a task management application developing with a single source code with 3 different platforms ios, android and web. The first challenge i faced with this project is to set up all the dependencies and the environment correctly for 3 different platforms avoiding errors. The main challenge of this project is to implement and solve problems that are not compatible with react native and react native web e.g. the route navigation is different between them. The project was developed with React Native, Typescript, React Native Web, Redux Tool Kit and styled-components. I wrote all the code to React Native first, implement, solve and build it to React Native Web after.",
    technologies: [
      "Javascript",
      "React Native",
      "React Native Web",
      "Typescript",
      "Redux",
      "Thunk",
    ],
  },
  {
    id: "movie",
    title: "Movie Application",
    codeDisabled: false,
    demoDisabled: false,
    codeLink: "https://github.com/oldi92/movie-app",
    demoLink: "https://movies-app-a63b8.web.app/",
    image: "movie",
    shortDescription:
      "Movie application Personal side project. This project is a Netflix clone. The idea was to build an application easy to navigate, simple and very fast that everyone could watch free movies and give power to client upload their movies.",
    description:
      "The first idea was to build a full-stack application with react, node js and mongo db. This project is a side project with a team counting on me and a friend. He was responsible for the backend and i was responsible for the front end. I took inspiration from the Netflix and i manage to develop the movie application project using react, redux data management and redux-thunk for the async api requests. Unfortunately, the project did never developed to 100% to the personal reason of my teammate..",
    technologies: ["Javascript", "React", "Redux", "Thunk", "Html5"],
  },
];

const Projects = (props) => {
  const [projectPayload, setProjectPayload] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projectPayloadHandler = (id) => {
    const payload = projects.filter((projcet) => projcet.id === id);
    setProjectPayload(payload[0]);
    setShowModal(true);
  };

  const projectsTechs = (projectSelected) => {
    const projectTechs = projects.filter(
      (projcet) => projcet.id === projectSelected
    );

    return projectTechs[0];
  };

  console.log(projectsTechs("findit360"));

  return (
    <div ref={props.forwardRef} className="projects">
      <div className="projects__title">My Projects</div>
      <div className="projects__list">
        {projects.map((project, index) => {
          const image = require(`../assets/images/${project.image}.png`);

          return (
            <div
              key={index}
              className={"projects__item"}
              style={{
                backgroundImage: `url(${image.default})`,
              }}
            >
              <div className="projects__item__box">
                <div className="projects__item__box__title">
                  {project.title}
                  <button
                    onClick={() => projectPayloadHandler(project.id)}
                    className="project__modal__button"
                  >
                    Full description
                    <FaExternalLinkSquareAlt />
                  </button>
                </div>
                <p className="projects__item__box__paragraph">
                  {project.shortDescription}
                </p>
                <div className="projects__item__techs">
                  {project.technologies.map((tech, index) => {
                    return (
                      <div key={index} className="projects__item__techs__item">
                        {tech}
                      </div>
                    );
                  })}
                </div>
                <div className="projects__item__box__links">
                  <CodeButton
                    codeLink={project.codeLink}
                    disabled={project.codeDisabled}
                  />
                  <DemoButton
                    tooltipTtitle={project.demoTooltip}
                    demoLink={project.demoLink}
                    disabled={project.demoDisabled}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* modal section */}
      <GeneralModal
        project={projectPayload}
        open={showModal}
        closeCallBack={() => setShowModal(false)}
      />
    </div>
  );
};

export default Projects;
