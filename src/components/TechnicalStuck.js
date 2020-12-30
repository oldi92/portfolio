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
  const jsTitleRef = useRef();
  const jsIconRef = useRef();
  const jsParagraphRef = useRef();

  const reactRef = useRef();
  const reactTitleRef = useRef();
  const reactIconRef = useRef();
  const reactParagraphRef = useRef();

  const nodeRef = useRef();
  const nodeTitleRef = useRef();
  const nodeIconRef = useRef();
  const nodeParagraphRef = useRef();

  const otherRef = useRef();
  const otherImage1Ref = useRef();
  const otherImage2Ref = useRef();
  const otherImage3Ref = useRef();
  const otherImage4Ref = useRef();
  const otherImage5Ref = useRef();
  const otherImage6Ref = useRef();

  const onMouseMove = (event, from) => {
    const xAxis =
      (jsRef.current.offsetWidth / 2 - event.nativeEvent.offsetX) / 10;
    const yAxis =
      (jsRef.current.offsetHeight / 2 - event.nativeEvent.offsetY) / 10;

    if (xAxis < 30 && xAxis > -30 && yAxis < 30 && yAxis > -30) {
      if (from === "js") {
        jsRef.current.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
      } else if (from === "react") {
        reactRef.current.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
      } else if (from === "node") {
        nodeRef.current.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
      } else if (from === "other") {
        otherRef.current.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
      }
    }
  };

  const onMouseEnter = (from) => {
    if (from === "js") {
      jsRef.current.style.transition = "none";
      jsTitleRef.current.style.transform = "translateZ(30px)";
      jsIconRef.current.style.transform = "translateZ(50px)";
      jsParagraphRef.current.style.transform = "translateZ(30px)";
    } else if (from === "react") {
      reactRef.current.style.transition = "none";
      reactTitleRef.current.style.transform = "translateZ(30px)";
      reactIconRef.current.style.transform = "translateZ(50px)";
      reactParagraphRef.current.style.transform = "translateZ(30px)";
    } else if (from === "node") {
      nodeRef.current.style.transition = "none";
      nodeTitleRef.current.style.transform = "translateZ(30px)";
      nodeIconRef.current.style.transform = "translateZ(50px)";
      nodeParagraphRef.current.style.transform = "translateZ(30px)";
    } else if (from === "other") {
      otherRef.current.style.transition = "none";
      otherImage1Ref.current.style.transform = "translateZ(50px)";
      otherImage2Ref.current.style.transform = "translateZ(50px)";
      otherImage3Ref.current.style.transform = "translateZ(50px)";
      otherImage4Ref.current.style.transform = "translateZ(50px)";
      otherImage5Ref.current.style.transform = "translateZ(50px)";
      otherImage6Ref.current.style.transform = "translateZ(50px)";
    }
  };

  const onMouseOut = (from) => {
    if (from === "js") {
      jsRef.current.style.transition = "all 0.3s ease-in-out";
      jsRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
      jsTitleRef.current.style.transform = "translateZ(0)";
      jsIconRef.current.style.transform = "translateZ(0)";
      jsParagraphRef.current.style.transform = "translateZ(0)";
    } else if (from === "react") {
      reactRef.current.style.transition = "all 0.3s ease-in-out";
      reactRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
      reactTitleRef.current.style.transform = "translateZ(0)";
      reactIconRef.current.style.transform = "translateZ(0)";
      reactParagraphRef.current.style.transform = "translateZ(0)";
    } else if (from === "node") {
      nodeRef.current.style.transition = "all 0.3s ease-in-out";
      nodeRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
      nodeTitleRef.current.style.transform = "translateZ(0)";
      nodeIconRef.current.style.transform = "translateZ(0)";
      nodeParagraphRef.current.style.transform = "translateZ(0)";
    } else if (from === "other") {
      otherRef.current.style.transition = "all 0.3s ease-in-out";
      otherRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
      otherImage1Ref.current.style.transform = "translateZ(0)";
      otherImage2Ref.current.style.transform = "translateZ(0)";
      otherImage3Ref.current.style.transform = "translateZ(0)";
      otherImage4Ref.current.style.transform = "translateZ(0)";
      otherImage5Ref.current.style.transform = "translateZ(0)";
      otherImage6Ref.current.style.transform = "translateZ(0)";
    }
  };

  return (
    <div ref={props.forwardRef} className="technical__stuck">
      <div className="technical__stuck__title">Technical Stuck</div>
      <div className="technical__stuck__box__container">
        <div
          className="technical__stuck__box__wrapper"
          onMouseMove={(event) => onMouseMove(event, "js")}
          onMouseLeave={() => onMouseOut("js")}
          onMouseEnter={() => onMouseEnter("js")}
        >
          <div ref={jsRef} className="technical__stuck__box box__1">
            <div
              ref={jsIconRef}
              className="technical__stuck__box__icon__container"
            >
              <FaJs className="technical__stuck__box__icon" />
            </div>
            <div ref={jsTitleRef} className="technical__stuck__box__title">
              Javascript
            </div>
            <p
              ref={jsParagraphRef}
              className="technical__stuck__box__paragraph"
            >
              Experience with javascript for nearly 2 years and with a strong
              understanding of javascript and its unique functionality. I have
              commercial experience in developing web and mobile applications as
              part of a team and as an individual. Good understanding of OOP,
              inheritance, prototype. Proficient working with Restful API, ES6
              and ES5 syntax.
            </p>
          </div>
        </div>

        <div
          className="technical__stuck__box__wrapper"
          onMouseMove={(event) => onMouseMove(event, "react")}
          onMouseLeave={() => onMouseOut("react")}
          onMouseEnter={() => onMouseEnter("react")}
        >
          <div ref={reactRef} className="technical__stuck__box box__2">
            <div
              ref={reactIconRef}
              className="technical__stuck__box__icon__container"
            >
              <FaReact className="technical__stuck__box__icon" />
            </div>
            <div ref={reactTitleRef} className="technical__stuck__box__title">
              React
            </div>
            <p
              ref={reactParagraphRef}
              className="technical__stuck__box__paragraph"
            >
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

        <div
          className="technical__stuck__box__wrapper"
          onMouseMove={(event) => onMouseMove(event, "node")}
          onMouseLeave={() => onMouseOut("node")}
          onMouseEnter={() => onMouseEnter("node")}
        >
          <div ref={nodeRef} className="technical__stuck__box box__3">
            <div
              ref={nodeIconRef}
              className="technical__stuck__box__icon__container"
            >
              <FaNodeJs className="technical__stuck__box__icon" />
            </div>
            <div ref={nodeTitleRef} className="technical__stuck__box__title">
              Node js
            </div>
            <p
              ref={nodeParagraphRef}
              className="technical__stuck__box__paragraph"
            >
              I have start learning node js the last couple of months. I just
              had my hand dirty building simple back end applications. I have
              built full-stack personal applications with node, react and mongo
              db. Also, i have built Restful APIs applications, user
              authentication with passport library and integrate google OAuth.
            </p>
          </div>
        </div>

        <div
          className="technical__stuck__box__wrapper"
          onMouseMove={(event) => onMouseMove(event, "other")}
          onMouseLeave={() => onMouseOut("other")}
          onMouseEnter={() => onMouseEnter("other")}
        >
          <div ref={otherRef} className="technical__stuck__box box__4">
            <img
              ref={otherImage1Ref}
              className="technical__stuck__box__other"
              src={Redux}
              alt="redux"
            />
            <img
              ref={otherImage2Ref}
              className="technical__stuck__box__other"
              src={Typescript}
              alt="typescript"
            />
            <img
              ref={otherImage3Ref}
              className="technical__stuck__box__other"
              src={Git}
              alt="git"
            />
            <img
              ref={otherImage4Ref}
              className="technical__stuck__box__other"
              src={Mongo}
              alt="mongo"
            />
            <img
              ref={otherImage5Ref}
              className="technical__stuck__box__other"
              src={Html5}
              alt="html5"
            />
            <img
              ref={otherImage6Ref}
              className="technical__stuck__box__other"
              src={Sass}
              alt="sass"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalStuck;
