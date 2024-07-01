//SCSS
import './LinksModal.scss'

//React
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

//Component
import DynamicLink from '../DynamicLink/DynamicLink'


/**
 * LinksModal est un composant modal qui affiche une liste de liens de navigation.
 * Ce composant permet à l'utilisateur de naviguer à différentes sections du site.
 *
 * @param {boolean} isOpen - État indiquant si la modal est ouverte.
 * @param {function} setIsOpen - Fonction pour modifier l'état isOpen.
 * @param {function} t - Fonction de traduction pour l'internationalisation.
 */

const LinksModal = ({ isOpen, setIsOpen, t }) => {
  const [isAnimating, setIsAnimating] = useState('');

  // Fonction pour remonter en haut de la page lorsqu'un lien est cliqué
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Effet pour gérer l'animation à l'ouverture de la modal
  useEffect(() => {
    if (isOpen) {
      setIsAnimating('opening');
      setTimeout(() => setIsAnimating(false), 500); // Temporisation pour l'animation
    }
  }, [isOpen]);

  // Fonction pour fermer la modal et arrêter l'animation
  const handleClose = () => {
    setIsAnimating('closing');
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 500); // Temporisation pour l'animation
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`modalLinks ${isAnimating}`}>
      <ul className="modalLinks__list">
        {/* Création des liens de navigation qui ferment également la modal */}
        <li onClick={handleClose}><Link to="/" className="modalLinks__list__item" onClick={scrollToTop}>{t('navbar.home')}</Link></li>
        <li onClick={handleClose}><DynamicLink className="modalLinks__list__item" toSection="about" title={t('navbar.about')} /></li>
        <li onClick={handleClose}><DynamicLink className="modalLinks__list__item" toSection="skills" title={t('navbar.skills')} /></li>
        <li onClick={handleClose}><DynamicLink className="modalLinks__list__item" toSection="projects" title={t('navbar.projects')} /></li>
        <li onClick={handleClose}><DynamicLink className="modalLinks__list__item" toSection="resume" title={t('navbar.resume')} /></li>
        <li onClick={handleClose}><DynamicLink className="modalLinks__list__item" toSection="contact" title={t('navbar.contact')} /></li>
      </ul>
    </div>
  );
};

// Définition des PropTypes pour valider les propriétés passées au composant
LinksModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  setIsOpen: PropTypes.func.isRequired, 
  t: PropTypes.func.isRequired, 
};



export default LinksModal;
  