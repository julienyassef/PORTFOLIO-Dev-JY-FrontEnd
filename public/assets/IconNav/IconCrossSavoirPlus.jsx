import PropTypes from 'prop-types';

function IconCrossSavoirPlus({ className, onClick }) {
  return (
    <svg
    className={className} 
    width="30" 
    height="30" 
    viewBox="0 0 45 45" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    >
        <path d="M45 30H30V45H15V30H0V15H15V0H30V15H45" fill="white"/> 
    </svg>
  )
}

IconCrossSavoirPlus.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};
export default IconCrossSavoirPlus
