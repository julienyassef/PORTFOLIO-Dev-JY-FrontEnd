//Scss
import './ModalProjects.scss';

//Icon
import IconCrossClose from '../Icon/IconNav/IconCrossClose.jsx'
import IconArrowNext from '../Icon/IconNav/IconArrowNext.jsx'

//React
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

//PropsTypes
import PropTypes from 'prop-types';

/**
 * ModalProjects affiche une fenêtre modale qui montre des détails sur un projet sélectionné,
 * permettant de naviguer entre plusieurs projets.
 *
 * @param {Array} projects - Tableau contenant les projets à afficher.
 * @param {number} selectedProjectIndex - Index du projet initialement sélectionné à l'ouverture de la modale.
 * @param {function} onClose - Fonction à exécuter pour fermer la modale.
 */



const ModalProjects = ({ projects, selectedProjectIndex, onClose }) => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(selectedProjectIndex);
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const project = projects[currentProjectIndex];

    useEffect(() => {
        document.body.classList.add('modal-open');
        // console.log('Current project:', project);
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const nextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const handleCloseModal = (e) => {
        if (e.target.className.includes('modalOverlayProjects')) {
            onClose();
        }
    };

    const getDescriptionByLanguage = () => {
        return project.Desc[currentLang.toUpperCase()];
    };

    if (!projects.length) return null;

    return (
        <>
            <div className='modalOverlayProjects show' onClick={handleCloseModal} />
            <div className='modalProjects open'>
                <div className='modalProjects__head'>
                    <h2 className='modalProjects__head__title'>{project.name}</h2>
                    <div className='modalProjects__head__buttonClose' onClick={onClose}>
                        <IconCrossClose />
                    </div>
                </div>
                {project.video ? (
                    <video
                        className='modalProjects__media'
                        src={`./assets/videos/${project.video}`}
                        alt={`Preview of ${project.name}`}
                        autoPlay
                        loop
                        muted
                    />
                ) : (
                    <img
                        className='modalProjects__media'
                        src={`./assets/picture/${project.img}`}
                        alt={`Preview of ${project.name}`}
                    />
                )}
                <div className='modalProjects__content'>
                    <div className='modalProjects__content__desc'>
                        <h3 className='modalProjects__content__desc__title'>
                            {t('modalProjects.learnMore')}
                        </h3>
                        <p className='modalProjects__content__desc__text'>
                            {getDescriptionByLanguage()}
                        </p>
                    </div>
                    <div className='modalProjects__content__listSkills'>
                        <h3 className='modalProjects__content__listSkills__title'>
                            {t('modalProjects.usedTools')}
                        </h3>
                        <div className='modalProjects__content__listSkills__listWrapper'>
                            <ul className='modalProjects__content__listSkills__listWrapper__list'>
                                {project.Skills.map((skill) => (
                                    <img
                                        key={skill.id}
                                        className='modalProjects__content__listTools__toolLogo'
                                        src={`./assets/LogoTools/${skill.logo}`}
                                        alt={skill.name}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='modalProjects__footer'>
                    {project.linkCode ? (
                        <a
                            className='modalProjects__footer__linkCodeSource'
                            href={project.linkCode}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {t('modalProjects.sourceCode')}
                        </a>
                    ) : (
                        <div className='modalProjects__footer__linkCodeSourceDiv'>
                            {t('modalProjects.codeUnavailable')}
                        </div>
                    )}
                    {project.linkSite ? (
                        <a
                            className='modalProjects__footer__linkSeeProject'
                            href={project.linkSite}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {t('modalProjects.seeTheProject')}
                        </a>
                    ) : (
                        <div className='modalProjects__footer__linkSeeProjectDiv'>
                            {t('modalProjects.siteUnavailable')}
                        </div>
                    )}
                </div>
                {projects.length > 1 && (
                    <div className='modalProjects__wrapperArrowNext'>
                        <div onClick={previousProject}>
                            <IconArrowNext
                                width={35}
                                height={35}
                                color='gray'
                                className='modalProjects__wrapperArrowNext__buttonNext modalProjects__wrapperArrowNext__buttonNext__left'
                            />
                        </div>
                        <div onClick={nextProject}>
                            <IconArrowNext
                                width={35}
                                height={35}
                                color='gray'
                                className='modalProjects__wrapperArrowNext__buttonNext modalProjects__wrapperArrowNext__buttonNext__right'
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

ModalProjects.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            video: PropTypes.string, // Ajoutez cette ligne pour prendre en charge les vidéos
            Desc: PropTypes.shape({
                FR: PropTypes.string.isRequired,
                EN: PropTypes.string.isRequired
            }).isRequired,
            Skills: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    logo: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired
                })
            ).isRequired,
            linkCode: PropTypes.string.isRequired,
            linkSite: PropTypes.string.isRequired
        })
    ).isRequired,
    selectedProjectIndex: PropTypes.number,
    onClose: PropTypes.func.isRequired
};

export default ModalProjects;