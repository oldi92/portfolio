import React, { useRef } from "react";

// dependencies
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import Redux from "../assets/images/redux.png";
import Typescript from "../assets/images/typescript.png";
import Git from "../assets/images/git.png";
import Mongo from "../assets/images/mongo.png";
import Html5 from "../assets/images/html5.png";
import Sass from "../assets/images/sass.png";

const TechnicalStuck = (props) => {
  const jsRef = useRef();
  const reactRef = useRef();
  const nodeRef = useRef();
  const otherRef = useRef();

  return (
    <div ref={props.forwardRef} className="technical__stuck">
      <div className="technical__stuck__title">Technical Stuck</div>
      <div className="technical__stuck__box__container">
        <div className="technical__stuck__container">
          <div ref={jsRef} className="technical__stuck__box box__1">
            <FaJs className="technical__stuck__box__icon" />
            <div>Javascript</div>
            <p>
              Experience with javascript for nearly 2 years and with a strong
              understanding of javascript and its unique functionality. I have
              commercial experience in developing web and mobile applications as
              part of a team and as an individual. Good understanding of OOP,
              inheritance, prototype. Proficient working with Restful API, ES6
              and ES5 syntax.
            </p>
          </div>
        </div>

        <div>
          <div ref={reactRef} className="technical__stuck__box box__2">
            <FaReact className="technical__stuck__box__icon" />
            <div>React</div>
            <p>
              Proficient experience with React working on commercial projects
              with sometimes leading responsibilities. Good coding structure,
              reusable components with a result developing simple and very fast
              applications. Great knowledge with react hooks and developing
              applications completely with functional components. Finally, I
              want to add to my tech stack react's best friends Redux and
              redux-thunk.
            </p>
          </div>
        </div>

        <div>
          <div ref={nodeRef} className="technical__stuck__box box__3">
            <FaNodeJs className="technical__stuck__box__icon" />
            <div>Node js</div>
            <p>
              I have start learning node js the last couple of months. I just
              had my hand dirty building simple back end applications. I have
              built full-stack personal applications with node, react and mongo
              db. Also, i have built Restful APIs applications, user
              authentication with passport library and integrate google OAuth.
            </p>
          </div>
        </div>

        {/* <div className="technical__stuck__box box__1">
          <div>Javascript</div>
          <p>
            Experience with javascript for nearly 2 years and with a strong
            understanding of javascript and its unique functionality. I have
            commercial experience in developing web and mobile applications as
            part of a team and as an individual. Good understanding of OOP,
            inheritance, prototype. Proficient working with Restful API, ES6 and
            ES5 syntax.
          </p>
        </div>
        <div className="technical__stuck__box box__2">
          <div>React</div>
          <p>
            Proficient experience with React working on commercial projects with
            sometimes leading responsibilities. Good coding structure, reusable
            components with a result developing simple and very fast
            applications. Great knowledge with react hooks and developing
            applications completely with functional components. Finally, I want
            to add to my tech stack react's best friends Redux and redux-thunk.
          </p>
        </div>
        <div className="technical__stuck__box box__3">
          <div>Node js</div>
          <p>
            I have start learning node js the last couple of months. I just had
            my hand dirty building simple back end applications. I have built
            full-stack personal applications with node, react and mongo db.
            Also, i have built Restful APIs applications, user authentication
            with passport library and integrate google OAuth.
          </p>
        </div>
        <div className="technical__stuck__box box__4">
          <img src={Redux} alt="redux" />
          <img src={Typescript} alt="typescript" />
          <img src={Git} alt="git" />
          <img src={Mongo} alt="mongo" />
          <img src={Html5} alt="html5" />
          <img src={Sass} alt="sass" />
        </div> */}
        <div>
          <div ref={otherRef} className="technical__stuck__box box__4">
            <img src={Redux} alt="redux" />
            <img src={Typescript} alt="typescript" />
            <img src={Git} alt="git" />
            <img src={Mongo} alt="mongo" />
            <img src={Html5} alt="html5" />
            <img src={Sass} alt="sass" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalStuck;
