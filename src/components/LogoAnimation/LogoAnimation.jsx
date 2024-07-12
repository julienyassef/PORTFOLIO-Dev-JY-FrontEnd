import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './LogoAnimation.scss';
import circle from '/assets/pictureAnimation/Ellipse.png'; 
import letterY from '/assets/pictureAnimation/lettreY.png';
import letterJ from '/assets/pictureAnimation/lettreJ.png';

const LogoAnimation = ({ onAnimationEnd }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            document.querySelector('.logo-animation-container').classList.add('fade-out');
            setTimeout(() => {
                onAnimationEnd();
            }, 1000); 
        }, 4000); 

        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className="logo-animation-container">
            <div className="logo">
                <img src={letterY} alt="Y" className="letter y" />
                <img src={letterJ} alt="J" className="letter j" />
                <div className="circle" style={{ backgroundImage: `url(${circle})` }}></div>
            </div>
        </div>
    );
};

LogoAnimation.propTypes = {
    onAnimationEnd: PropTypes.func.isRequired,
};

export default LogoAnimation;
