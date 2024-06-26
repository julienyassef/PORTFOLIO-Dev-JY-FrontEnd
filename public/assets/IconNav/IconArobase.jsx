import PropTypes from 'prop-types';

const IconArobase = ({ width, height, className, color  }) => (
    <svg className={`iconEmail ${className}`}  width={width} height={height}  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Icon Arobase</title>
      <desc>Icone représentant un Arobase</desc>
      <path d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5H21.25V25H15C9.575 25 5 20.425 5 15C5 9.575 9.575 5 15 5C20.425 5 25 9.575 25 15V16.7875C25 17.775 24.1125 18.75 23.125 18.75C22.1375 18.75 21.25 17.775 21.25 16.7875V15C21.25 11.55 18.45 8.75 15 8.75C11.55 8.75 8.75 11.55 8.75 15C8.75 18.45 11.55 21.25 15 21.25C16.725 21.25 18.3 20.55 19.425 19.4125C20.2375 20.525 21.6375 21.25 23.125 21.25C25.5875 21.25 27.5 19.25 27.5 16.7875V15C27.5 8.1 21.9 2.5 15 2.5ZM15 18.75C12.925 18.75 11.25 17.075 11.25 15C11.25 12.925 12.925 11.25 15 11.25C17.075 11.25 18.75 12.925 18.75 15C18.75 17.075 17.075 18.75 15 18.75Z" fill={color}/>
    </svg>
  );

  IconArobase.propTypes = {
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    className: PropTypes.string,
    color: PropTypes.string
  };
  
  export default IconArobase;

