//SCSS
import "./NavBar.scss"

//React
import { Link } from 'react-router-dom';
import  { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

//import
import { useTheme } from '../../../provider/ThemeProvider.jsx'

//Components
import LinksModal from '../../LinksModal/LinksModal.jsx'
import SettingModal from "../../SettingModal/SettingModal.jsx";
import ThemeSwitcher from '../../ThemeSwitcher/ThemeSwitcher.jsx'
import ModalThemeColor from '../../ModalThemeColor/ModalThemeColor.jsx'
import DynamicLink from "../../DynamicLink/DynamicLink.jsx";


//Icon, logo et img
import Logo from '../../Logo/Logo.jsx'
import IconHome  from '../../Icon/IconNav/IconHome.jsx'
import IconPalette  from '../../Icon/IconNav/IconPalette.jsx'
import IconMenuMobile  from '../../Icon/IconNav/IconMenuMobile.jsx'
import IconSetting from '../../Icon/IconNav/IconSetting.jsx'

/**
 * NavBar est un composant qui gère la barre de navigation du site,
 * incluant les liens de navigation, la gestion des langues, les thèmes et les couleurs.
 */


const NavBar = () => {
  const { t, i18n } = useTranslation();
  const { toggleTheme } = useTheme();
  const modalThemeColorRef = useRef();

  const [isModalThemeColorOpen, setIsModalThemeColorOpen] = useState(false);
  const [isLinksModalOpen,  setIsLinksModalOpen] = useState(false);
  const [isSettingModalOpen,  setIsSettingModalOpen] = useState(false);
  
  
  //Gére le changement de la colour primaire du site
  const changePrimaryColor = (color) => {
    document.documentElement.style.setProperty('--primary-color', color);
    setIsModalThemeColorOpen(false);
  };

  //utilise i18n pour changer la langue FR ou EN
  const toggleLanguage = () => {
    const nextLang = i18n.language === 'FR' ? 'EN' : 'FR';
    i18n.changeLanguage(nextLang)
  };

  //remonter en haut de la page homme si click
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };


  // Gérer les ouvertures et fermetures des modals de la navBar vis button
  const toggleModal = () => {
    setIsLinksModalOpen(!isLinksModalOpen);
  };
  const toggleSettingModal = () => {
    setIsSettingModalOpen(!isSettingModalOpen);
  };
  
  //Gere les ouvertures ou fermetures de la modal par modif effect (esc et clickoutside")
  useEffect(() => {
    // Gestionnaire pour détecter les clics à l'extérieur de la modale
    const handleClickOutside = (event) => {
      if (modalThemeColorRef.current && !modalThemeColorRef.current.contains(event.target)) {
        setIsModalThemeColorOpen(false);
      }
    };
  
    // Gestionnaire pour détecter l'appui sur la touche ESC
    const handleEscPress = (event) => {
      if (event.key === 'Escape') {
        setIsModalThemeColorOpen(false);
        setIsLinksModalOpen(false); 
        setIsSettingModalOpen(false);
      }
    };

     // Gestionnaire pour fermer les modals en changement de taille fenetre
     const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsLinksModalOpen(false);
        setIsSettingModalOpen(false);
      }
      if (window.innerWidth <= 767) { 
        setIsModalThemeColorOpen(false);
      }
    };

    // Ajouter les gestionnaires d'événements au document
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscPress);
    window.addEventListener('resize', handleResize);
  
    // Nettoyage : retirer les gestionnaires d'événements lors du démontage du composant
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscPress);
      window.removeEventListener('resize', handleResize);
    };

  }, []); 

  return (
    <>
      <nav className="navbar">

        {/* Bouton Menu en mode mobile pour avoir accès au liens de la nav bar*/}
        <button className="navbar__menuButton" onClick={toggleModal}>
          <IconMenuMobile />
        </button>

        {/* Link retour page home en mode Desktop */}
        <Link to="/" className="navbar__logoDesktop" onClick={scrollToTop}>
          <Logo 
              color="var(--text-color)"  
              width= '70px' 
              height= '70px' 
            />
        </Link>

        {/* Link retour page home en mode  mobile*/}
        <Link to="/" className="navbar__logoMobile">
          <Logo 
              color="var(--text-color)"  
              width= '45px' 
              height= '45px' 
            />
        </Link>

        {/* Links de la navbar en mode Desktop */}
        <div className="navbar__link">
          <Link to="/" className="navbar__link__icon" onClick={scrollToTop}>
            <IconHome />
          </Link>
          <ul className="navbar__link__list">
            <li><DynamicLink className="navbar__link__list__item" toSection="about" title={t('navbar.about')} /></li>
            <li><DynamicLink className="navbar__link__list__item" toSection="skills" title={t('navbar.skills')} /></li>
            <li><DynamicLink className="navbar__link__list__item" toSection="projects" title={t('navbar.projects')} /></li>
            <li><DynamicLink className="navbar__link__list__item" toSection="resume" title={t('navbar.resume')} /></li>
            <li><DynamicLink className="navbar__link__list__item" toSection="contact" title={t('navbar.contact')} /></li>
          </ul>
        </div>

        {/* Bouton et link setting en mode Desktop */}
        <div className="navbar__wrapperTheme">
          {/* Bouton changer de langue en mode Desktop */}
          <div onClick={toggleLanguage} className="navbar__wrapperTheme__language">
            <img src={i18n.language === 'EN' ? './assets/Flag/FlagUK.png' : './assets/Flag/FlagFR.png'} alt="Change Language" />
          </div> 
          {/* Bouton changer la couleur principale du site en mode Desktop */}
          <div className="navbar__wrapperTheme__colorTheme" onClick={() => setIsModalThemeColorOpen(!isModalThemeColorOpen)}>
            <IconPalette />
          </div>
          {/* Bouton changer de mode entre light et dark en mode Desktop */}
          <ThemeSwitcher onClick={toggleTheme}/>
        </div>
        
        {/* Bouton et link setting en mode  mobile */}
        <button className="navbar__menuSetting" onClick={toggleSettingModal}>
          <IconSetting />
        </button>
      </nav>
      
      {/* Modal de la navbar */}

      {/*  Modal Link navBar en mode Mobile*/}
      {isLinksModalOpen && <LinksModal isOpen={isLinksModalOpen} setIsOpen={setIsLinksModalOpen} t={t} />}

      {/*  Modal choisir la couleur du thème (couleur principal) du site en mode Desktop*/}
      {isModalThemeColorOpen && (
                <ModalThemeColor 
                isOpen={isModalThemeColorOpen} 
                setIsOpen={setIsModalThemeColorOpen}
                changePrimaryColor={changePrimaryColor} />
            )}

      {/*  Modal Setting navBar pour choisir couleur theme, language et mode dark ou light en mode Mobile*/}      
      {isSettingModalOpen && ( 
        <SettingModal 
          isOpen={isSettingModalOpen} 
          setIsOpen={setIsSettingModalOpen}
          toggleLanguage={toggleLanguage} 
          changePrimaryColor={changePrimaryColor}
          languageFlag={i18n.language === 'EN' ? './assets/Flag/FlagUK.png' : './assets/Flag/FlagFR.png'}
          t={t}
          toggleTheme={toggleTheme} 
        />
      )}
    </>
  );
};

export default NavBar;
