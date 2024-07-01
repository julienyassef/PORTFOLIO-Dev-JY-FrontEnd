
import PropTypes from 'prop-types';

function IconArrowScrollToTOP( {  width, height, color }) {
  return (
    <svg   width={width} height={height} viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Icon Arrow Scroll To Top</title>
      <desc>Icone représentant une fléche pour remonter en haut de la fenêtre</desc>
      <path d="M14.25 8.5L8 2.25L1.75 8.5" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

IconArrowScrollToTOP.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.string
};

export default IconArrowScrollToTOP




