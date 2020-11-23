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
      "In this projects i was part of a small team with really talented developers. Main goal of the website, was to develop anapplication and the angencies access to add and manage propertieseasy and fast. In the process we was requested to implement pagesfor clients, to be able to have access to see all the properties.",
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
      "After find it 360 website build, i was chosen to be part of the development team to find it 360 mobile application. We are challenged to build a mobile app with Ionic React and reuse as many as possible components, redux state and restful APIs from the find it 360 website.",
    description:
      "After find it 360 website development, i was chosen to find it 360 mobile application development team. We are challenged to build a mobile app with ionic and reuse as many as possible component, redux state and restful APIs from the find it 360 website.",
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
    description: "long description",
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
    image: "findit360mobile",
    shortDescription:
      "Kanban board is a task management application similar Trello. The unique about this project which i am proud of is that we build a mobile application with react native and a web application with react native web and listen now carefully from a single code source. Yeah, you heard right!",
    description: "long description.",
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
    description: "Long descripiton.",
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
        {projects.map((project) => {
          const image = require(`../assets/images/${project.image}.png`);

          return (
            <div
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
                  {project.technologies.map((tech) => {
                    return (
                      <div className="projects__item__techs__item">{tech}</div>
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
