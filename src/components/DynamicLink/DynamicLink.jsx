//React
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


/**
 * DynamicLink est un composant pour créer des liens qui naviguent vers une section spécifique de la page,
 * ou vers la page d'accueil et ensuite vers une section spécifique.
 * 
 * @param {string} toSection - ID de la section vers laquelle défiler après la navigation (optionnel).
 * @param {string} title - Clé de traduction pour le texte du lien.
 * @param {string} className - Classe CSS à appliquer au lien pour le style.
 */


// Définition du composant FooterContactLink avec une prop supplémentaire
const DynamicLink= ({ toSection = '', title, className }) => {
  let navigate = useNavigate();
  const { t } = useTranslation();

  // Gestion du clic sur le lien
  const handleClick = (e) => {
      e.preventDefault();

      // Si une section est spécifiée et que l'on est déjà sur la page d'accueil
      if (toSection && window.location.pathname === '/') {
          // Défiler vers la section spécifiée si nous sommes déjà sur la page d'accueil
          scrollToSection(toSection);
      } else {
          // Naviguer vers la page d'accueil puis défiler vers la section spécifiée
          navigate('/', { replace: true });
          setTimeout(() => scrollToSection(toSection), 100);
      }
  };

  // Fonction pour défiler vers la section spécifiée
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = 60; // Ajuster le décalage de 60 pixels
      window.scrollTo({
        top: sectionTop - offset,
        behavior: 'smooth',
      });
    }
  }

  return (
      <a
          className={className}
          href={`#${toSection}`}
          onClick={handleClick}
      >
          {t(`${title}`)}
      </a>
  );
}

DynamicLink.propTypes = {
    toSection: PropTypes.string,  
    title: PropTypes.string.isRequired, 
    className: PropTypes.string, 
  };

export default DynamicLink;