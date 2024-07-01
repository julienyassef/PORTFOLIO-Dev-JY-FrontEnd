import PropTypes from 'prop-types'

const IconLinkedin = ({ width, height, className }) => (
    <svg className={`iconLinkedin ${className}`}  width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Icon LinkedIn</title>
      <desc>Icone représentant LinkedIn</desc>
      <path d="M13.3333 31.6667H8.33334V15H13.3333V31.6667ZM31.6667 31.6667H26.6667V22.7633C26.6667 20.4433 25.84 19.2883 24.2017 19.2883C22.9033 19.2883 22.08 19.935 21.6667 21.23V31.6667H16.6667C16.6667 31.6667 16.7333 16.6667 16.6667 15H20.6133L20.9183 18.3333H21.0217C22.0467 16.6667 23.685 15.5367 25.9317 15.5367C27.64 15.5367 29.0217 16.0117 30.0767 17.205C31.1383 18.4 31.6667 20.0033 31.6667 22.255V31.6667Z" fill="currentColor"/>
      <path d="M10.8333 13.3333C12.2601 13.3333 13.4167 12.214 13.4167 10.8333C13.4167 9.45262 12.2601 8.33333 10.8333 8.33333C9.4066 8.33333 8.25 9.45262 8.25 10.8333C8.25 12.214 9.4066 13.3333 10.8333 13.3333Z" fill="currentColor"/>
    </svg>
  );

  IconLinkedin.propTypes = {
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    className: PropTypes.string
  };
  
  export default IconLinkedin;
  