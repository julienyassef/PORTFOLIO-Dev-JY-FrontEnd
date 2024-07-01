import './Projects.scss';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useData from '../../hooks/useData.jsx';
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage.jsx';
import ModalProjects from '../../components/ModalProjects/ModalProjects.jsx';

function Projects() {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const { dataProjects, isLoading, isError } = useData();

  if (isError) {
    return <p style={{ marginLeft: '200px', marginTop: '200px' }}>Error 404</p>;
  }
  if (isLoading) {
    return <p style={{ marginLeft: '200px', marginTop: '200px' }}>Loading...</p>;
  }

  const projects = dataProjects;

  const handleLearnMoreClick = (index) => {
    setSelectedProjectIndex(index);
    setModalOpen(true);
  };

  return (
    <div className='bodyprojects'>
      <div className='bodyprojects__sideSpacing'>
        <h1 className='bodyprojects__sideSpacing__h1'>{t('projects.projects')}</h1>
        <p className='bodyprojects__sideSpacing__text'>{t('projects.explore')}</p>
        <div className='bodyprojects__sideSpacing__containerProjects'>
          {Array.isArray(projects) &&
            projects.map((project, index) => (
              <div className='bodyprojects__sideSpacing__containerProjects__card' key={project.name}>
                <div className='bodyprojects__sideSpacing__containerProjects__card__wrapperMedia'>
                  {project.video ? (
                    <video
                      className='bodyprojects__sideSpacing__containerProjects__card__media'
                      src={`./assets/videos/${project.video}`}
                      alt={project.name}
                      autoPlay
                      loop
                      muted
                    />
                  ) : (
                    <img
                      className='bodyprojects__sideSpacing__containerProjects__card__media'
                      src={`./assets/picture/${project.img}`}
                      alt={project.name}
                    />
                  )}

                </div>
                <div className='bodyprojects__sideSpacing__containerProjects__card__content'>
                  <p className='bodyprojects__sideSpacing__containerProjects__card__content__title'>
                    {project.name}
                  </p>
                  <ul className='bodyprojects__sideSpacing__containerProjects__card__content__listSkill'>
                    {project.Skills.map((skill) => (
                      <img
                        key={skill.id}
                        className='bodyprojects__sideSpacing__containerProjects__card__content__listSkill__logo'
                        src={`./assets/LogoTools/${skill.logo}`}
                        alt={skill.name}
                      />
                    ))}
                  </ul>
                  <button
                    className='bodyprojects__sideSpacing__containerProjects__card__content__buttonMore'
                    onClick={() => handleLearnMoreClick(index)}
                  >
                    {t('projects.learnMore')}
                  </button>
                </div>
              </div>
            ))}
          {isModalOpen && (
            <ModalProjects
              projects={projects}
              selectedProjectIndex={selectedProjectIndex}
              onClose={() => setModalOpen(false)}
            />
          )}
        </div>
      </div>
      <ParallaxImage
        imageUrl='./assets/picture/pakata-goh-EJMTKCZ00I0-unsplash.jpg'
        width='100%'
        initialHeight='197px'
        tabletHeight='150px'
        mobileHeight='100px'
        speedFactor={0.1}
        text={t('projects.pickUpLine')}
      />
    </div>
  );
}

export default Projects;
