import PropTypes from 'prop-types';

const IconEmail = ({ width, height, className, color  }) => (
    <svg className={`iconEmail ${className}`}  width={width} height={height}  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Icon Email</title>
      <desc>Icone représentant un email</desc>
      <g clipPath="url(#clip0_16_2908)">
        <path d="M4.30835 11.4208L22.7979 29.9125C23.3449 30.4599 24.0755 30.7848 24.8483 30.8245C25.6211 30.8641 26.3812 30.6156 26.9813 30.1271L27.2188 29.9125L45.6959 11.4333C45.7563 11.6625 45.7959 11.8958 45.8167 12.1354L45.8334 12.5V37.5C45.8337 38.5512 45.4367 39.5637 44.7219 40.3345C44.0071 41.1053 43.0274 41.5774 41.9792 41.6563L41.6667 41.6667H8.33335C7.28215 41.667 6.26967 41.27 5.49888 40.5552C4.72808 39.8404 4.25594 38.8607 4.1771 37.8125L4.16669 37.5V12.5C4.16669 12.25 4.18752 12.0083 4.22919 11.7708L4.30835 11.4208ZM41.6667 8.33334C41.9188 8.33334 42.1667 8.35417 42.4063 8.39792L42.7604 8.47917L25.0104 26.2292L7.25419 8.475C7.48335 8.4125 7.72085 8.37084 7.96252 8.35L8.33335 8.33334H41.6667Z" fill="currentColor"/>
      </g>
    </svg>
  );

  IconEmail.propTypes = {
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
  
  export default IconEmail;

  
  