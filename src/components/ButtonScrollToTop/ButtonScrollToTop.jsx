//Scss
import './ButtonScrollToTop.scss'

//React
import  { useState, useEffect } from 'react';

//Icon
import IconScrollToTop from '../Icon/IconNav/ArrowScrollToTop'

const ButtonScrollToTop = ( ) => {
    const [isVisible, setIsVisible] = useState(false);

     // Fonction pour détecter le scroll
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

     // Fonction pour remonter en haut de la page
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
    
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);

    return (
        isVisible && (
        <button className='scrollToTopButton' onClick={scrollToTop}>
            <IconScrollToTop
            color="white"  
            width= '22px' 
            height= '22px'
            />
        </button>
        )
    )
}

export default ButtonScrollToTop