import React from "react";

import Redux from "../assets/images/redux.png";
import Typescript from "../assets/images/typescript.png";
import Git from "../assets/images/git.png";
import Mongo from "../assets/images/mongo.png";
import Html5 from "../assets/images/html5.png";
import Sass from "../assets/images/sass.png";

const TechnicalStuck = () => {
  return (
    <div className="technical__stuck">
      <div className="technical__stuck__title">Technical Stuck</div>
      <div className="technical__stuck__box__container">
        <div className="technical__stuck__box box__1">
          <div>Javascript</div>
          <p>
            I am a self tought junior web developer with passion a bout web
            developing. My goal is to be the best web developer in the world.
            And rest is just a random text that i have to write only for the
            paragraph.
          </p>
        </div>
        <div className="technical__stuck__box box__2">
          <div>React</div>
          <p>
            I am a self tought junior web developer with passion a bout web
            developing. My goal is to be the best web developer in the world.
            And rest is just a random text that i have to write only for the
            paragraph.
          </p>
        </div>
        <div className="technical__stuck__box box__3">
          <div>Node js</div>
          <p>
            I am a self tought junior web developer with passion a bout web
            developing. My goal is to be the best web developer in the world.
            And rest is just a random text that i have to write only for the
            paragraph.
          </p>
        </div>
        <div className="technical__stuck__box box__4">
          <img src={Redux} alt="redux" />
          <img src={Typescript} alt="typescript" />
          <img src={Git} alt="git" />
          <img src={Mongo} alt="mongo" />
          <img src={Html5} alt="html5" />
          <img src={Sass} alt="sass" />
        </div>
      </div>
    </div>
  );
};

export default TechnicalStuck;
