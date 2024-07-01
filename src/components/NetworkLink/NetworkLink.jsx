//SCSS
import './NetworkLink.scss'

//React
import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';


/**
 * @component
 * Component NetworkLink crée un lien réseau avec une icône, utilisé pour les liens sociaux ou externes.
 *
 * @param {string} backgroundColor - La couleur de fond du cercle entourant l'icône. Doit être une variable CSS valide.
 * @param {JSX.Element} icon - L'élément JSX de l'icône à afficher dans le lien.
 * @param {string} href - L'URL cible du lien. Lorsqu'on clique sur le lien, cette URL sera ouverte dans un nouvel onglet.
 * @param {string} color - La couleur de l'icône. Utilisée pour le texte ou l'icône elle-même. Doit être une variable CSS valide.
 * @param {string} width - La largeur initiale du lien. Peut être ajustée pour la réactivité avec `tabletWidth` et `mobileWidth`.
 * @param {string} height - La hauteur initiale du lien. Peut être ajustée pour la réactivité avec `tabletHeight` et `mobileHeight`.
 * @param {string} tabletWidth - La largeur du lien pour les écrans de tablette. Utilisée dans la fonction de redimensionnement pour ajuster la taille en fonction de la largeur de l'écran.
 * @param {string} tabletHeight - La hauteur du lien pour les écrans de tablette. Utilisée de même que `tabletWidth`.
 * @param {string} mobileWidth - La largeur du lien pour les écrans mobiles. Utilisée pour ajuster la taille sur les petits écrans.
 * @param {string} mobileHeight - La hauteur du lien pour les écrans mobiles. Utilisée de même que `mobileWidth`.
 * @param {boolean} enableHoverEffect - Active ou désactive l'effet de survol. Si `true`, change les couleurs au survol selon les variables CSS définies.
 *
 * Utilise les hooks `useState` pour gérer l'état de survol et la taille réactive, et `useEffect` pour écouter les changements de taille de l'écran.
 */


const NetworkLink = ({ 
  backgroundColor,
  icon, 
  href, 
  color, 
  width, 
  height, 
  tabletWidth, 
  tabletHeight, 
  mobileWidth, 
  mobileHeight,
  enableHoverEffect  
}) => {
    const [currentWidth, setCurrentWidth] = useState(width);
    const [currentHeight, setCurrentHeight] = useState(height);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 768 && window.innerWidth < 122) { 
            setCurrentWidth(tabletWidth || width);
            setCurrentHeight(tabletHeight || height);
          } else if (window.innerWidth < 767) { 
            setCurrentWidth(mobileWidth || width);
            setCurrentHeight(mobileHeight || height);
          } else {
            setCurrentWidth(width);
            setCurrentHeight(height);
          }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Appel initial pour définir la taille correcte dès le chargement

        return () => window.removeEventListener('resize', handleResize);
    }, [width, height, tabletWidth, tabletHeight, mobileWidth, mobileHeight]);

    const styleLink = {
      color: enableHoverEffect && isHovered ? "var(--background-color-4)" : color,  
      width: currentWidth,
      height: currentHeight
    };
  
    const styleCircle = {
        backgroundColor: enableHoverEffect && isHovered ? "var(--primary-color)" :  backgroundColor,
        width: currentWidth,
        height: currentHeight
    };


     // Logique pour gérer l'état de survol
     const handleMouseEnter = () => {
      if (enableHoverEffect) {
        setIsHovered(true);
      }
    };

    const handleMouseLeave = () => {
      if (enableHoverEffect) {
        setIsHovered(false);
      }
    };

    const isExternalLink = href.startsWith('http');

    return (
      <a 
      href={href} 
      className="networkLink" 
      {...isExternalLink && { target: "_blank", rel: "noopener noreferrer" }}
      rel="noopener noreferrer" 
      style={styleLink}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <div className="networkLink-circle" style={styleCircle}>
            {icon}
        </div>
      </a>
    );
};

NetworkLink.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  tabletWidth: PropTypes.string,
  tabletHeight: PropTypes.string,
  mobileWidth: PropTypes.string,
  mobileHeight: PropTypes.string,
  enableHoverEffect: PropTypes.bool
};


export default NetworkLink;
