import React from 'react';

import { Modal } from '@material-ui/core';
import { FaTimes } from 'react-icons/fa';

// components
import DemoButton from './ui/DemoButton';
import CodeButton from './ui/CodeButton';

const GeneralModal = (props) => {
  const { closeCallBack, open, project } = props;

  if (!project) {
    return null;
  } else {
    console.log(project);

    const {
      title,
      codeLink,
      demoLink,
      codeDisabled,
      demoDisabled,
      image,
      description,
      technologies,
      demoTooltip,
    } = project;

    console.log(image);

    const imageRequired = require(`../assets/images/${project.image}.png`);
    return (
      <Modal
        open={open}
        onClose={closeCallBack}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <div className='modal__container'>
          <div className='modal__content'>
            <div className='modal__header'>
              <div className='modal__header__title'>{title}</div>
              <button onClick={closeCallBack} className='modal__header__close'>
                <FaTimes />
              </button>
            </div>
            <div className='modal__info__links'>
              <CodeButton codeLink={codeLink} disabled={codeDisabled} />
              <DemoButton
                demoLink={demoLink}
                disabled={demoDisabled}
                tooltipTtitle={demoTooltip}
              />
            </div>
            <img
              className='modal__image'
              src={imageRequired.default}
              alt='project'
            />

            <div className='modal__subtitle'>About this Project</div>
            <div className='modal__paragraph'>{description}</div>

            <div className='modal__subtitle'>Technologies</div>
            <div className='modal__paragraph'>
              <ul className='modal__list'>
                {technologies.map((tech, index) => {
                  return <li key={index}>{tech}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
};

export default GeneralModal;
