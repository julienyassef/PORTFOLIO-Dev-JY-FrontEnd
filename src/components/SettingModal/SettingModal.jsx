//Scss
import './SettingModal.scss'

//React import
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

//Icon
import IconCrossClose from '../Icon/IconNav/IconCrossClose.jsx'

//Component
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';


/**
 * Le composant SettingModal fournit une interface pour les paramètres utilisateur,
 * permettant de changer la langue, le thème et la couleur principale.
 *
 * @param {boolean} isOpen - État booléen indiquant si la modal est ouverte.
 * @param {function} setIsOpen - Fonction pour définir l'état isOpen.
 * @param {function} toggleLanguage - Fonction pour changer de langue.
 * @param {function} changePrimaryColor - Fonction pour changer la couleur principale du thème.
 * @param {string} languageFlag - URL de l'icône du drapeau de la langue.
 * @param {function} t - Fonction de traduction pour l'internationalisation.
 * @param {function} toggleTheme - Fonction pour basculer entre les thèmes clair et sombre.
 */


const SettingModal = ({ 
  isOpen, 
  setIsOpen, 
  toggleLanguage, 
  changePrimaryColor, 
  languageFlag, 
  t, 
  toggleTheme }) => {

  // État local pour gérer l'état d'animation de la modal
  const [isAnimating, setIsAnimating] = useState('');

  // Liste des couleurs primaires disponibles pour le thème
  const colors = [
    "#14A085", "#7451EB", "#45D8FF", "#DAA521", "#E44D26",
    "#F5DE19", "#3178C6", "#CD6799", "#6D9A00", "#FF7262", "#C12127"
  ];

  // Fonction pour gérer l'entrée de la souris sur une option de couleur, pour prévisualiser les changements de couleur
  const handleMouseEnter = color => {
    document.documentElement.style.setProperty('--primary-color', color);
  };

  // Effet pour gérer l'animation de la modal lors de l'ouverture et de la fermeture
  useEffect(() => {
    if (isOpen) {
      setIsAnimating('opening');
      setTimeout(() => setIsAnimating(false), 500); 
    }
  }, [isOpen]);

  // Fonction pour gérer la fermeture de la modal avec animation
  const handleClose = () => {
    setIsAnimating('closing');
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 500); 
  };



  if (!isOpen && !isAnimating) return null;

  return  (
    <div className={`settingModal ${isAnimating}`} >
        <div className='settingModal__iconCloseCross' onClick={handleClose}>
            <IconCrossClose/>
        </div>
        <div className="settingModal__containerTheme">
            <div onClick={toggleLanguage} className="settingModal__containerTheme__language">
                <img src={languageFlag} alt="Change Language" />
            </div> 
            <div className="settingModal__containerTheme__theme">
                <ThemeSwitcher onClick={toggleTheme}/>
            </div>
        </div>
        <div className={`settingModal__modalThemeColor`} >
          <div className="settingModal__modalThemeColor__content" >
            <h3 className="settingModal__modalThemeColor__content__title">{t('navbar.themeColor')}</h3>
            <div className="settingModal__modalThemeColor__content__wrapperOption">
                {colors.map(color => (
                <div
                  key={color} 
                  className="settingModal__modalThemeColor__content__wrapperOption__colorOption"
                  style={{ backgroundColor: color }}
                  onMouseEnter={() => handleMouseEnter(color)}
                  onClick={() => {
                    changePrimaryColor(color);
                    handleClose();
                  }}
                />
              ))}
            </div>
          </div>
        </div>
    </div>
  ) 
};

SettingModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
  changePrimaryColor: PropTypes.func.isRequired,
  languageFlag: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default SettingModal;
  