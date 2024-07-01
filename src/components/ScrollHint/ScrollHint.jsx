//Scss
import './ScrollHint.scss'

//Import
import IconArrowScroll from '../Icon/IconNav/arrowScrollHint'


/**
 * Composant ScrollHint affiche une indication visuelle pour encourager l'utilisateur à défiler sur la page.
 * Il utilise des icônes de flèche pour signaler la possibilité de défilement vers le bas.
 */

const ScrollHint = () => {
    // Rendu de deux icônes de flèche, superposées pour renforcer l'effet visuel de défilement
    return (
        <div className="scroll-hint-button">
            <IconArrowScroll
                className="icon-arrow-scroll" 
                color="white" 
                width='20px'  
                height='20px'  
            />
            <IconArrowScroll
                className="icon-arrow-scroll"  
                color="white"  
                width='20px' 
                height='20px'  
            />
        </div>
    );
};

export default ScrollHint;
