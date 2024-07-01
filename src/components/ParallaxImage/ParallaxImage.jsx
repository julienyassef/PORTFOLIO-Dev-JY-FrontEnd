// Import SCSS
import './ParallaxImage.scss';

// React import
import { useEffect, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Composant ParallaxImage affiche une image avec un effet de parallaxe lors du défilement de la page.
 * Cet effet donne une sensation de profondeur en faisant bouger l'image à une vitesse différente du contenu.
 *
 * @param {string} imageUrl - URL de l'image de fond à afficher.
 * @param {string} width - Largeur de l'image (doit être une chaîne, par exemple "100%" ou "500px").
 * @param {string} initialHeight - Hauteur initiale de l'image sur les grands écrans.
 * @param {string} tabletHeight - Hauteur de l'image sur les tablettes.
 * @param {string} mobileHeight - Hauteur de l'image sur les mobiles.
 * @param {number} speedFactor - Facteur contrôlant la vitesse de l'effet parallaxe, par défaut à 0.5.
 * @param {string} text - Texte à afficher sur l'image.
 */

const ParallaxImage = ({
  imageUrl,
  width,
  initialHeight,
  tabletHeight,
  mobileHeight,
  speedFactor = 0.5,
  text,
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(initialHeight);
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  // Callback pour gérer l'effet parallaxe en fonction du défilement de la page
  const handleScroll = useCallback(() => {
    if (isVisible && imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const offset = window.pageYOffset + rect.top - window.innerHeight;
      setOffsetY((window.pageYOffset - offset) * speedFactor);
    }
  }, [speedFactor, isVisible]);

  // Ajout de l'écouteur d'événements pour le scroll et le nettoyage à la désinscription
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Gestion du changement de hauteur en fonction de la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCurrentHeight(mobileHeight); // Applique la hauteur mobile
      } else if (window.innerWidth < 1024) {
        setCurrentHeight(tabletHeight); // Applique la hauteur de tablette
      } else {
        setCurrentHeight(initialHeight); // Applique la hauteur initiale
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Appel initial pour définir la hauteur

    return () => window.removeEventListener('resize', handleResize);
  }, [initialHeight, tabletHeight, mobileHeight]);

  // Utilisation de l'Intersection Observer pour détecter la visibilité de l'image
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [imageRef]);

  // Styles dynamiques pour le conteneur de l'image parallaxe
  const style = {
    width: width,
    height: currentHeight,
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover', // Assure que l'image couvre entièrement le conteneur
    backgroundPosition: `center calc(50% + ${offsetY}px)` // Ajuste la position verticale pour l'effet parallaxe
  };

  // Rendu du conteneur de l'image avec le texte superposé
  return (
    <div className="parallax-image" style={style} ref={imageRef}>
      <p className="parallax-text">{text}</p>
    </div>
  );
};

// Définition des propTypes pour la validation des props
ParallaxImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  initialHeight: PropTypes.string.isRequired,
  tabletHeight: PropTypes.string,
  mobileHeight: PropTypes.string,
  speedFactor: PropTypes.number,
  text: PropTypes.string
};

export default ParallaxImage;
