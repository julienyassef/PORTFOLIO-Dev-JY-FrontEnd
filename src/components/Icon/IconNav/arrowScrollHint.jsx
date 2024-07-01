import PropTypes from 'prop-types';

const arrowScrollHint = ({ className, width, height, color }) => {
  return (
    <svg className={`iconScroolHint ${className}`} width={width} height={height}  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Flèche de défilement vers le bas</title>
      <desc>Une icône en forme de flèche pointant vers le bas, indiquant une action de défilement ou suggérant à l utilisateur de voir plus de contenu en dessous.</desc>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 8.75L15 16.25L22.5 8.75L25 11.25L15 21.25L5 11.25L7.5 8.75Z" fill={color}/>
    </svg>
  )
}

arrowScrollHint.propTypes = {
  className: PropTypes.string,
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

export default arrowScrollHint


