//scss
import './ModalThemeColor.scss';

//React import 
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

/**
 * ModalThemeColor permet aux utilisateurs de changer la couleur principale du thème via une interface modale.
 *
 * @param {function} changePrimaryColor - Fonction pour changer la couleur principale du thème.
 * @param {boolean} isOpen - État pour contrôler la visibilité de la modal.
 * @param {function} setIsOpen - Fonction pour modifier l'état isOpen.
 */

const ModalThemeColor = ({ changePrimaryColor, isOpen, setIsOpen }) => {

  const [isAnimating, setIsAnimating] = useState(false);  
  const { t } = useTranslation();  

  // Liste des couleurs disponibles pour le thème
  const colors = [
    "#14A085", "#7451EB", "#45D8FF", "#DAA521", "#E44D26",
    "#F5DE19", "#3178C6", "#CD6799", "#6D9A00", "#FF7262", "#C12127"
  ];

  // Gestionnaire d'événements pour la prévisualisation de la couleur au survol de la souris
  const handleMouseEnter = color => {
    document.documentElement.style.setProperty('--primary-color', color);
  };

  // Effet pour lancer l'animation à l'ouverture de la modal
  useEffect(() => {
    if (isOpen) {
      setIsAnimating('opening');
    }
  }, [isOpen]);

  // Fonction pour fermer la modal et arrêter les animations
  const handleClose = () => {
    setIsAnimating('closing');
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating('');
    }, 500);  
  };

  // Empêche la fermeture de la modal lors du clic sur son contenu
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  // Rendu conditionnel basé sur l'état d'ouverture et d'animation
  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`modalThemeColor ${isAnimating}`} onClick={handleClose}>
      <div className="modalThemeColor__content" onClick={handleContentClick}>
        <h3 className="modalThemeColor__content__title" >{t('navbar.themeColor')}</h3>
        <div className="modalThemeColor__content__wrapperOption">
            {colors.map(color => (
            <div
              key={color} 
              className="modalThemeColor__content__wrapperOption__colorOption"
              style={{ backgroundColor: color }}
              onMouseEnter={() => handleMouseEnter(color)}
              onClick={() => changePrimaryColor(color)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ModalThemeColor.propTypes = {
  changePrimaryColor: PropTypes.func.isRequired, 
  isOpen: PropTypes.bool.isRequired, 
  setIsOpen: PropTypes.func.isRequired 
};

export default ModalThemeColor;
